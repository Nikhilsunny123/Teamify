import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import avatar from "../../assets/images/user1.jpg";

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
        <Box
          sx={{
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
            gap: "5%",
          }}
        >
          <SearchOutlinedIcon />
          <NotificationsNoneOutlinedIcon />

          <img
            src={avatar}
            alt="Avatar"
            style={{
              maxWidth: "40px",
              maxHeight: "40px",
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
