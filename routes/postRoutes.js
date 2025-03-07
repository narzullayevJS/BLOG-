const express = require("express");
const Post = require("../models/post");
const router = express.Router();

// 🔹 1. Yangi post qo‘shish (CREATE)
router.post("/", async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 🔹 2. Barcha postlarni olish (READ - ALL)
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🔹 3. Bitta postni ID orqali olish (READ - ONE)
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post topilmadi" });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🔹 4. Postni yangilash (UPDATE)
router.put("/:id", async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) return res.status(404).json({ message: "Post topilmadi" });
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🔹 5. Postni o‘chirish (DELETE)
router.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: "Post topilmadi" });
        res.json({ message: "Post muvaffaqiyatli o‘chirildi" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
