import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCards } from "./thunk";
import { ApiStatus } from "../../lib/types/api";

interface CardState {
  cards: {
    balance: number;
    cardHolder: string;
    cardNumber: string;
    validThru: string;
  }[];
  status: ApiStatus;
}

const initialState: CardState = {
  cards: [],
  status: "idle",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCards.fulfilled,
        (state, action: PayloadAction<CardState["cards"]>) => {
          state.status = "succeeded";
          state.cards = action.payload;
        }
      )
      .addCase(fetchCards.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default cardSlice.reducer;
