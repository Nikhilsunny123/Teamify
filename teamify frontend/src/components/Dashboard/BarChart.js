import { Box, Typography } from "@mui/material";
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = () => {
  const data = [
    {
      label: "a",
      name: "Marketing",
      value: 1,
      color: "#FABE7A",
    },
    {
      label: "b",
      name: "HR",
      value: 5,
      color: "#F6866A",
    },
    {
      label: "c",
      name: "Developers",
      value: 3,
      color: "#59E6F6",
    },
    {
      label: "d",
      name: "Design",
      value: 10,
      color: "#7661E2",
    },
  ];
  return (
    <div
      style={{
        width: "360px",
        height: "344px",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "800",
      }}
    >
      <Typography
        style={{
          fontSize: "20px",
        }}
      >
        Teams Strength
      </Typography>
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="name"
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        padding={0.3}
        layout="vertical"
        colors={(d) => d.data.color}
        enableGridX={true}
        enableGridY={true}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
      />
      {data.map((item) => (
        <BarItem label={item.label} name={item.name} color={item.color} />
      ))}
    </div>
  );
};

export default BarChart;

const BarItem = ({ label, name, color }) => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          width: "5px",
          height: "5px",
          background: { color },
        }}
      >
        {" "}
        <label>{label}</label>
      </Box>

      <p>{name}</p>
    </Box>
  );
};
