import { Typography } from "@mui/material";
import React from "react";

const News = ({ color, top, middle, bottom }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "103px",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        borderRadius: "10px",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: color,
      }}
    >
      <Typography style={{ fontSize: "22px", fontWeight: "700" }}>
        {top}
      </Typography>
      <Typography style={{ fontSize: "14px", fontWeight: "700" }}>
        {middle}
      </Typography>
      <Typography
        style={{ fontSize: "14px", fontWeight: "700", color: "#787486" }}
      >
        {bottom}
      </Typography>
    </div>
  );
};

export default News;
