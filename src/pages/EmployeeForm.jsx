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
      <Box mt={8}>
        <Button variant="outlined" component={Link} to="/">
          Back to home page
        </Button>
      </Box>
    </>
  );
}

export default EmployeeForm;
