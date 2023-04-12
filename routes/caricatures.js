// caricatures.js
const express = require("express");
const router = express.Router();
const caricatureController = require("../controllers/caricatures.controller");

router.get('/', caricatureController.getAllCaricatures);
router.get('/:id', caricatureController.getCaricatureById);
// router.post('/', caricatureController.createCaricature);
// router.put('/:id', caricatureController.updateCaricature);
// router.delete('/:id', caricatureController.deleteCaricature);

module.exports = router;
