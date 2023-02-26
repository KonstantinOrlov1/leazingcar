export const selectCostModule = (state) => state.cost;

export const selectCostModuleFilter = (state) => {
  if (selectCostModule(state) < 1000000) {
    return 1000000;
  } else if (selectCostModule(state) > 6000000) {
    return 6000000;
  } else {
    return selectCostModule(state);
  }
};
