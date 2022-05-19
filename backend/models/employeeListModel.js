import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  officetime: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  dayoff: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const EmployeeListModel = mongoose.model("employeeList", employeeSchema);

export default EmployeeListModel;
