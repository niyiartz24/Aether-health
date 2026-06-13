const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/authMiddleware");

const {

 createEmergency,
 getEmergencies,
 updateStatus

} =
require(
 "../controllers/emergencyController"
);

router.post(
 "/",
 auth,
 createEmergency
);

router.get(
 "/",
 auth,
 getEmergencies
);

router.patch(
 "/:id/status",
 auth,
 updateStatus
);

module.exports = router;