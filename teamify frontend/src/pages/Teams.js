import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useMemo, useState } from "react";
import UserCard from "../components/shared/UserCard";
import { selectEmpData } from "../store/teamifySlice/employeeSlice";
import { useSelector } from "react-redux";
import FilterData from "../components/Teams/FilterData";

const Teams = () => {
  const selectAllempData = useSelector(selectEmpData);
  const empData = useMemo(() => selectAllempData, [selectAllempData]);
  console.log(empData);

  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        borderRadius: "1%",
      }}
    >
      <FilterData empData={empData} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "space-around",
        }}
      >
        {empData.map((employee) => (
          <UserCard user={employee} />
        ))}
      </Box>
    </Box>
  );
};

export default Teams;
