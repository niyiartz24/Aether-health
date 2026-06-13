const express =
require("express");

const router =
express.Router();

const {
 triage
}
=
require(
 "../controllers/aiController"
);

router.post(
 "/triage",
 triage
);

module.exports = router;