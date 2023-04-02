import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/common/SideBar";
import TopBar from "./components/common/TopBar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import EmployeeDetails from "./pages/EmployeeDetails";

const Routing = () => {
  return (
    <div className="content">
      <SideBar />

      <div className="main">
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default Routing;
