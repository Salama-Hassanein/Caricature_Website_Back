// artists.js
const express = require("express");
const router = express.Router();
const {
    getAllArtists,
    getArtistById,
    createArtist,
    updateArtist,
    deleteArtist
} = require("../controllers/artists.controller");
const upload = require("../middleware/multer");

router.get('/', getAllArtists);
router.post('/', upload.single("image"), createArtist);
router.get('/:id', getArtistById);
router.put('/:id', upload.single("image"), updateArtist);
router.delete('/:id', deleteArtist);

module.exports = router;
