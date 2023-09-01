import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

function AddressForm({ states, street, city, state, zipCode, handleInputChange }) {
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
        <TextField
          name="street"
          label="Street"
          value={street}
          onChange={handleInputChange}
        ></TextField>
        <TextField name="city" label="City" value={city} onChange={handleInputChange}></TextField>
        <TextField
          select
          name="state"
          label="State"
          value={state}
          onChange={handleInputChange}
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
          value={zipCode}
          inputProps={{ min: 0 }}
          onChange={handleInputChange}
        ></TextField>
      </Box>
    </>
  );
}

AddressForm.propTypes = {
  states: PropTypes.arrayOf(PropTypes.string),
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipCode: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default AddressForm;
