import { Box, Button, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import { selectEmpData } from "../store/teamifySlice/employeeSlice";
import { useSelector } from "react-redux";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AddEmployee from "../components/Employees/AddEmployee";
import TemporaryDrawer from "../components/Employees/AddEmployee";

const Employees = () => {
  const selectAllempData = useSelector(selectEmpData);
  const empData = useMemo(() => selectAllempData, [selectAllempData]);

  const columns = [
    { id: "id", label: "ID", minWidth: 50 },
    {
      id: "first_name",
      label: "First Name",
      minWidth: 100,
      valueGetter: (params) => console.log(params),
    },
    { id: "last_name", label: "Last Name", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 200 },
    { id: "gender", label: "Gender", minWidth: 100 },
    { id: "job", label: "Job", minWidth: 100 },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //search
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const empDataSubset = empData.map(
    ({ id, first_name, email, last_name, gender, job }) => ({
      id,
      first_name,
      email,
      last_name,
      gender,
      job,
    })
  );

  const filteredEmpData = empDataSubset.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: "80%",
        height: "100vh",
        marginLeft: "20px",

        position: "absolute",
        top: "120px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />

        <AddEmployee />
      </Box>

      <TableContainer sx={{ maxHeight: 440, backgroundColor: "#f2f2f2" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ backgroundColor: "#f2f2f2", color: "#333" }}>
            <TableRow sx={{ border: "1px solid #ddd" }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmpData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    onClick={() => console.log(row)}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredEmpData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Employees;
