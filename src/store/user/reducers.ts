import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserById } from "./thunk";
import { ApiStatus } from "../../lib/types/api";
import { User } from "../../lib/types/user";

interface UserState {
  user: User | null;
  status: ApiStatus;
}

const initialState: UserState = {
  user: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserById.fulfilled,
        (state, action: PayloadAction<UserState["user"]>) => {
          state.status = "succeeded";
          state.user = action.payload;
        }
      )
      .addCase(fetchUserById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
