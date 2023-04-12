// artists.js
const express = require("express");
const router = express.Router();
const artistController = require("../controllers/artists.controller");
const artistControllers = require("../services/artists.service");

router.get('/', artistController.getAllArtists);
router.get('/:id', artistController.getArtistById);
router.post('/', artistController.createArtist);
// router.put('/:id', artistController.updateArtist);
// router.delete('/:id', artistController.deleteArtist);

module.exports = router;
