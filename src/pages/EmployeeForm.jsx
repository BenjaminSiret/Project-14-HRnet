import { Link } from "react-router-dom";
import Form from "../components/Form/Form.jsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function EmployeeForm() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid gray",
          borderRadius: "4px",
          padding: "10px 10px 7px",
          maxWidth: "380px",
          margin: "auto",
        }}
      >
        <Typography variant="h4">Add an employee</Typography>
      </Box>
      <Form />
      <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "30px" }}>
        <Button
          variant="outlined"
          component={Link}
          to="/"
          sx={{
            color: "#93AD18",
            borderColor: "#93AD18",
            "&:hover": {
              color: "#5F7907",
              backgroundColor: "#dfe8b5",
              border: "1px solid #5F7907",
            },
          }}
        >
          Back to home page
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/list"
          sx={{
            color: "#93AD18",
            borderColor: "#93AD18",
            "&:hover": {
              color: "#5F7907",
              backgroundColor: "#dfe8b5",
              border: "1px solid #5F7907",
            },
          }}
        >
          Employees list
        </Button>
      </Box>
    </>
  );
}

export default EmployeeForm;
