import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

 return (
  <div className="container mt-5">

    <div className="d-flex justify-content-between align-items-center">
      <h2>Nutrition Assistant Dashboard</h2>

      <button
        className="btn btn-danger"
        onClick={logout}
      >
        Logout
      </button>
    </div>

    <div className="row mt-4">

      {/* Client Management */}
      <div className="col-md-4">
        <div className="card p-4 shadow">
          <h4>Client Management</h4>
          <p>Add, update and view clients.</p>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/clients")}
          >
            Manage Clients
          </button>
        </div>
      </div>

      {/* Meal Plans */}
      <div className="col-md-4">
        <div className="card p-4 shadow">
          <h4>Meal Plans</h4>
          <p>Create and manage diet plans.</p>

          <button
            className="btn btn-success"
            onClick={() => navigate("/mealplans")}
          >
            View Meal Plans
          </button>
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="col-md-4">
        <div className="card p-4 shadow">
          <h4>Progress Tracking</h4>
          <p>Track client health progress.</p>

          <button
            className="btn btn-warning"
            onClick={() => navigate("/progress")}
          >
            Track Progress
          </button>
        </div>
      </div>

    </div>

  </div>
);
}

export default Dashboard;