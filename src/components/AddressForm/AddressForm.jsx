import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

function AddressForm({ states }) {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "street") {
      setStreet(e.target.value);
    } else if (e.target.name === "city") {
      setCity(e.target.value);
    } else if (e.target.name === "state") {
      setState(e.target.value);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          gap: "20px",
        }}
      >
        <TextField name="street" label="Street" value={street} onChange={handleChange}></TextField>
        <TextField name="city" label="City" value={city} onChange={handleChange}></TextField>
        <TextField
          select
          name="state"
          label="State"
          value={state}
          onChange={handleChange}
          SelectProps={{
            style: { textAlign: "left" },
          }}
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          type="number"
          name="zipCode"
          label="Zip Code"
          inputProps={{ min: 0 }}
        ></TextField>
      </Box>
    </>
  );
}

AddressForm.propTypes = {
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddressForm;
