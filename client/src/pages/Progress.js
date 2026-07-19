import React, { useEffect, useState } from "react";
import axios from "axios";

function Progress() {

  const [progressList, setProgressList] = useState([]);

  const [progress, setProgress] = useState({
    clientName: "",
    weight: "",
    bmi: "",
    notes: ""
  });

  const token = localStorage.getItem("token");


  // Get progress records
  const getProgress = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/progress",
        {
          headers: {
            Authorization: token
          }
        }
      );

      setProgressList(response.data);

    } catch (error) {
      console.log(error);
      alert("Unable to get progress data");
    }
  };


  useEffect(() => {
    getProgress();
  }, []);


  // Add progress
  const addProgress = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/progress",
        progress,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json"
          }
        }
      );

      alert("Progress Added Successfully");

      setProgress({
        clientName: "",
        weight: "",
        bmi: "",
        notes: ""
      });

      getProgress();

    } catch (error) {
      console.log(error);
      alert("Failed to add progress");
    }
  };


  return (
    <div className="container mt-5">

      <h2>Progress Tracking</h2>


      <div className="card p-4 mt-3">

        <input
          className="form-control mb-2"
          placeholder="Client Name"
          value={progress.clientName}
          onChange={(e) =>
            setProgress({
              ...progress,
              clientName: e.target.value
            })
          }
        />


        <input
          className="form-control mb-2"
          placeholder="Weight"
          value={progress.weight}
          onChange={(e) =>
            setProgress({
              ...progress,
              weight: e.target.value
            })
          }
        />


        <input
          className="form-control mb-2"
          placeholder="BMI"
          value={progress.bmi}
          onChange={(e) =>
            setProgress({
              ...progress,
              bmi: e.target.value
            })
          }
        />


        <input
          className="form-control mb-2"
          placeholder="Notes"
          value={progress.notes}
          onChange={(e) =>
            setProgress({
              ...progress,
              notes: e.target.value
            })
          }
        />


        <button
          className="btn btn-warning"
          onClick={addProgress}
        >
          Add Progress
        </button>

      </div>


      <h3 className="mt-4">Progress Records</h3>


      {
        progressList.map((item) => (

          <div
            className="card p-3 mt-2"
            key={item._id}
          >

            <h5>{item.clientName}</h5>

            <p>
              Weight: {item.weight} kg <br/>
              BMI: {item.bmi} <br/>
              Notes: {item.notes}
            </p>

          </div>

        ))
      }


    </div>
  );
}

export default Progress;