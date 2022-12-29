const Food = require("../models/foods");
const { ObjectId } = require("mongodb");

exports.addFood = async (req, res, next) => {
  const newFood = new Food(req.body);

  try {
    await newFood.save();
    res.status(201).json({ success: true, data: newFood });
  } catch (error) {
    res.status(201).json({ success: false, data: "Error saving food" });
  }
};

exports.getAllfoods = async (req, res, next) => {
  const foods = await Food.find();
  res.status(200).json({ success: true, data: foods });
};

exports.getFoodById = async (req, res, next) => {
  const id = ObjectId(req.params.foodId);

  const food = await Food.findById(id);
  res.status(200).json({ success: true, data: food });
};

exports.deleteFood = async (req, res, next) => {
  const id = ObjectId(req.params.foodId);
  console.log(id);
  try {
    await Food.findByIdAndDelete(id);
    res.status(200).json({ success: true, data: "food deleted" });
  } catch (error) {
    res.status(200).json({ success: false, data: "Error deleting food" });
  }
};

exports.updateFood = async (req, res, next) => {
  const newFood = req.body;
  //   console.log(newFood, req.params);
  try {
    await Food.findOneAndUpdate(req.params.foodId, req.body);
    res.status(200).json({ success: true, data: "food updated" });
  } catch (error) {
    res.status(200).json({ success: false, data: "Error updating food" });
  }
};
