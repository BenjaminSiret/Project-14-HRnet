import { RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";
import "./App.css";

function App({ router }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

App.propTypes = {
  router: PropTypes.object.isRequired,
};

export default App;
