import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/users",
});

export const fetchUserAndSetJwtCookieByLogin = createAsyncThunk(
  "user/fetchUserAndSetJwtCookieByLogin",
  async (loginDetails: { username: string; password: string }, thunkApi) => {
    try {
      const { username, password } = loginDetails;
      const { data: user } = await api.post(
        "/login",
        { username, password },
        { withCredentials: true }
      );

      localStorage.setItem("user", JSON.stringify(user));

      return user;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);
