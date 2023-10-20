import { Link } from "react-router-dom";
import Form from "../components/Form/Form.jsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

//TODO: create modale to confirm the add of an employee

function EmployeeForm() {
  return (
    <>
      <Typography variant="h4">Add an employee</Typography>
      <Form />
      <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: '30px'}}>
        <Button variant="outlined" component={Link} to="/">
          Back to home page
        </Button>
        <Button variant="outlined" component={Link} to="/list">
          List of employees
        </Button>
      </Box>
    </>
  );
}

export default EmployeeForm;
