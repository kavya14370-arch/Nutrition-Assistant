const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
  addProgress,
  getProgress,
  updateProgress,
  deleteProgress,
} = require("../controllers/progressController");

router.post("/", auth, addProgress);
router.get("/", auth, getProgress);
router.put("/:id", auth, updateProgress);
router.delete("/:id", auth, deleteProgress);

module.exports = router;