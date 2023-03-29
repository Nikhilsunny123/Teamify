import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.png";

const SideBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "coloumn",
        background: "#F9F9F9",
        width: "30%",
        height: "100vh",
        paddingTop: "30px",
        paddingLeft: "10px",
      }}
    >
      <Box sx={{ display: "flex", gap: "10px" }}>
        <img src={logo} alt="logo" width="33px" height="33px" />
        <Typography varient="h3" sx={{ color: "#6956E5" }}>
          Teamify
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBar;
