import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ActivityList from "./pages/ActivityList";
import ApplyForLeave from "./pages/ApplyForLeave";
import EmployeeList from "./pages/EmployeeList";
import LateList from "./pages/LateList";
import PostActivity from "./pages/PostActivity";
import TodayClass from "./pages/TodayClass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employeelist" element={<EmployeeList />} />
            <Route path="/todayclass" element={<TodayClass />} />
            <Route path="/postactivity" element={<PostActivity />} />
            <Route path="/activitylist" element={<ActivityList />} />
            <Route path="/applyforlive" element={<ApplyForLeave />} />
            <Route path="/latelist" element={<LateList />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
