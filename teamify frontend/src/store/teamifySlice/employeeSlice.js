import { createSlice } from "@reduxjs/toolkit";
import { empData } from "../data/employeeData";

const initialState = { employeeData: empData };
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    // increment(state) {
    //   state.value++;
    // },
    // decrement(state) {
    //   state.value--;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = employeeSlice.actions;
export default employeeSlice.reducer;

export const selectEmpData = (state) => state.employee.employeeData;
