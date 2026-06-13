const express = require("express");

const router = express.Router();

const auth =
require("../middleware/authMiddleware");

const {
 createAppointment,
 getAppointments
}
=
require(
 "../controllers/appointmentController"
);

router.post(
 "/",
 auth,
 createAppointment
);

router.get(
 "/",
 auth,
 getAppointments
);

module.exports = router;