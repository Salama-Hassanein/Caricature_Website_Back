// characters.js
const express = require('express');
const router = express.Router();
const {
    getAllCharacters,
    getCharactersByAuthorOrArtist,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../controllers/characters.controller');
const upload = require("../middleware/multer");


router.get('/', getAllCharacters);
router.get('/:id', getCharactersByAuthorOrArtist);
router.post('/', upload.single("image"), createCharacter);
router.put('/:id', upload.single("image"), updateCharacter);
router.delete('/:id', deleteCharacter);

module.exports = router;
