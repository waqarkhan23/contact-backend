import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", createContact); // Create new contact
router.get("/", getContacts); // Get all contacts
router.get("/:id", getContactById); // Get single contact

export default router;
