const Progress = require("../models/Progress");

// Add Progress
exports.addProgress = async (req, res) => {
  try {
    const progress = await Progress.create(req.body);
    res.status(201).json(progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Progress
exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.find();
    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Progress
exports.updateProgress = async (req, res) => {
  try {
    const progress = await Progress.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Progress
exports.deleteProgress = async (req, res) => {
  try {
    await Progress.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Progress Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};