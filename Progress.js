const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    bmi: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Progress", ProgressSchema);