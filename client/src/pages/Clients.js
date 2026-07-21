import React, { useEffect, useState } from "react";
import axios from "axios";

function Clients() {

  const [clients, setClients] = useState([]);

  const [client, setClient] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: ""
  });

  const token = localStorage.getItem("token");

  // Backend URL
  const API_URL = "https://nutrition-assistant-4.onrender.com";

  // Get all clients
  const getClients = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/clients`,
        {
          headers: {
            Authorization: token
          }
        }
      );

      setClients(response.data);

    } catch (error) {
      console.log(error);
      alert("Unable to get clients");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(() => {
    getClients();
   }, []);

  // Add client
  const addClient = async () => {

    try {

      await axios.post(
        `${API_URL}/api/clients`,
        client,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json"
          }
        }
      );

      alert("Client Added Successfully");

      setClient({
        name: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        goal: ""
      });

      getClients();

    } catch (error) {
      console.log(error);
      alert("Failed to add client");
    }

  };

  return (
    <div className="container mt-5">

      <h2>Client Management</h2>

      <div className="card p-4 mt-3">

        <input
          className="form-control mb-2"
          placeholder="Name"
          value={client.name}
          onChange={(e) => setClient({ ...client, name: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Age"
          value={client.age}
          onChange={(e) => setClient({ ...client, age: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Gender"
          value={client.gender}
          onChange={(e) => setClient({ ...client, gender: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Height"
          value={client.height}
          onChange={(e) => setClient({ ...client, height: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Weight"
          value={client.weight}
          onChange={(e) => setClient({ ...client, weight: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Goal"
          value={client.goal}
          onChange={(e) => setClient({ ...client, goal: e.target.value })}
        />

        <button
          className="btn btn-primary"
          onClick={addClient}
        >
          Add Client
        </button>

      </div>

      <h3 className="mt-4">Clients List</h3>

      {clients.map((item) => (
        <div className="card p-3 mt-2" key={item._id}>

          <h5>{item.name}</h5>

          <p>
            Age: {item.age} <br />
            Gender: {item.gender} <br />
            Height: {item.height} <br />
            Weight: {item.weight} <br />
            Goal: {item.goal}
          </p>

        </div>
      ))}

    </div>
  );
}

export default Clients;