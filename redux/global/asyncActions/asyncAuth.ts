import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";
import { POST } from "../../../helpers/api";

export const asyncLogin = createAsyncThunk(
  "auth/login",
  async (req: any, { rejectWithValue }) => {
    const rememberTime = 60 * 60 * 24 * 7; //7 hari
    try {
      const send = await POST("/auth/login", req);
      if (req.remember) {
        setCookie("accessToken", send.accessToken.token, {
          maxAge: rememberTime,
        });
        setCookie("refreshToken", send.refreshToken, { maxAge: rememberTime });
      } else {
        setCookie("accessToken", send.accessToken.token);
        setCookie("refreshToken", send.refreshToken);
      }

      return send;
    } catch (error: any) {
      if (error.response.status === 403) {
        return rejectWithValue("Wrong username / password");
      }

      return rejectWithValue("Something went wrong");
    }
  }
);


