const express = require("express");
const router = express.Router();

const foodController = require("../controllers/foodcontroller");

router.get("/:user_id", foodController.getAllfoods);
router.post("/", foodController.addFood);
router.get("/food/:foodId", foodController.getFoodByName);
router.delete("/food/:foodId", foodController.deleteFood);
router.patch("/food/:foodId", foodController.updateFood);

module.exports = router;
