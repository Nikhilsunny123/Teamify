import { Box } from "@mui/material";
import React from "react";
import BarChart from "../components/Dashboard/BarChart";

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <BarChart />
      <h1>helloo</h1>
      <Box
        sx={{
          width: "10%",
          height: "10%",
          background: "red",
        }}
      ></Box>
    </Box>
  );
};

export default Dashboard;
