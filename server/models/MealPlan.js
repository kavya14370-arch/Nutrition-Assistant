const mongoose = require("mongoose");

const MealPlanSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    breakfast: {
      type: String,
      required: true,
    },
    lunch: {
      type: String,
      required: true,
    },
    dinner: {
      type: String,
      required: true,
    },
    snacks: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MealPlan", MealPlanSchema);