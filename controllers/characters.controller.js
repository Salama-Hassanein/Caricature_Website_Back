const Character = require('../models/character');

const getAllCharacters = async (req, res, next) => {
  try {
    const characters = await Character.find();
    res.status(200).json(characters);
  } catch (err) {
    next(err);
  }
};

const getCharactersByAuthorOrArtist = async (req, res, next) => {
  try {
    const { id, type } = req.params;

    let query;
    if (type === 'artist') {
      query = { artist: id };
    } else if (type === 'author') {
      query = { author: id };
    }

    const characters = await Character.find(query);
    res.status(200).json(characters);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCharacters,
  getCharactersByAuthorOrArtist,
};
