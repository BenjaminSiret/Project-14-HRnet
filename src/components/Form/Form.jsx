import { useState, useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import {
  validateInput,
  validateBirthDate,
  validateJoiningDate,
} from "../../services/validationsService";
import { addEmployeeToDatabase, doesEmployeeExist } from "../../services/databaseService";
import { states, departments } from "../../data/data";
import DatePickerInput from "../DatePicker/DatePickerInput";
import dayjs from "dayjs";
import AddressForm from "../AddressForm/AddressForm";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "react-essential-modal";

function Form() {
  const { state, dispatch } = useContext(AppContext);
  const [formErrors, setFormErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const validationRules = {
    firstName: validateInput,
    lastName: validateInput,
    birthDate: validateBirthDate,
    joiningDate: validateJoiningDate,
    street: validateInput,
    city: validateInput,
    state: validateInput,
    zipCode: validateInput,
    department: validateInput,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    Object.keys(state.formData).forEach((key) => {
      let error;

      if (key === "birthDate" || key === "joiningDate") {
        error = validationRules[key](state.formData[key]);
      } else {
        error = validationRules[key](key, state.formData[key]);
      }

      if (error) {
        errors[key] = error;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const employeeExists = await doesEmployeeExist(state.formData);

      if (!employeeExists) {
        const employeeId = await addEmployeeToDatabase(state.formData);

        if (employeeId) {
          dispatch({
            type: "ADD_EMPLOYEE",
            payload: {
              id: employeeId,
              ...state.formData,
            },
          });

          setMessage("Employee added successfully");

          dispatch({
            type: "RESET_FORM_DATA",
            payload: {
              firstName: "",
              lastName: "",
              birthDate: "",
              joiningDate: "",
              street: "",
              city: "",
              state: "",
              zipCode: "",
              department: "",
            },
          });
        } else {
          setMessage("Failed to add employee");
        }
      } else {
        setMessage("Employee already exists");
      }

      setIsModalOpen(true);
      setFormErrors({});
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
            name="birthDate"
            label="Birth date"
            value={
              state.formData.birthDate ? dayjs(state.formData.birthDate).format("DD/MM/YYYY") : null
            }
            onDateChange={handleDateChange}
            error={!!formErrors.birthDate}
            helperText={formErrors.birthDate && formErrors.birthDate}
          />
          <DatePickerInput
            id="joiningDate"
            name="joiningDate"
            label="Joining date"
            value={
              state.formData.joiningDate
                ? dayjs(state.formData.joiningDate).format("DD/MM/YYYY")
                : null
            }
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
          <Modal isOpen={isModalOpen} onClose={closeModal} message={message}></Modal>
        </Box>
        <Button type="submit" variant="contained" sx={{ color: "white" }}>
          Save
        </Button>
      </form>
    </>
  );
}

export default Form;
