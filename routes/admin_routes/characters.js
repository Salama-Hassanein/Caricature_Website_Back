// characters.js
const express = require('express');
const router = express.Router();
const {
    getAllCharacters,
    getCharactersByAuthorOrArtist,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../../controllers/admin_contollers/characters.controller');
const upload = require("../../middleware/multer");


router.get('/characters', getAllCharacters);
router.get('/character/:id', getCharactersByAuthorOrArtist);
router.post('/character', upload.single("image"), createCharacter);
router.put('/character/:id', upload.single("image"), updateCharacter);
router.delete('/character/:id', deleteCharacter);

module.exports = router;
