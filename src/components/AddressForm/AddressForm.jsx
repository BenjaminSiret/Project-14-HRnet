import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

function AddressForm({ states, address, addressErrors, handleInputChange }) {
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
          value={address.street}
          onChange={handleInputChange}
          error={!!addressErrors.street}
          helperText={addressErrors.street && addressErrors.street}
        ></TextField>
        <TextField
          name="city"
          label="City"
          value={address.city}
          onChange={handleInputChange}
          error={!!addressErrors.city}
          helperText={addressErrors.city && addressErrors.city}
        ></TextField>
        <TextField
          select
          name="state"
          label="State"
          value={address.state}
          onChange={handleInputChange}
          SelectProps={{
            style: { textAlign: "left" },
          }}
          error={!!addressErrors.state}
          helperText={addressErrors.state && addressErrors.state}
        >
          {states.map((state) => (
            <MenuItem key={state} value={state.abbreviation}>
              {state.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          type="number"
          name="zipCode"
          label="Zip Code"
          value={address.zipCode}
          inputProps={{ min: 0 }}
          onChange={handleInputChange}
          error={!!addressErrors.zipCode}
          helperText={addressErrors.zipCode && addressErrors.zipCode}
        ></TextField>
      </Box>
    </>
  );
}

AddressForm.propTypes = {
  states: PropTypes.arrayOf(PropTypes.string),
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
  }),
  addressErrors: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
  }),
  handleInputChange: PropTypes.func,
  error: PropTypes.bool,
};

export default AddressForm;
