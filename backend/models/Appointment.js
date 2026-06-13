const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
{
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    symptoms: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    doctor: {
        type: String,
        required: true
    },

    appointmentDate: {
        type: Date,
        required: true
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending"
    },

    status: {
        type: String,
        enum: [
            "scheduled",
            "completed",
            "cancelled"
        ],
        default: "scheduled"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "Appointment",
    appointmentSchema
);