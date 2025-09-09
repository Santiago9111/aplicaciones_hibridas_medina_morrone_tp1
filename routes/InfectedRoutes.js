const express = require("express");
const {
  getInfecteds,
  getInfectedById,
  createInfected,
  updateInfected,
  deleteInfected
} = require("../controllers/InfectedController");

const router = express.Router();

router.get("/", getInfecteds);
router.get("/:id", getInfectedById);
router.post("/", createInfected);
router.put("/:id", updateInfected);
router.delete("/:id", deleteInfected);

module.exports = router;