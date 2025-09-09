const Infected = require("../models/InfectedModel");

const getInfecteds = async (req, res) => {
  try {
    const { name, region } = req.query;
    let filter = {};
    if (name) filter.name = new RegExp(name, "i");
    if (region) filter.region = region;

    const infecteds = await Infected.find(filter);
    res.json(infecteds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInfectedById = async (req, res) => {
  try {
    const infected = await Infected.findById(req.params.id);
    if (!infected) return res.status(404).json({ message: "Infectado no encontrado" });
    res.json(infected);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createInfected = async (req, res) => {
  try {
    const newInfected = new Infected(req.body);
    const savedInfected = await newInfected.save();
    res.status(201).json(savedInfected);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateInfected = async (req, res) => {
  try {
    const updatedInfected = await Infected.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedInfected) return res.status(404).json({ message: "Infectado no encontrado" });
    res.json(updatedInfected);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteInfected = async (req, res) => {
  try {
    const deletedInfected = await Infected.findByIdAndDelete(req.params.id);
    if (!deletedInfected) return res.status(404).json({ message: "Infectado no encontrado" });
    res.json({ message: "Infectado eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getInfecteds, getInfectedById, createInfected, updateInfected, deleteInfected };