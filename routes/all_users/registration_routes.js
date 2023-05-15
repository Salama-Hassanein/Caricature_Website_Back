const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");
const { register } = require("../../controllers/registeration/register");
const { login } = require("../../controllers/registeration/login");
const { getAllArtists, getArtistById } = require("../../controllers/admin_contollers/artists.controller");
const { getAuthorById, getAllAuthors } = require("../../controllers/admin_contollers/authors.controller");
const { getAllCaricatures, getCaricatureById } = require("../../controllers/admin_contollers/caricatures.controller");
const { getAllCharacters, getCharactersByAuthorOrArtist } = require("../../controllers/admin_contollers/characters.controller");

//=============Register==========================================
router.post("/register", upload.single("image"), register);

//=============Login===========================================
router.post("/login", login);

/****GET ALL ARTIST AND GET ONE BY ID****/
router.get('/artists', getAllArtists);
router.get('/artist/:id', getArtistById);

/*****************************************/

/****GET ALL AUTHORS AND GET ONE BY ID****/
router.get('/authors', getAllAuthors);
router.get('/author/:id', getAuthorById);

/*****************************************/


/****GET ALL CARICATURE AND GET ONE BY ID****/
router.get('/authors', getAllCaricatures);
router.get('/author/:id', getCaricatureById);

/*****************************************/


/****GET ALL CHARACTARES AND GET ONE BY ID****/
router.get('/authors', getAllCharacters);
router.get('/author/:id', getCharactersByAuthorOrArtist);

/*****************************************/


module.exports = router;
