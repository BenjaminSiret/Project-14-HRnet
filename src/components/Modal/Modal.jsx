import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function Modal ({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          border: "1px solid #D8D8D8",
          borderRadius: "4px",
          padding: "10px",
        }}
      >
        <TextField value="Modal"></TextField>
        <Button onClick={onClose} variant="outlined" sx={{ maxWidth: "70px" }}>
          Close
        </Button>
      </Box>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
