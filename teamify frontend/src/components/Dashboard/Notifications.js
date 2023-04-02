import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Notifications = () => {
  const notificationData = [
    {
      main: "Ellie joined team developers",
      sub: "04 April, 2022 | 04:00 PM",
      image: Avatar,
    },
    {
      main: "Ann joined team HR",
      sub: "04 march, 2022 | 09:00 PM",
      image: Avatar,
    },
    {
      main: "Ellie joined team developers",
      sub: "04 April, 2021 | 04:00 PM",
      image: Avatar,
    },
    {
      main: "Ellie joined team developers",
      sub: "04 April, 2021 | 04:00 PM",
      image: Avatar,
    },
    {
      main: "Ellie joined team developers",
      sub: "04 April, 2021 | 04:00 PM",
      image: Avatar,
    },
  ];
  return (
    <Box
      sx={{
        width: "330px",
        height: "330px",
        margin: "5px",

        borderRadius: "5%",

        display: "flex",
        flexDirection: "column",
        gap: "10px",

        marginLeft: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 10px",
        }}
      >
        <Typography
          style={{ fontSize: "18px", color: "#23262F", fontWeight: "700" }}
        >
          Notifications
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#6956E5", fontWeight: "600s" }}
        >
          View All
        </Typography>
      </Box>
      {notificationData.map((item, key) => (
        <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <Avatar />
          <Box sx={{}}>
            <Typography
              style={{ fontSize: "12px", color: "#23262F", fontWeight: "500" }}
            >
              {item.main}
            </Typography>
            <Typography
              style={{ fontSize: "10px", color: "#708099", fontWeight: "400" }}
            >
              {item.sub}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Notifications;
