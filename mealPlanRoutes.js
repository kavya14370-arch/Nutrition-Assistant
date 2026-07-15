const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
  addMealPlan,
  getMealPlans,
  updateMealPlan,
  deleteMealPlan,
} = require("../controllers/mealPlanController");

router.post("/", auth, addMealPlan);
router.get("/", auth, getMealPlans);
router.put("/:id", auth, updateMealPlan);
router.delete("/:id", auth, deleteMealPlan);

module.exports = router;