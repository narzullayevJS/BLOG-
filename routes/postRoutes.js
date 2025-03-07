const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

router.post("/posts", postController.createPost);     // Yangi post qo‘shish
router.get("/posts", postController.getAllPosts);     // Barcha postlarni olish
router.get("/posts/:id", postController.getPostById); // ID bo‘yicha bitta postni olish
router.put("/posts/:id", postController.updatePost);  // Postni yangilash
router.delete("/posts/:id", postController.deletePost); // Postni o‘chirish

module.exports = router;
