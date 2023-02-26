import { createSlice } from "@reduxjs/toolkit";
import { COST } from "../../constants/helpers";

const initialState = COST;

export const costSlice = createSlice({
  name: "cost",
  initialState,
  reducers: {
    onInput: (state, action) => {
      return action.payload;
    },
  },
});
