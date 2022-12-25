const Food = require("../models/goals");
const { ObjectId } = require("mongodb");

exports.addGoal = async (req, res, next) => {
  const newFood = new Food(req.body);

  try {
    await newGoal.save();
    res.status(201).json({ success: true, data: newFood });
  } catch (error) {
    res.status(201).json({ success: false, data: "Error saving food" });
  }
};

exports.getAllfoods = async (req, res, next) => {
  const foods = await Food.findAll();
  res.status(200).json({ success: true, data: goals });
};

exports.getFoodByName = async (req, res, next) => {
  console.log("goal", req.params.name);
  const food = await Food.findOne({ name: new ObjectId(req.params.name) });
  res.status(200).json({ success: true, data: food });
};

exports.deleteFood = async (req, res, next) => {
  try {
    await Food.findByIdAndDelete(req.params.foodId);
    res.status(200).json({ success: true, data: "food deleted" });
  } catch (error) {
    res.status(200).json({ success: false, data: "Error deleting food" });
  }
};

exports.updateFood = async (req, res, next) => {
  const newFood = req.body;
  console.log(newFood, req.params);
  try {
    await Food.findOneAndUpdate(req.params.foodId, req.body);
    res.status(200).json({ success: true, data: "food updated" });
  } catch (error) {
    res.status(200).json({ success: false, data: "Error updating food" });
  }
};
