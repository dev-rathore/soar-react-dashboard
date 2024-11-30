import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchWeeklyActivity,
  fetchBalanceHistory,
  fetchExpenseStatistics,
} from "./thunk";
import { ApiStatus } from "../../lib/types/api";

interface ChartState {
  weeklyActivity: {
    labels: string[];
    datasets: { label: string; data: number[] }[];
  } | null;
  balanceHistory: { labels: string[]; data: number[] } | null;
  expenseStatistics: { labels: string[]; data: number[] } | null;
  status: {
    weeklyActivity: ApiStatus;
    balanceHistory: ApiStatus;
    expenseStatistics: ApiStatus;
  };
}

const initialState: ChartState = {
  weeklyActivity: null,
  balanceHistory: null,
  expenseStatistics: null,
  status: {
    weeklyActivity: "idle",
    balanceHistory: "idle",
    expenseStatistics: "idle",
  },
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeeklyActivity.pending, (state) => {
        state.status.weeklyActivity = "loading";
      })
      .addCase(
        fetchWeeklyActivity.fulfilled,
        (state, action: PayloadAction<ChartState["weeklyActivity"]>) => {
          state.status.weeklyActivity = "succeeded";
          state.weeklyActivity = action.payload;
        }
      )
      .addCase(fetchWeeklyActivity.rejected, (state) => {
        state.status.weeklyActivity = "failed";
      });

    builder
      .addCase(fetchBalanceHistory.pending, (state) => {
        state.status.balanceHistory = "loading";
      })
      .addCase(
        fetchBalanceHistory.fulfilled,
        (state, action: PayloadAction<ChartState["balanceHistory"]>) => {
          state.status.balanceHistory = "succeeded";
          state.balanceHistory = action.payload;
        }
      )
      .addCase(fetchBalanceHistory.rejected, (state) => {
        state.status.balanceHistory = "failed";
      });

    builder
      .addCase(fetchExpenseStatistics.pending, (state) => {
        state.status.expenseStatistics = "loading";
      })
      .addCase(
        fetchExpenseStatistics.fulfilled,
        (state, action: PayloadAction<ChartState["expenseStatistics"]>) => {
          state.status.expenseStatistics = "succeeded";
          state.expenseStatistics = action.payload;
        }
      )
      .addCase(fetchExpenseStatistics.rejected, (state) => {
        state.status.expenseStatistics = "failed";
      });
  },
});

export default chartSlice.reducer;
