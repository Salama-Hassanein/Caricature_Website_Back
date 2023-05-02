// authors.js
const express = require('express');
const router = express.Router();
const {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controllers/authors.controller');
const upload = require('../middleware/multer');

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', upload.single("image"), createAuthor);
router.put('/:id', upload.single("image"), updateAuthor);
router.delete('/:id', deleteAuthor);

module.exports = router;
