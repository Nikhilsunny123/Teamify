import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SideBar from "./components/common/SideBar";
import TopBar from "./components/common/TopBar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import EmployeeDetails from "./pages/EmployeeDetails";
import { useEffect } from "react";
import LoginForm from "./pages/Login";

const Routing = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkIfUserIsAuthenticated = () => {
    if (localStorage.getItem("isLogin")) {
      return true;
    } else {
      return false;
    }
  };
  console.log(checkIfUserIsAuthenticated());

  useEffect(() => {
    // Check whether the user is authenticated here, and set the state accordingly
    const userIsAuthenticated = checkIfUserIsAuthenticated();
    setIsAuthenticated(userIsAuthenticated);

    // If the user is not authenticated, redirect to the login page
    if (!userIsAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);
  return !isAuthenticated ? (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  ) : (
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
