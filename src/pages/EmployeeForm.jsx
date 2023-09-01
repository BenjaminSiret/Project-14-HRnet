import { Link } from "react-router-dom";
import Form from "../components/Form/Form.jsx";

function EmployeeForm() {
  return (
    <>
      <h2>Page de formulaire</h2>
      <Form />
      <Link to="/">Retour à la page d'accueil</Link>
    </>
  );
}

export default EmployeeForm;
