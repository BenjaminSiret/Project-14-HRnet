import { useState, useContext } from "react";
import { AppContext } from "../../utils/AppContext";
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
  const { state, dispatch } = useContext(AppContext);
  const [formErrors, setFormErrors] = useState({});

  const addressData = {
    street: state.formData.street,
    city: state.formData.city,
    state: state.formData.state,
    zipCode: state.formData.zipCode,
  };

  const addressErrors = {
    street: formErrors.street,
    city: formErrors.city,
    state: formErrors.state,
    zipCode: formErrors.zipCode,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: { [name]: value },
    });
  };

  const handleDateChange = (date, name) => {
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: { [name]: dayjs(date).format("DD/MM/YYYY") },
    });
  };

  const validationRules = {
    firstName: validateInput,
    lastName: validateBirthDate,
    birthDate: validateJoiningDate,
    joiningDate: validateInput,
    street: validateInput,
    city: validateInput,
    state: validateInput,
    zipCode: validateInput,
    department: validateInput,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    Object.keys(state.formData).forEach((key) => {
      const error = validationRules[key](state.formData[key]);
      if (error) {
        errors[key] = error;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: {
          id: state.employees.length + 1,
          ...state.formData,
        },
      });
    } else {
      console.log(errors);
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
            value={state.formData.firstName}
            onChange={handleInputChange}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName && formErrors.firstName}
          ></TextField>
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            value={state.formData.lastName}
            onChange={handleInputChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName && formErrors.lastName}
          ></TextField>
          <DatePickerInput
            id="birthDate"
            label="Birth date"
            name="birthDate"
            value={dayjs(state.formData.birthDate).format("DD/MM/YYYY")}
            onDateChange={handleDateChange}
            error={!!formErrors.birthDate}
            helperText={formErrors.birthDate && formErrors.birthDate}
          />
          <DatePickerInput
            id="joiningDate"
            name="joiningDate"
            label="Joining date"
            value={dayjs(state.formData.joiningDate).format("DD/MM/YYYY")}
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
            value={state.formData.department}
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
