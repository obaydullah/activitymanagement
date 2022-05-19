import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ children }) {
  let active = {
    backgroundColor: "#6850F0",
  };
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <img src="./images/elon.jpg" alt="Elon Musk" />
          <ul className="userInfo">
            <li>
              <span>Name :</span> Elom Musk
            </li>
            <li>
              <span>Designation : </span>CEO
            </li>
            <li>
              <span>Office Time : </span>9 - 5
            </li>
            <li>
              <span>Off Day :</span> Friday
            </li>
          </ul>
          <ul className="menu">
            <NavLink
              to="/employeelist"
              style={({ isActive }) => (isActive ? active : undefined)}
            >
              Employee List
            </NavLink>
            <NavLink to="/todayclass">Today's Class</NavLink>
            <NavLink to="/postactivity">Post Activity</NavLink>
            <NavLink to="/activitylist">Activity List</NavLink>
            <NavLink to="/applyforlive">Apply for Leave</NavLink>
            <NavLink to="/latelist">Late List</NavLink>
          </ul>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}
