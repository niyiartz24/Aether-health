const mongoose = require("mongoose");

const emergencySchema = new mongoose.Schema(
{
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    type: {
        type: String,
        enum: [
            "medical",
            "security",
            "accident"
        ],
        required: true
    },

    description: {
        type: String,
        default: ""
    },

    severity: {
        type: String,
        enum: [
            "low",
            "medium",
            "high",
            "critical"
        ],
        default: "medium"
    },

    location: {
        lat: Number,
        lng: Number
    },

    status: {
        type: String,
        enum: [
            "pending",
            "responding",
            "resolved"
        ],
        default: "pending"
    }
},
{
    timestamps: true
});

module.exports =
mongoose.model(
    "Emergency",
    emergencySchema
);