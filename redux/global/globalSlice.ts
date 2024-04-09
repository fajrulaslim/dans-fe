import { createSlice } from "@reduxjs/toolkit";
import { asyncLogin } from "./asyncActions/asyncAuth";

const initialState = {
  layout: {},
  requestLoading: false,
  openNavbarDropdown: false,
  toast: {
    message: "",
    status: "", //success / warning /error
    title: "",
  },

  auth: {
    isLogin: false,
    user: {},
    register: {
      data: {},
    },
  },
  abjads: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],

  colors: [
    "#F29E4C",
    "#F7F19C",
    "#DBF24C",
    "#89F24C",
    "#4CF2EC",
    "#4CA4F2",
    "#4F70F2",
    "#9870F5",
    "#DB75F5",
    "#F24CC0",
  ],
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    clearToast: (state) => {
      state.toast = {
        message: "",
        status: "", //success / warning /error
        title: "",
      };
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    clearAuth: (state) => {
      state.auth = { ...state.auth, isLogin: false, user: {} };
    },

    setRequestLoading: (state, action) => {
      state.requestLoading = action.payload;
    },
    setUser: (state, action) => {
      state.auth = { ...state.auth, user: action.payload };
    },
    setOpenNavbarDropdown: (state, action) => {
      state.openNavbarDropdown = action.payload;
    },
  },
  extraReducers(builder) {
    // login
    builder.addCase(asyncLogin.pending, (state) => {
      state.requestLoading = true;
    });
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      // console.log(action);
      state.auth.user = action.payload.data;
      state.requestLoading = false;
      state.auth.isLogin = true;
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.toast.message = `${action.payload}`;
      state.toast.status = "error";
      state.requestLoading = false;
    });
  },
});

export const { clearAuth, clearToast, setOpenNavbarDropdown, setAuth, setRequestLoading, setUser } =
  globalSlice.actions;

export default globalSlice.reducer;
