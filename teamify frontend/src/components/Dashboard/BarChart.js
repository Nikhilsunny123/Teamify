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
        width: "330px",
        height: "330px",
        paddingLeft: "10px",
        margin: "5px",
        border: "1px solid #E6E8EC",
        borderRadius: "5%",

        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "flex-start",
      }}
    >
      <Typography
        style={{
          fontSize: "16px",
          fontWeight: "700",
          marginTop: "10px",
        }}
      >
        Teams Strength
      </Typography>
      <Box sx={{ width: "100%", height: "200px" }}>
        <ResponsiveBar
          data={data}
          keys={["value"]}
          indexBy="label"
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          padding={0.3}
          layout="vertical"
          colors={(d) => d.data.color}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <BarItem label={item.label} name={item.name} color={item.color} />
        ))}
      </Box>
    </div>
  );
};

export default BarChart;

const BarItem = ({ label, name, color }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        flexBasis: "40%",
        paddingLeft: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "25px",
          height: "25px",
          backgroundColor: color,
          mr: "5px",
        }}
      >
        <label style={{ fontSize: "12px", color: "#FFFFFF" }}>{label}</label>
      </Box>

      <p>{name}</p>
    </Box>
  );
};
