import { createAsyncThunk } from "@reduxjs/toolkit";
import { simulateApiCall } from "../../utils/api";

export const fetchCards = createAsyncThunk("chart/fetchCards", async () => {
  return simulateApiCall(
    [
      {
        balance: 5756,
        cardHolder: "Eddy Cusuma",
        cardNumber: "3778 **** **** 1234",
        validThru: "12/22",
      },
      {
        balance: 5756,
        cardHolder: "Eddy Cusuma",
        cardNumber: "3778 **** **** 1234",
        validThru: "12/22",
      },
      {
        balance: 5756,
        cardHolder: "Eddy Cusuma",
        cardNumber: "3778 **** **** 1234",
        validThru: "12/22",
      },
    ],
    500
  );
});
