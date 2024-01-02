import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";

const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "joiningDate", headerName: "Joining date", width: 130 },
  { field: "department", headerName: "Department", width: 130 },
  { field: "birthDate", headerName: "Birth date", width: 130 },
  { field: "street", headerName: "Street", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  { field: "state", headerName: "State", width: 130 },
  { field: "zipCode", headerName: "Zip Code", width: 130 },
];

export default function DataTable() {
  const { state } = useContext(AppContext);
  console.log(state.employees)
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={state.employees}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
}
