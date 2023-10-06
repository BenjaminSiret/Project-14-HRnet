import { RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AppProvider } from "./utils/AppContext";
import PropTypes from "prop-types";
import "./App.css";

function App({ router }) {
  return (
    <AppProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </AppProvider>
  );
}

App.propTypes = {
  router: PropTypes.object.isRequired,
};

export default App;
