import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return(
    <div className="navbar">

 <div className="logo">

  Aether Health

 </div>

 <div className="nav-links">

  <Link to="/dashboard">
   Dashboard
  </Link>

  <Link to="/appointment">
   Appointments
  </Link>

  <Link to="/queue">
   Queue
  </Link>

  <Link to="/sos">
   Emergency
  </Link>

  <Link to="/admin">
   Control Center
  </Link>

 </div>

 <button
  className="logout-btn"
  onClick={logout}
 >
  Logout
 </button>

</div>
  );
}