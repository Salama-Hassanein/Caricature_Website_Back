const Caricature = require('../models/caricature');

const getAllCaricatures = async (req, res, next) => {
  try {
    const caricatures = await Caricature.find();
    res.status(200).json(caricatures);
  } catch (err) {
    next(err);
  }
};

const getCaricatureById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const caricature = await Caricature.findById(id);
    res.status(200).json(caricature);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCaricatures,
  getCaricatureById,
};
