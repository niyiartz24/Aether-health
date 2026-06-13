import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard(){

 const user =
 JSON.parse(
  localStorage.getItem("user")
 );

 return(
<>
<Navbar />
  <div>

   <h1>
    Welcome {user?.name}
   </h1>
    <div className="hero-card">

    <p>
      Hospital operations are
      running smoothly today.
    </p>

</div>
   <div className="dashboard-grid">

 <Link
  to="/appointment"
  className="feature-card"
 >
  <h3>Appointments</h3>
  <p>
   Book and manage consultations
  </p>
 </Link>

 <Link
  to="/queue"
  className="feature-card"
 >
  <h3>Queue Tracking</h3>
  <p>
   Monitor waiting time live
  </p>
 </Link>

 <Link
  to="/sos"
  className="feature-card"
 >
  <h3>Emergency SOS</h3>
  <p>
   Trigger immediate assistance
  </p>
 </Link>

</div>

   <div className="card">

  <h3>
    Current Queue
  </h3>

  <p>
    Track your waiting status
  </p>

</div>

  </div>
</>
 );

}