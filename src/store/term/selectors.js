export const selectTermModule = (state) => state.term;

export const selectTermFilter = (state) => {
  if (selectTermModule(state) < 1) {
    return 1;
  } else if (selectTermModule(state) > 60) {
    return 60;
  } else {
    return selectTermModule(state);
  }
};
