import { Box, Typography } from "@mui/material";
import React from "react";
import employeesImage from "../../assets/images/employees.png";

const Employees = () => {
  const data = [
    {
      status: "inactive",
      count: 254,
      color: "#6956E5",
    },
    {
      status: "active",
      count: 3000,
      color: "#FB896B",
    },
    {
      status: "total",
      count: 3254,
      color: "#F8C07F",
    },
  ];
  return (
    <div
      style={{
        width: "330px",
        height: "330px",
        margin: "5px",
        border: "1px solid #E6E8EC",
        borderRadius: "5%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "space-between",
          gap: "10px",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-evenly",
            gap: "10px",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Employees
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Employees
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            {data.map((item) => (
              <Box>
                <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5px",
                    color: "#787486",
                    fontSize: "14px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: item.color,
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                    }}
                  />

                  {item.status}
                </Typography>
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "5px",
                  }}
                >
                  {item.count}
                </Typography>
              </Box>
            ))}
          </Box>

          <img
            style={{ maxWidth: "100%" }}
            src={employeesImage}
            width="215px"
            height="215px"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Employees;
