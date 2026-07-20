import React, { useEffect, useState } from "react";
import axios from "axios";

function MealPlans() {

  const [mealPlans, setMealPlans] = useState([]);

  const [mealPlan, setMealPlan] = useState({
    clientName: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    snacks: ""
  });

  const token = localStorage.getItem("token");


  // Get all meal plans
  const getMealPlans = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/mealplans",
        {
          headers: {
            Authorization: token
          }
        }
      );

      setMealPlans(response.data);

    } catch (error) {
      console.log(error);
      alert("Unable to get meal plans");
    }
  };


  useEffect(() => {
    getMealPlans();
  }, []);


  // Add meal plan
  const addMealPlan = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/mealplans",
        mealPlan,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json"
          }
        }
      );

      alert("Meal Plan Added Successfully");

      setMealPlan({
        clientName: "",
        breakfast: "",
        lunch: "",
        dinner: "",
        snacks: ""
      });

      getMealPlans();

    } catch (error) {
      console.log(error);
      alert("Failed to add meal plan");
    }
  };


  return (
    <div className="container mt-5">

      <h2>Meal Plan Management</h2>


      <div className="card p-4 mt-3">

        <input
          className="form-control mb-2"
          placeholder="Client Name"
          value={mealPlan.clientName}
          onChange={(e) =>
            setMealPlan({
              ...mealPlan,
              clientName: e.target.value
            })
          }
        />


        <input
          className="form-control mb-2"
          placeholder="Breakfast"
          value={mealPlan.breakfast}
          onChange={(e) =>
            setMealPlan({
              ...mealPlan,
              breakfast: e.target.value
            })
          }
        />


        <input
          className="form-control mb-2"
          placeholder="Lunch"
          value={mealPlan.lunch}
          onChange={(e) =>
            setMealPlan({
              ...mealPlan,
              lunch: e.target.value
            })
          }
        />


        <input
          className="form-control mb-2"
          placeholder="Dinner"
          value={mealPlan.dinner}
          onChange={(e) =>
            setMealPlan({
              ...mealPlan,
              dinner: e.target.value
            })
          }
        />


        <input
          className="form-control mb-2"
          placeholder="Snacks"
          value={mealPlan.snacks}
          onChange={(e) =>
            setMealPlan({
              ...mealPlan,
              snacks: e.target.value
            })
          }
        />


        <button
          className="btn btn-success"
          onClick={addMealPlan}
        >
          Add Meal Plan
        </button>

      </div>


      <h3 className="mt-4">Meal Plans List</h3>


      {
        mealPlans.map((item) => (

          <div
            className="card p-3 mt-2"
            key={item._id}
          >

            <h5>{item.clientName}</h5>

            <p>
              🍳 Breakfast: {item.breakfast}<br/>
              🍛 Lunch: {item.lunch}<br/>
              🍽 Dinner: {item.dinner}<br/>
              🍎 Snacks: {item.snacks}
            </p>

          </div>

        ))
      }


    </div>
  );
}

export default MealPlans;