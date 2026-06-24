const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    service: "Budget Buddy API",
    time: new Date()
  });
});

module.exports = router;