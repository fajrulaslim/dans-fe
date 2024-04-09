import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearAuth } from "@/redux/global/globalSlice";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

type Props = {};

const Logout = (props: Props) => {
  const dispatch = useDispatch();
  const logout = useCallback(async () => {
    deleteCookie("accessToken");
    dispatch(clearAuth());
    router.push("/");
  }, []);
  const router = useRouter();
  useEffect(() => {
    logout();
  }, []);

  return (
    <>
    </>
  );
};

export default Logout;
