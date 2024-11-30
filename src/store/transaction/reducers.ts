import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTransactions } from "./thunk";
import { ApiStatus } from "../../lib/types/api";

interface TransactionState {
  transactions: {
    icon: string;
    title: string;
    date: Date;
    amount: number;
  }[];
  status: ApiStatus;
}

const initialState: TransactionState = {
  transactions: [],
  status: "idle",
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<TransactionState["transactions"]>) => {
          state.status = "succeeded";
          state.transactions = action.payload;
        }
      )
      .addCase(fetchTransactions.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default transactionSlice.reducer;
