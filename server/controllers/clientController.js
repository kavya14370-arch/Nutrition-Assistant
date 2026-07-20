const Client = require("../models/Client");

// Add Client
exports.addClient = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const client = await Client.create(req.body);

    res.status(201).json(client);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// Get All Clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Client
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Client
exports.deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Client Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};