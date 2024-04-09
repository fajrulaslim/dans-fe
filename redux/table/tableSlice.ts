import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tbody: [],
    tbody2nd: [],
    tbody3nd: [],
    pagination: {},
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTbody: (state, action) => {
        state.tbody = action.payload;
    },
    setTbody2nd: (state, action) => {
        state.tbody2nd = action.payload;
    },
    setTbody3nd: (state, action) => {
        state.tbody3nd = action.payload;
    },
    setPagination: (state, action) => {
        state.pagination = action.payload;
    },
  },
});

export const { setTbody, setTbody2nd, setTbody3nd, setPagination } = tableSlice.actions;

export default tableSlice.reducer;
