import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/reducers";
import chartReducer from "./chart/reducers";
import cardReducer from "./card/reducers";
import transactionReducer from "./transaction/reducers";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chart: chartReducer,
    card: cardReducer,
    transaction: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
