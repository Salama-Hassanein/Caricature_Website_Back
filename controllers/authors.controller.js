const Author = require('../models/author');

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    next(err);
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    res.status(200).json(author);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
};
