import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DatePickerInput from "../DatePicker/DatePickerInput";
import AddressForm from "../AddressForm/AddressForm";
import { validateInput, validateBirthDate, validateJoiningDate } from "../../services/validations";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    joiningDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
  ];

  const departments = ["Engineering", "Marketing", "Sales", "HR"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstNameError = validateInput("firstName", formData.firstName);
    const lastNameError = validateInput("lastName", formData.lastName);
    const birthDateError = validateBirthDate(formData.birthDate.startDate);
    const joiningDateError = validateJoiningDate(formData.joiningDate.startDate);

    const errors = {
      firstName: firstNameError,
      lastName: lastNameError,
      birthDate: birthDateError,
      joiningDate: joiningDateError,
    };

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "50px auto 40px",
            gap: "20px",
          }}
        >
          <Typography variant="h6">Employee details</Typography>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName && formErrors.firstName}
          ></TextField>
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName && formErrors.lastName}
          ></TextField>
          <DatePickerInput id="birthDate" label="Birth date" value={formData.birthDate} />
          <DatePickerInput id="joiningDate" label="Joining date" value={formData.joiningDate} />
          <Typography variant="h6">Address</Typography>
          <AddressForm
            states={states}
            street={formData.street}
            city={formData.city}
            state={formData.state}
            zipCode={formData.zipCode}
            department={formData.department}
            handleInputChange={handleInputChange}
          />
          <Typography variant="h6">Department</Typography>
          <TextField
            select
            id="department"
            name="department"
            label="Department"
            value={formData.department}
            onChange={handleInputChange}
          >
            {departments.map((department) => (
              <MenuItem key={department} value={department}>
                {department}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </>
  );
}

export default Form;
