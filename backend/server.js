const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.json({
        message: "Aether Health API Running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const appointmentRoutes =
require("./routes/appointmentRoutes");

app.use(
 "/api/appointments",
 appointmentRoutes
);

const aiRoutes =
require("./routes/aiRoutes");

app.use(
 "/api/ai",
 aiRoutes
);

const queueRoutes =
require("./routes/queueRoutes");

app.use(
 "/api/queue",
 queueRoutes
);

const emergencyRoutes =
require("./routes/emergencyRoutes");

app.use(
 "/api/emergency",
 emergencyRoutes
);