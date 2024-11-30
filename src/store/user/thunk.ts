import { createAsyncThunk } from "@reduxjs/toolkit";
import { simulateApiCall } from "../../utils/api";

export const fetchUserById = createAsyncThunk(
  "chart/fetchUserById",
  async (id: string) => {
    return simulateApiCall(
      {
        address: {
          present: "San Jose, California, USA",
          permanent: "San Jose, California, USA",
          city: "San Jose",
        },
        dob: "1995-12-17T00:00:00.000Z",
        email: "charlenereed@gmail.com",
        id,
        name: "Charlene Reed",
        password: "password",
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        username: "charlenereed",
      },
      0
    );
  }
);
