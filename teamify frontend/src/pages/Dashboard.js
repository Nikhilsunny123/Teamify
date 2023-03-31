import { Box } from "@mui/material";
import React from "react";
import BarChart from "../components/Dashboard/BarChart";
import Employees from "../components/Dashboard/Employees";
import News from "../components/Dashboard/News";
import ProjectDeliveries from "../components/Dashboard/ProjectDeliveries";
import Notifications from "../components/Dashboard/Notifications";

const Dashboard = () => {
  const newsData = [
    {
      top: "Top10",
      middle: "Position in Dribble",
      bottom: "20% Increase from Last Week",
      color: "#FFF0E6",
    },
    {
      top: "26",
      middle: "New employees onboarded",
      bottom: "15% Increase from Last Month",
      color: "#ECEAFE",
    },
    {
      top: "500",
      middle: "New Clients Approached",
      bottom: "5% Increase from Last Week",
      color: "#E5F7FF",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <BarChart />
      <Employees />
      <Box
        sx={{
          width: "330px",
          height: "330px",
          margin: "5px",
          borderRadius: "5%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {newsData.map((item, key) => (
          <News
            color={item.color}
            top={item.top}
            middle={item.middle}
            bottom={item.bottom}
          />
        ))}
      </Box>
      <ProjectDeliveries />
      <Notifications />
    </Box>
  );
};

export default Dashboard;
