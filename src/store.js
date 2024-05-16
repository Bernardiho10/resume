import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../features/portfolio/portfolioSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});
