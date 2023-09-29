import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DatePickerInput from "../DatePicker/DatePickerInput";
import AddressForm from "../AddressForm/AddressForm";
import { validateInput, validateBirthDate, validateJoiningDate } from "../../services/validations";
import { states, departments } from "../../data/data";
import dayjs from "dayjs";

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
  const addressData = {
    street: formData.street,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
  };

  const [formErrors, setFormErrors] = useState({});
  const addressErrors = {
    street: formErrors.street,
    city: formErrors.city,
    state: formErrors.state,
    zipCode: formErrors.zipCode,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: dayjs(date).format("DD/MM/YYYY"),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstNameError = validateInput("firstName", formData.firstName);
    const lastNameError = validateInput("lastName", formData.lastName);
    const birthDateError = validateBirthDate(formData.birthDate);
    const joiningDateError = validateJoiningDate(formData.joiningDate);
    const streetError = validateInput("street", formData.street);
    const cityError = validateInput("city", formData.city);
    const stateError = validateInput("state", formData.state);
    const zipCodeError = validateInput("zipCode", formData.zipCode);
    const departementError = validateInput("department", formData.department);

    const errors = {
      firstName: firstNameError,
      lastName: lastNameError,
      birthDate: birthDateError,
      joiningDate: joiningDateError,
      street: streetError,
      city: cityError,
      state: stateError,
      zipCode: zipCodeError,
      department: departementError,
    };

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully!");
    }
    console.log(errors);
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
          <DatePickerInput
            id="birthDate"
            label="Birth date"
            name="birthDate"
            value={dayjs(formData.birthDate).format("DD/MM/YYYY")}
            onDateChange={handleDateChange}
            error={!!formErrors.birthDate}
            helperText={formErrors.birthDate && formErrors.birthDate}
          />
          <DatePickerInput
            id="joiningDate"
            name="joiningDate"
            label="Joining date"
            value={dayjs(formData.joiningDate).format("DD/MM/YYYY")}
            onDateChange={handleDateChange}
            error={!!formErrors.joiningDate}
            helperText={formErrors.joiningDate && formErrors.joiningDate}
          />
          <Typography variant="h6">Address</Typography>
          <AddressForm
            states={states}
            address={addressData}
            addressErrors={addressErrors}
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
            error={!!formErrors.department}
            helperText={formErrors.department && formErrors.department}
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
