import { Link } from "react-router-dom";

function EmployeesList() {
  return (
    <>
      <h2>Page de liste des employés</h2>
      <Link to="/">Retour à la page d'accueil</Link>
    </>
  );
}

export default EmployeesList;
