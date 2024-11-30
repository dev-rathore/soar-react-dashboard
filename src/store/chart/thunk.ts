import { createAsyncThunk } from "@reduxjs/toolkit";
import { simulateApiCall } from "../../utils/api";

export const fetchWeeklyActivity = createAsyncThunk(
  "chart/fetchWeeklyActivity",
  async () => {
    return simulateApiCall(
      {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          { label: "Withdraw", data: [480, 350, 325, 480, 150, 390, 400] },
          { label: "Deposit", data: [240, 140, 270, 370, 250, 250, 330] },
        ],
      },
      3000
    );
  }
);

export const fetchBalanceHistory = createAsyncThunk(
  "chart/fetchBalanceHistory",
  async () => {
    return simulateApiCall({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
      ],
      data: [0, 300, 210, 500, 450, 800, 200, 580, 210, 630, 600],
    });
  }
);

export const fetchExpenseStatistics = createAsyncThunk(
  "chart/fetchExpenseStatistics",
  async () => {
    return simulateApiCall({
      labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
      data: [30, 15, 35, 20],
    });
  }
);
