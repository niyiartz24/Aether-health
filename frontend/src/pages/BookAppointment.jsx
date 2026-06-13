import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function BookAppointment() {

  const [symptoms, setSymptoms] =
    useState("");

  const [department, setDepartment] =
    useState("");

  const [priority, setPriority] =
    useState("");

  const [doctor, setDoctor] =
    useState("");

  const [appointmentDate,
    setAppointmentDate] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showPayment,
    setShowPayment] =
    useState(false);

  const [appointmentId,
    setAppointmentId] =
    useState(null);

  const handleTriage =
    async () => {

    try {

      const res =
        await api.post(
          "/ai/triage",
          {
            symptoms
          }
        );

      setDepartment(
        res.data.department
      );

      setPriority(
        res.data.priority
      );

    } catch(error){

      console.log(error);

    }

  };

  const handleAppointment =
    async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res =
        await api.post(
          "/appointments",
          {
            symptoms,
            department,
            doctor,
            appointmentDate
          }
        );

      setAppointmentId(
        res.data._id
      );

      setShowPayment(true);

    } catch(error){

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const handlePayment =
    () => {

    alert(
      "OPay Payment Successful"
    );

    setShowPayment(false);

  };

  return (
    <>
    <Navbar />

    <div className="page-container">

      <div className="card">

        <h1>
          Book Appointment
        </h1>

        <textarea

          placeholder=
          "Describe your symptoms"

          value={symptoms}

          onChange={(e)=>
            setSymptoms(
              e.target.value
            )
          }

        />

        <button
          onClick={handleTriage}
        >
          Analyze Symptoms
        </button>

        {
          department && (

            <div
              style={{
                marginTop:"20px"
              }}
            >

              <h3>
                Suggested Department
              </h3>

              <p>
                {department}
              </p>

              <p>
                Priority:
                {" "}
                {priority}
              </p>

            </div>

          )
        }

      </div>

      {
        department && (

          <form
            className="card"
            onSubmit={
              handleAppointment
            }
          >

            <h2>
              Appointment Details
            </h2>

            <input

              placeholder=
              "Doctor Name"

              value={doctor}

              onChange={(e)=>
                setDoctor(
                  e.target.value
                )
              }

            />

            <input

              type="date"

              value={
                appointmentDate
              }

              onChange={(e)=>
                setAppointmentDate(
                  e.target.value
                )
              }

            />

            <button>

              {
                loading
                ?
                "Booking..."
                :
                "Book Appointment"
              }

            </button>

          </form>

        )
      }

      {
        showPayment && (

          <div
            className="card"
          >

            <h2>
              Consultation Fee
            </h2>

            <h1>
              ₦2,000
            </h1>

            <p>
              Powered by OPay
            </p>

            <button
              onClick={
                handlePayment
              }
            >
              Complete Payment
            </button>

          </div>

        )
      }

    </div>
      </>
  );

}