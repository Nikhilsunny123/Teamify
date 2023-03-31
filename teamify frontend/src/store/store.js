import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./teamifySlice/employeeSlice";

const reducer = combineReducers({
  employee: employeeSlice,
});

const store = configureStore({ reducer });
export default store;
