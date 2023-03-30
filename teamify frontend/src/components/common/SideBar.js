import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.png";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TaskIcon from "@mui/icons-material/Task";

import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#F9F9F9",
        width: "20%",
        height: "100vh",
        paddingTop: "20px",
        paddingLeft: "20px",
        gap: "20px",
        alignContent: "flex-start",
        "@media screen and (max-width: 768px)": {
          width: "10%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          paddingLeft: "10px",
          paddingBottom: "20px",
        }}
      >
        <img src={logo} alt="logo" width="30px" height="30px" />
        <Typography
          varient="h2"
          sx={{
            color: "#6956E5",
            fontWeight: "800",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Teamify
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <SideBarItem
          name="Dashboard"
          redirect="/"
          image={<GridViewOutlinedIcon />}
        />

        <SideBarItem
          name="Teams"
          redirect="/teams"
          image={<GroupsOutlinedIcon />}
        />
        <SideBarItem
          name="Employees"
          redirect="/employees"
          image={<GroupOutlinedIcon />}
        />
        <SideBarItem
          name="Projects"
          redirect="/projects"
          image={<AutoStoriesOutlinedIcon />}
        />
        <hr style={{ width: "80%", margin: "auto", color: "#878787" }}></hr>
        <SideBarItem
          name="Meetings"
          redirect="/meetings"
          image={<CallOutlinedIcon />}
        />
        <SideBarItem name="Tasks" redirect="/tasks" image={<TaskIcon />} />
        <SideBarItem
          name="Settings"
          redirect="/settings"
          image={<SettingsOutlinedIcon />}
        />
      </Box>
      <Box
        sx={{
          margin: "auto",

          width: "180px",
          height: "150px",
          background: "#ad97de",
          borderRadius: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            width: "auto",

            borderRadius: "5%",
            background: "#FFFFFF",
          }}
        >
          <Typography
            style={{
              padding: "2px",
              fontSize: "15px",
              color: "#878787",
              background:
                "linear-gradient(180deg, rgba(105, 86, 229, 0.2) 0%, rgba(196, 196, 196, 0) 100%)",
            }}
          >
            Share your Thoughts
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;

const SideBarItem = ({ name, redirect, image }) => {
  return (
    <Link to={redirect} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "flex-start",
          pl: "10px",
          justifyContent: "flex-start",
          color: "#878787",
          "&:hover": {
            color: "#6956E5",
          },
        }}
      >
        <span>{image}</span>

        {name}
      </Box>
    </Link>
  );
};
