import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function QueueTracker() {

  const [queue, setQueue] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const joinQueue =
    async () => {

    try {

      setLoading(true);

      const res =
        await api.post(
          "/queue/join"
        );

      setQueue(res.data);

    } catch(error){

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const getQueue =
    async () => {

    try {

      const res =
        await api.get(
          "/queue/my"
        );

      setQueue(res.data);

    } catch(error){

      console.log(error);

    }

  };

  useEffect(() => {

  getQueue();

  const interval =
    setInterval(
      getQueue,
      5000
    );

  return () =>
    clearInterval(interval);

}, []);

  return (
    <>
    <Navbar />

    <div className="page-container">

      <div className="card">

        <h1>
          Queue Tracker
        </h1>

        {
          !queue && (

            <button
              onClick={joinQueue}
            >

              {
                loading
                ?
                "Joining..."
                :
                "Join Queue"
              }

            </button>

          )
        }

        {
          queue && (

            <>

              <h2>
                Queue Number:
                {" "}
                {queue.queueNumber}
              </h2>

              <h3>
                Position:
                {" "}
                {queue.position}
              </h3>

              <h3>
                Estimated Wait:
                {" "}
                {queue.estimatedWait}
                mins
              </h3>

              <p>
                Status:
                {" "}
                {queue.status}
              </p>

            </>

          )
        }

      </div>

    </div>
</>
  );

}