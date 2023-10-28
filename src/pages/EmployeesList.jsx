import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DataTable from "../components/DataTable/DataTable";
import { subscribeToEmployees } from "../services/databaseService";
import { useEffect, useContext } from "react";
import { AppContext } from "../utils/AppContext";

function EmployeesList() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (state.employees.length === 0) {
      const unsubscribe = subscribeToEmployees((employees) => {
        employees.forEach((employee) => {
          dispatch({
            type: "ADD_EMPLOYEE",
            payload: employee,
          });
        });
      });

      return () => unsubscribe();
    }
  }, [dispatch, state.employees.length]);

  return (
    <>
      <h2>Employees list</h2>
      <DataTable pageSize="1" />
      <Box mt={4}>
        <Button variant="outlined" component={Link} to="/">
          Back to home page
        </Button>
      </Box>
    </>
  );
}

export default EmployeesList;
