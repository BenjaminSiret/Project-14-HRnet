import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DataTable from "../components/DataTable/DataTable";

function EmployeesList() {
  return (
    <>
      <h2>Page de liste des employés</h2>
      <DataTable data="0" columns="0" pageSize="1" />
      <Box mt={4}>
        <Button variant="outlined" component={Link} to="/">
          Back to home page
        </Button>
      </Box>
    </>
  );
}

export default EmployeesList;
