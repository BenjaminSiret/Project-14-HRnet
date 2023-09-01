import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePickerInput from "../DatePicker/DatePickerInput";
import AddressForm from "../AddressForm/AddressForm";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

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

  const handleInputChange = (e) => {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value);
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
            margin: "auto",
            gap: "20px",
          }}
        >
          <TextField
            name="firstName"
            label="First Name"
            value={firstName}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={handleInputChange}
          ></TextField>
          <DatePickerInput
            label="Birth date"
            value={birthDate}
            onChange={(newValue) => setBirthDate(newValue)}
          />
          <DatePickerInput
            label="Joining date"
            value={joiningDate}
            onChange={(newValue) => setJoiningDate(newValue)}
          />
        </Box>
        <h3>Address</h3>
        <AddressForm states={states} />
      </form>
    </>
  );
}

export default Form;
