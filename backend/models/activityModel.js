import mongoose from "mongoose";

const activityModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const ActivityModel = mongoose.model("activity", activityModel);

export default ActivityModel;
