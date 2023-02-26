import { createSlice } from "@reduxjs/toolkit";
import { CONTRIBUTION } from "../../constants/helpers";

const initialState = CONTRIBUTION;

export const contributionSlice = createSlice({
  name: "contribution",
  initialState,
  reducers: {
    onInput: (state, action) => {
      return action.payload;
    },
  },
});
