const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/posts", postRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
