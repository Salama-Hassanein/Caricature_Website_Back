// authors.service.js
const Author = require("../models/author");

async function getAllAuthors() {
  return await Author.find();
}

async function getAuthorById(id) {
  return await Author.findById(id);
}

async function createAuthor(authorData) {
  const newAuthor = new Author(authorData);
  return await newAuthor.save();
}

async function updateAuthor(id, authorData) {
  return await Author.findByIdAndUpdate(id, authorData, { new: true });
}

async function deleteAuthor(id) {
  return await Author.findByIdAndDelete(id);
}

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
