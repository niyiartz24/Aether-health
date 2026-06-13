const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/authMiddleware");

const {

 joinQueue,
 getMyQueue,
 getAllQueues,
    completeQueue

} =
require(
 "../controllers/queueController"
);

router.post(
 "/join",
 auth,
 joinQueue
);

router.get(
 "/my",
 auth,
 getMyQueue
);

router.get(
 "/all",
 auth,
 getAllQueues
);

router.patch(
    "/:id/complete",
    auth,
    completeQueue
);

module.exports =
router;