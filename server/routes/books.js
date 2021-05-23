const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Book = require("../models/book");

router.post(
  "/create",
  [
    check("category", "Category is required").not().isEmpty(),
    check("author", "Author is required author ").not().isEmpty(),
    check("title", "title is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {category,author,title,createdBy}=req.body;

    try {
      const book = await Book.create({
        category: category,
        author:author,
        title:title,
        createdBy:createdBy
      })
      await book.save();
      res.json(book);
    } catch (error) {
      throw new Error(error);
    }
  }
);

router.get("/allbooks", async (req, res) => {
  const books = await Book.find().populate("createdBy").sort("createAt");

  if (books) {
    res.send(books);
  } else {
    throw new Error("Server error");
  }
});

router.get("/book/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.send(book);
  } catch (error) {
    throw new Error("no book found");
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

module.exports = router;
