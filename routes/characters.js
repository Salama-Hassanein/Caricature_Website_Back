// characters.js
const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characters.controller');

router.get('/', characterController.getAllCharacters);
router.get('/:id', characterController.getCharactersByAuthorOrArtist);
// router.post('/', characterController.createCharacter);
// router.put('/:id', characterController.updateCharacter);
// router.delete('/:id', characterController.deleteCharacter);

module.exports = router;
