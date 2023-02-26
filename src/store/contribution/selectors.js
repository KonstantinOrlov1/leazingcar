export const selectContributionModule = (state) => state.contribution;

export const selectContributionFilter = (state) => {
  if (selectContributionModule(state) < 10) {
    return 10;
  } else if (selectContributionModule(state) > 60) {
    return 60;
  } else {
    return selectContributionModule(state);
  }
};
