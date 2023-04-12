// caricatures.service.js
const Caricature = require("../models/caricature");

async function getAllCaricatures() {
  return await Caricature.find();
}

async function getCaricatureById(id) {
  return await Caricature.findById(id);
}

async function createCaricature(caricatureData) {
  const newCaricature = new Caricature(caricatureData);
  return await newCaricature.save();
}

async function updateCaricature(id, caricatureData) {
  return await Caricature.findByIdAndUpdate(id, caricatureData, { new: true });
}

async function deleteCaricature(id) {
  return await Caricature.findByIdAndDelete(id);
}

module.exports = {
  getAllCaricatures,
  getCaricatureById,
  createCaricature,
  updateCaricature,
  deleteCaricature,
};
