const MealPlan = require("../models/MealPlan");

// Add Meal Plan
exports.addMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.create(req.body);
    res.status(201).json(mealPlan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Meal Plans
exports.getMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find();
    res.status(200).json(mealPlans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Meal Plan
exports.updateMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(mealPlan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Meal Plan
exports.deleteMealPlan = async (req, res) => {
  try {
    await MealPlan.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Meal Plan Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};