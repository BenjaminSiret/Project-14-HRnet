import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DataTable from "../components/DataTable/DataTable";
import db from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../utils/AppContext";
import convertTimestampToDate from "../services/formatting";

function EmployeesList() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const employeesCol = collection(db, "employees");
      const employeesSnapshot = await getDocs(employeesCol);
      const employeesList = employeesSnapshot.docs.map((doc) => convertTimestampToDate(doc.data()));

      employeesList.forEach((employee) => {
        dispatch({
          type: "ADD_EMPLOYEE",
          payload: employee,
        });
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Page de liste des employés</h2>
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
