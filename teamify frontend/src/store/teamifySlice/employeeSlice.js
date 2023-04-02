import { createSlice } from "@reduxjs/toolkit";
import { empData } from "../data/employeeData";

function generateNewId(existingIds) {
  let lastNumber =
    existingIds.length > 0 ? existingIds[existingIds.length - 1] : 0; // Get the last number in the array, or 0 if the array is empty
  let newId = lastNumber + 1; // Generate a new ID by adding 1 to the last number
  while (existingIds.includes(newId)) {
    // Check if the ID already exists in the array
    lastNumber = newId;
    newId = lastNumber + 1; // Generate a new ID by adding 1 to the last number
  }
  return newId;
}

const initialState = { employeeData: empData, selectedEmployee: null };
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee(state, action) {
      const newId = generateNewId(
        state.employeeData.map((employee) => employee.id)
      );
      const newEmployee = { id: newId, ...action.payload };

      state.employeeData.push(newEmployee);
    },
    deleteEmployee(state, action) {
      const id = action.payload;
      console.log(id);
      state.employeeData = state.employeeData.filter((emp) => emp.id !== id);
    },
    employeeDetails(state, action) {
      state.selectedEmployee = action.payload;
    },
    updateEmployee(state, action) {
      const { id, ...data } = action.payload;
      console.log(data);
      state.employeeData = state.employeeData.map((employee) =>
        employee.id === id ? { ...employee, ...data } : employee
      );
    },
  },
});

export const { addEmployee, deleteEmployee, employeeDetails, updateEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;

export const selectEmpData = (state) => state.employee.employeeData;
export const selectEmployee = (state) => state.employee.selectedEmployee;
