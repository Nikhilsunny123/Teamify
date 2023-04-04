import { Avatar, Card, CardContent, Typography } from "@mui/material";
import React from "react";
export default function UserCard({ user }) {
  const cardStyle = {
    minWidth: 250,
    maxWidth: 270,
    width: "auto",
    margin: "1%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const nameStyle = {
    backgroundColor: "#af93cf",
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  const titleStyle = {
    fontSize: 18,
    margin: 0,
  };

  const subtitleStyle = {
    fontSize: 14,
    margin: 0,
    color: "#777",
  };
  const cardContentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const textStyle = {
    fontSize: 16,
  };

  const activeStyle = {
    color: user.isActive ? "#067527" : "#db713b",
    width: "auto",
    height: "auto",
  };

  return (
    <Card style={cardStyle}>
      <div style={nameStyle}>
        <Avatar />
        <Typography style={titleStyle} variant="h6">
          {`${user.first_name} ${user.last_name}`}
        </Typography>
      </div>

      <CardContent style={cardContentStyle}>
        <Typography style={subtitleStyle}>Email: {user.email}</Typography>
        <Typography style={textStyle}>Role: {user.job}</Typography>
        <Typography style={textStyle}>Project: {user.project}</Typography>
        <Typography style={activeStyle}>
          {user.isActive ? "Active" : "Not Active"}
        </Typography>
      </CardContent>
    </Card>
  );
}
