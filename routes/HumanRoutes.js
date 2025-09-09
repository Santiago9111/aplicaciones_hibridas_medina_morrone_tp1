const express = require("express");
const {
  getHumans,
  getHumanById,
  createHuman,
  updateHuman,
  deleteHuman
} = require("../controllers/HumanController");

const router = express.Router();

router.get("/", getHumans);
router.get("/:id", getHumanById);
router.post("/", createHuman);
router.put("/:id", updateHuman);
router.delete("/:id", deleteHuman);

module.exports = router;