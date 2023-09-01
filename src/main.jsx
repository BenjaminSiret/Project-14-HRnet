import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EmployeeForm from "./pages/EmployeeForm.jsx";
import EmployeesList from "./pages/EmployeesList.jsx";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <EmployeeForm />,
  },
  {
    path: "/list",
    element: <EmployeesList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<App router={router} />);
