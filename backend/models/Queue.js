const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema(
{
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    queueNumber: {
        type: Number,
        required: true
    },

    position: {
        type: Number,
        required: true
    },

    estimatedWait: {
        type: Number,
        default: 0
    },

    averageConsultationTime: {
   type:Number,
   default:10
},

    status: {
        type: String,
        enum: [
            "waiting",
            "serving",
            "completed"
        ],
        default: "waiting"
    }
},
{
    timestamps: true
});



module.exports = mongoose.model(
    "Queue",
    queueSchema
);