import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolio: [],
  error: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    getPortfolio(state, action) {
      return state.portfolio;
    },
  },
});

export const { getPortfolio } = portfolioSlice.reducer;
