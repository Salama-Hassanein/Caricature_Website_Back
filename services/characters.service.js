// characters.service.js
const Character = require("../models/character");

async function getAllCharacters() {
  return await Character.find();
}

async function getCharacterById(id) {
  return await Character.findById(id);
}

async function createCharacter(characterData) {
  const newCharacter = new Character(characterData);
  return await newCharacter.save();
}

async function updateCharacter(id, characterData) {
  return await Character.findByIdAndUpdate(id, characterData, { new: true });
}

async function deleteCharacter(id) {
  return await Character.findByIdAndDelete(id);
}

module.exports = {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
