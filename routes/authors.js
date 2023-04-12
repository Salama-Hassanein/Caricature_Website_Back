// authors.js
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authors.controller');

router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
// router.post('/', authorController.createAuthor);
// router.put('/:id', authorController.updateAuthor);
// router.delete('/:id', authorController.deleteAuthor);

module.exports = router;
