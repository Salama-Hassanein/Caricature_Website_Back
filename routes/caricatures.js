// caricatures.js
const express = require("express");
const router = express.Router();
const {
    getAllCaricatures,
    getCaricatureById,
    createCaricature,
    updateCaricature,
    deleteCaricature
} = require("../controllers/caricatures.controller");
const upload = require("../middleware/multer");

router.get('/', getAllCaricatures);
router.get('/:id', getCaricatureById);
router.post('/', upload.single("image"), createCaricature);
router.put('/:id', upload.single("image"), updateCaricature);
router.delete('/:id', deleteCaricature);

module.exports = router;
