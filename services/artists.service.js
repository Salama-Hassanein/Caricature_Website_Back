const Artist = require('../models/artist');

async function getAllArtists() {
  return await Artist.find();
}

async function getArtistById(id) {
  return await Artist.findById(id);
}

async function createArtist(artistData) {
  const newArtist = new Artist(artistData);
  return await newArtist.save();
}

async function updateArtist(id, artistData) {
  return await Artist.findByIdAndUpdate(id, artistData, { new: true });
}

async function deleteArtist(id) {
  return await Artist.findByIdAndDelete(id);
}

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist
};


/*
const Artist = require("../models/artist");

const getAllArtists = async (req, res, next) => {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (err) {
    next(err);
  }
};

const getArtistById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findById(id);
    res.status(200).json(artist);
  } catch (err) {
    next(err);
  }
};

const createArtist = async (req, res, next) => {
  try {
    const { name, image, birthDate, bio } = req.body;
    const newArtist = await Artist.create({
      name,
      image,
      birthDate,
      bio,
    });
    res.status(201).json(newArtist);
  } catch (err) {
    next(err);
  }
};

const updateArtist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, image, birthDate, bio } = req.body;
    const updatedArtist = await Artist.findByIdAndUpdate(
      id,
      {
        name,
        image,
        birthDate,
        bio,
      },
      { new: true }
    );
    res.status(200).json(updatedArtist);
  } catch (err) {
    next(err);
  }
};

const deleteArtist = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Artist.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
};
*/