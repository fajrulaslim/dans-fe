import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  openModalRedeem: false,
  openModalRequest: false,
  openModalBookShortut: false,
  dataModalBookShortcut: {},
  quickMenu: [
    {
      key: "redeem",
      title: "Redeem Book",
      icon: "/images/quick-menu/redeem-book.webp",
      link: null,
    },
    // {
    //   key: "grades",
    //   title: "My Grades",
    //   icon: "/images/quick-menu/my-grades.webp",
    //   link: null,
    // },
    {
      key: "worksheet",
      title: "Worksheet",
      icon: "/images/quick-menu/worksheet.webp",
      link: "/worksheet",
    },
    {
      key: "teacher-traning",
      title: "Teacher Training",
      icon: "/images/quick-menu/teacher-training.webp",
      link: "/teacher-training",
    },

    {
      key: "atlaz-teach",
      title: "Atlaz Teach",
      icon: "/images/quick-menu/atlaz-teach.webp",
      link: process.env.NEXT_PUBLIC_TEACH_URL,
      isExternal: true,
    },

    {
      key: "english-test",
      title: "English Test",
      icon: "/images/quick-menu/english-test.webp",
      link: "https://test.hiatlaz.com/",
      isExternal: true,
    },
    {
      key: "game",
      title: "Atlaz Game",
      icon: "/images/quick-menu/atlaz-game.webp",
      link: "/",
    },
  ],
};

const dashBoardSlice = createSlice({
  name: "dasboard",
  initialState,
  reducers: {
    setOpenModalRedeem: (state, action) => {
      state.openModalRedeem = action.payload;
    },
    setOpenModalRequest: (state, action) => {
      state.openModalRequest = action.payload;
    },
    setOpenModalBookShortut: (state, action) => {
      state.openModalBookShortut = action.payload;
    },
    setDataModalBookShortcut: (state, action) => {
      state.dataModalBookShortcut = action.payload;
    },
  },
});

export const { setOpenModalRedeem, setOpenModalRequest, setOpenModalBookShortut, setDataModalBookShortcut } =
  dashBoardSlice.actions;

export default dashBoardSlice.reducer;
