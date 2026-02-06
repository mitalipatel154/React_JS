import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container justify-content-center">
        <div className="navbar-nav">
          <Link className="nav-link fw-semibold" to="/">Home</Link>
          <Link className="nav-link fw-semibold" to="/add">Add Employee</Link>
          <Link className="nav-link fw-semibold" to="/view">View Employee</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
