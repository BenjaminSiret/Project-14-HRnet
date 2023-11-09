import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function Modal({
  isOpen,
  onClose,
  message,
  overlayStyles,
  modalStyles,
  buttonStyles,
  buttonVariant = "contained",
  buttonText = "Close",
}) {
  if (!isOpen) return null;

  const defaultOverlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 100,
  };

  const defaultModalStyles = {
    backgroundColor: "white",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: "4px",
    gap: "20px",
  };

  const defaultButtonStyles = {
    maxWidth: "70px",
  };

  return (
    <>
      <Box sx={{ ...defaultOverlayStyles, ...overlayStyles }}>
        <Box sx={{ ...defaultModalStyles, ...modalStyles }}>
          <Typography gutterBottom variant="body1">
            {message}
          </Typography>
          <Button
            onClick={onClose}
            variant={buttonVariant}
            sx={{ ...defaultButtonStyles, ...buttonStyles }}
          >
            {buttonText}
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
  overlayStyles: PropTypes.object,
  modalStyles: PropTypes.object,
  buttonStyles: PropTypes.object,
  buttonVariant: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Modal;
