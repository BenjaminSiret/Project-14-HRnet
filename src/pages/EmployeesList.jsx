import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DataTable from "../components/DataTable/DataTable";
import { subscribeToEmployees } from "../services/databaseService";
import { useEffect, useContext } from "react";
import { AppContext } from "../utils/AppContext";

function EmployeesList() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const unsubscribe = subscribeToEmployees((employees) => {
      employees.forEach((newEmployee) => {
        const employeeExists = state.employees.some((e) => e.id === newEmployee.id);
        if (!employeeExists) {
          dispatch({
            type: "ADD_EMPLOYEE",
            payload: newEmployee,
          });
        }
      });
    });

    return () => unsubscribe();
  }, [dispatch, state.employees]);


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
        <Typography variant="h4">Employees list</Typography>
      </Box>
      <Box mt={8}>
        <DataTable pageSize="1" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
        <Button variant="outlined" component={Link} to="/">
          Back to home page
        </Button>
        <Button variant="outlined" component={Link} to="/add">
          Add an employee
        </Button>
      </Box>
    </>
  );
}

export default EmployeesList;
