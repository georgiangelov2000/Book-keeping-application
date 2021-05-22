const express = require("express");
const router = express.Router();
const jwt = require("jwt");
const Book = require("../models/book");
const User = require("../models/user");

router.post("/create/book", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    throw new Error(error);
  }
});

router.get("/", async (req, res) => {
  const books = await Book.find().populate("createdBy").sort("createAt");

  if (books) {
    res.send(books);
  } else {
    throw new Error("Server error");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.send(book);
  } catch (error) {
    throw new Error("Server Error");
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.json(book);
  } catch (error) {
    throw new Error("Update failed");
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.send(book);
  } catch (error) {
    throw new Error("no book found");
  }
});

module.exports= router;
