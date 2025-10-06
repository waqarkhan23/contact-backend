import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.route.js";
import connectDB from "./config/db.js";
import cors from "cors";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
