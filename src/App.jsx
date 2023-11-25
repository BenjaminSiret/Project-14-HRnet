import { RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AppProvider } from "./utils/AppContext";
import PropTypes from "prop-types";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#93AD18",
      contrastText: "#fff",
    },
    secondary: {
      main: "#5F7907",
      constrastText: "#fff",
    },
  }
});

function App({ router }) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

App.propTypes = {
  router: PropTypes.object.isRequired,
};

export default App;
