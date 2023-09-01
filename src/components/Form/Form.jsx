import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleInputChange = (e) => {
    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.id === "lastName") {
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
            id="firstName"
            label="First Name"
            value={firstName}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            id="lastName"
            label="Last Name"
            value={lastName}
            onChange={handleInputChange}
          ></TextField>
        </Box>
      </form>
    </>
  );
}

export default Form;
