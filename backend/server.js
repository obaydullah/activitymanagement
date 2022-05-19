import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import EmployeeListModel from "./models/employeeListModel.js";
import TodaysClassModel from "./models/todayClassModel.js";
import ActivityModel from "./models/activityModel.js";

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mern2101:mern2101@cluster0.rijpx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });

app.get("/", function (req, res) {
  res.send("Hello World");
});

// EmployeeListModel Start

app.post("/employeelist", async function (req, res) {
  const employee = new EmployeeListModel({
    name: req.body.name,
    officetime: req.body.officetime,
    designation: req.body.designation,
    dayoff: req.body.dayoff,
    phone: req.body.phone,
  });
  await employee.save();
  res.send(employee);
});
app.get("/employeelist", async function (req, res) {
  const employeeList = await EmployeeListModel.find();
  res.send(employeeList);
});
// EmployeeListModel End

//Todays Class Model Start
app.post("/todaysclass", async function (req, res) {
  const todaysclass = new TodaysClassModel({
    batch: req.body.batch,
    time: req.body.time,
    room: req.body.room,
  });
  await todaysclass.save();
  res.send(todaysclass);
});
app.get("/todaysclass", async function (req, res) {
  const todaysclasslist = await TodaysClassModel.find();
  res.send(todaysclasslist);
});
//Todays Class Model End

// Activity Model Start
app.post("/activity", async function (req, res) {
  const activity = new ActivityModel({
    name: req.body.name,
    hour: req.body.hour,
    details: req.body.details,
  });
  await activity.save();
  res.send(activity);
});
app.get("/activity", async function (req, res) {
  const activityList = await ActivityModel.find();
  res.send(activityList);
});

// Activity Model End

app.listen(8000, () => {
  console.log("Server is running on 8000 port");
});
