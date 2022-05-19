import mongoose from "mongoose";

const todaysClassSchema = new mongoose.Schema({
  batch: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  room: {
    type: Number,
    required: true,
  },
});

const TodaysClassModel = mongoose.model("todaysClassList", todaysClassSchema);

export default TodaysClassModel;
