import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contributionSlice } from "./contribution";
import { costSlice } from "./cost";
import { termSlice } from "./term";

const rootReducer = combineReducers({
  cost: costSlice.reducer,
  contribution: contributionSlice.reducer,
  term: termSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
