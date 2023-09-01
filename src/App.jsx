import { RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";
import "./App.css";

function App({ router }) {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

App.propTypes = {
  router: PropTypes.object.isRequired,
};

export default App;
