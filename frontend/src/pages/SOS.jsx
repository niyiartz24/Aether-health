import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function SOS() {

  const [loading, setLoading] =
    useState(false);

  const [status, setStatus] =
    useState("");

    const [type, setType] = useState("medical");

  const triggerSOS = () => {

    setLoading(true);

    navigator.geolocation.getCurrentPosition(

      async(position)=>{

        try{

          await api.post(
            "/emergency",
            {
              type,
              description:
                "Emergency assistance requested",

              lat:
                position.coords.latitude,

              lng:
                position.coords.longitude
            }
          );

          setStatus(
            "Emergency Alert Sent Successfully"
          );

        }catch(error){

          console.log(error);

          setStatus(
            "Failed to send emergency alert"
          );

        }finally{

          setLoading(false);

        }

      },

      ()=>{
        setLoading(false);

        alert(
          "Location access required"
        );
      }

    );

  };

  return (

<>
    <Navbar />

    <div className="page-container">

      <div
        className="sos-container"
      >

        <h1 className="sos-title">

 Emergency Response

</h1>

        <p className="sos-warning">

 Press only during a genuine emergency.

 Your location will be shared instantly.

</p>

        <select
 value={type}
 onChange={(e)=>
   setType(e.target.value)
 }
>
 <option value="medical">
  Medical
 </option>

 <option value="security">
  Security
 </option>

 <option value="accident">
  Accident
 </option>
</select>

        <button
          className="sos-btn"
          onClick={triggerSOS}
        >

          {
            loading
            ?
            "Sending..."
            :
            "SOS"
          }

        </button>

        {
          status &&

          <div className="card">

            <h3>
              {status}
            </h3>

          </div>
        }

      </div>

    </div>

    </>

  );

}