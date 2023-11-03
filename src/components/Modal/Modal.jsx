import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function Modal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid gray",
            borderRadius: "4px",
            gap: "20px",
          }}
        >
          <Typography gutterBottom variant="body1">
            {message}
          </Typography>
          <Button onClick={onClose} variant="contained" sx={{ maxWidth: "70px" }}>
            Close
          </Button>
        </Box>
      </Box>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string,
};

export default Modal;
