import { Router } from "express";
import { Book } from "./models.js";

const bookRouter = Router();

bookRouter.get("/books", async (req, res) => {
  try {
    const books = await Book.find();

    if (!books) {
      return res.json({ message: "No books found" });
    }
    res.json(books);
  } catch (error) {
    res.json({ message: error.message });
  }
});

bookRouter.post("/books", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const book = await Book.create(data);
    if (book) {
      return res.status(201).json({ message: "Book created successfully" });
    }
    return res.status(500).json({ error: "Book could not be created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

bookRouter.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const book = await Book.findByIdAndUpdate(id, data);
    if (book) {
      return res.status(200).json({ message: "Book updated successfully" });
    }
    return res.status(500).json({ error: "Book could not be updated" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

bookRouter.delete("/books/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (book) {
      return res.status(200).json({ message: "Book deleted successfully" });
    }
    return res.status(500).json({ error: "Book could not be deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

bookRouter.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json(book);
    }
    return res.status(404).json({ error: "Book not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default bookRouter;
