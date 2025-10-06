import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    movingFrom: { type: String },
    movingTo: { type: String },
    movingDate: { type: String },
    numberOfRooms: { type: Number, required: true, min: 1, max: 10 },
    propertyType: { type: String, enum: ["House", "Flat"], required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
