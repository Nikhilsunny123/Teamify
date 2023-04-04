import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, Menu } from "@mui/material";

const FilterData = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState({
    project: "",
    job: "",
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <FormControl style={{ margin: "1rem" }}>
        <InputLabel htmlFor="filter-select">Filter</InputLabel>
        <Select
          value={selectedFilter}
          onChange={(event) => setSelectedFilter(event.target.value)}
          inputProps={{ id: "filter-select" }}
          onClick={handleClick}
        >
          <MenuItem value={{ project: "", job: "" }}>All Employees</MenuItem>
          <MenuItem value={{ project: "Project", job: "" }}>
            <em>Project</em>
          </MenuItem>
          <MenuItem value={{ project: "", job: "Job" }}>
            <em>Job</em>
          </MenuItem>
        </Select>
      </FormControl>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {selectedFilter.project && (
          <div>
            <MenuItem onClick={handleClose} value={{ project: "", job: "" }}>
              All Projects
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              value={{ project: "Project 1", job: "" }}
            >
              Project 1
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              value={{ project: "Project 2", job: "" }}
            >
              Project 2
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              value={{ project: "Project 3", job: "" }}
            >
              Project 3
            </MenuItem>
          </div>
        )}
        {selectedFilter.job && (
          <div>
            <MenuItem onClick={handleClose} value={{ project: "", job: "" }}>
              All Jobs
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              value={{ project: "", job: "Developer" }}
            >
              Developers
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              value={{ project: "", job: "Designer" }}
            >
              Designers
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              value={{ project: "", job: "Manager" }}
            >
              Managers
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default FilterData;
