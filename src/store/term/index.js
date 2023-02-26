import { createSlice } from "@reduxjs/toolkit";
import { TERM } from "../../constants/helpers";

const initialState = TERM;

export const termSlice = createSlice({
  name: "term",
  initialState,
  reducers: {
    onInput: (state, action) => {
      return action.payload;
    },
  },
});
