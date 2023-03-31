import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Box, Typography } from "@mui/material";
const TopBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "20%",
      }}
    >
      <Box
        sx={{
          padding: "15px",
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography style={{ fontSize: "26px", fontWeight: "700" }}>
            Good Morning user
          </Typography>
          <Typography variant="h6">Hope you have a good day </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10%" }}>
          <SearchOutlinedIcon />
          <NotificationsNoneOutlinedIcon />

          <img
            src="your-image-url.jpg"
            alt="Avatar"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <ArrowDropDownOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
