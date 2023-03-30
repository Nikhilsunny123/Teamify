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
      <Box
        sx={{
          margin: "auto",
        }}
      >
        <BarChart />
      </Box>
    </Box>
  );
};

export default Dashboard;
