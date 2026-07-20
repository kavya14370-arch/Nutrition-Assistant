const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
  addClient,
  getClients,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

router.post("/", auth, addClient);
router.get("/", auth, getClients);
router.put("/:id", auth, updateClient);
router.delete("/:id", auth, deleteClient);

module.exports = router;