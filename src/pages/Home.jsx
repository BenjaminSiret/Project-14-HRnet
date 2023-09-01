import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>HRnet - Application de ressources humaines</h1>
      <div className="card">
        <h2>Ajouter un employé</h2>
        <Link to="/add">Aller à la page d'ajout</Link>
      </div>
      <div className="card">
        <h2>Liste des employés</h2>
        <Link to="/list">Aller à la page de liste</Link>
      </div>
    </>
  );
}

export default Home;
