import { createContext, useReducer } from 'react';
import PropTypes from "prop-types";

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };

    default:
      return state;
  }
};

appReducer.proptypes = {
  state: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired
}

const AppProvider = ({ children }) => {
  const initialState = {
    formData: {
      firstName: "",
      lastName: "",
      birthDate: "",
      joiningDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AppContext, AppProvider }
