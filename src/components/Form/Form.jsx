import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DatePickerInput from "../DatePicker/DatePickerInput";
import AddressForm from "../AddressForm/AddressForm";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [department, setDepartment] = useState("");

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
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value);
    } else if (e.target.name === "department") {
      setDepartment(e.target.value);
    }
  };

  return (
    <>
      <form action="">
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
            value={firstName}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={handleInputChange}
          ></TextField>
          <DatePickerInput
            id="birthDate"
            label="Birth date"
            value={birthDate}
            onChange={(newValue) => setBirthDate(newValue)}
          />
          <DatePickerInput
            id="joiningDate"
            label="Joining date"
            value={joiningDate}
            onChange={(newValue) => setJoiningDate(newValue)}
          />
          <Typography variant="h6">Address</Typography>
          <AddressForm states={states} />
          <Typography variant="h6">Department</Typography>
          <TextField
            select
            id="department"
            name="department"
            label="Department"
            value={department}
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
