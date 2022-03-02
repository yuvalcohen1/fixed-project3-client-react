import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RegisterBodyModel } from "../../models/RegisterBody.model";

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

export const fetchUserAndSetJwtCookieByRegister = createAsyncThunk(
  "user/fetchUserAndSetJwtCookieByRegister",
  async (registerDetails: RegisterBodyModel, thunkApi) => {
    try {
      const { firstName, lastName, username, password } = registerDetails;
      const { data: user } = await api.post(
        "/register",
        { firstName, lastName, username, password },
        { withCredentials: true }
      );

      localStorage.setItem("user", JSON.stringify(user));

      return user;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);
