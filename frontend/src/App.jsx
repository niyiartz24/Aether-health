import {
 BrowserRouter,
 Routes,
 Route
}
from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BookAppointment from "./pages/BookAppointment";
import QueueTracker from "./pages/QueueTracker";
import SOS from "./pages/SOS";
import AdminDashboard from "./pages/AdminDashboard";
import Landing from "./pages/Landing";

function App(){

 return(

  <BrowserRouter>

   <Routes>

    <Route
 path="/"
 element={<Landing />}
/>

<Route
 path="/login"
 element={<Login />}
/>

    <Route
      path="/register"
      element={<Register />}
    />

    <Route
      path="/dashboard"
      element={<Dashboard />}
    />

    <Route
      path="/appointment"
      element={<BookAppointment />}
    />

    <Route
      path="/queue"
      element={<QueueTracker />}
    />

    <Route
      path="/sos"
      element={<SOS />}
    />

    <Route
      path="/admin"
      element={<AdminDashboard />}
    />

   </Routes>

  </BrowserRouter>

 )

}

export default App;