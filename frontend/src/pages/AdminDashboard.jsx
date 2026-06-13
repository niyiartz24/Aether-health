import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {

  const [appointments, setAppointments] =
    useState([]);

  const [queues, setQueues] =
    useState([]);

  const [emergencies, setEmergencies] =
    useState([]);

  const loadData = async () => {

    try {

      const [
        appointmentsRes,
        queueRes,
        emergencyRes
      ] = await Promise.all([

        api.get("/appointments"),

        api.get("/queue/all"),

        api.get("/emergency")

      ]);

      setAppointments(
        appointmentsRes.data
      );

      setQueues(
        queueRes.data
      );

      setEmergencies(
        emergencyRes.data
      );

    } catch(error){

      console.log(error);

    }

  };

  useEffect(() => {

    loadData();

    const interval =
      setInterval(
        loadData,
        5000
      );

    return () =>
      clearInterval(interval);

  }, []);

  return (
    <>
    <Navbar />
    
    <div className="page-container">
        

      <div className="admin-hero">

 <div>

  <h1>
   Hospital Control Center
  </h1>

  <p>
   Real-time monitoring of appointments,
   queues and emergencies.
  </p>

 </div>

 <div className="live-indicator">

  LIVE

 </div>

</div>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>
            Appointments
          </h2>
          <h1>
            {appointments.length}
          </h1>
        </div>

        <div className="stat-card">
          <h2>
            Queue
          </h2>
          <h1>
            {queues.length}
          </h1>
        </div>

        <div className="stat-card">
          <h2>
            Emergencies
          </h2>
          <h1>
            {emergencies.length}
          </h1>
        </div>

      </div>

      <div className="stat-card">

        <h2>
          Recent Emergencies
        </h2>

        

        {
          emergencies.map(
            (emergency) => (

              <div
                key={emergency._id}
                style={{
                  marginBottom:"15px"
                }}
              >

                <strong>
                  {
                    emergency.patientId?.name
                  }
                </strong>

                <p>
                  Type:
                  {" "}
                  {emergency.type}
                </p>

                <span
 className={`severity ${
  emergency.severity
 }`}
>
 {emergency.severity}
</span>

                <p>
                  Status:
                  {" "}
                  {emergency.status}
                </p>

                <select
  value={emergency.status}
  onChange={async (e) => {

    await api.patch(
      `/emergency/${emergency._id}/status`,
      {
        status:e.target.value
      }
    );

    loadData();

  }}
>

<option value="pending">
 Pending
</option>

<option value="responding">
 Responding
</option>

<option value="resolved">
 Resolved
</option>

</select>

              </div>

            )
          )
        }

      </div>

    </div>
    </>

  );

}