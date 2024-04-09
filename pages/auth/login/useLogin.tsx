import React, { useEffect, useMemo } from "react";
import { POST } from "@/helpers/api";
import useToast from "@/helpers/useToast";
import { setUser } from "@/redux/global/globalSlice";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

type Props = {};

const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { callToast } = useToast();

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      username: Yup.string().required("This field is required"),
      password: Yup.string().required("This field is required"),
    });
  }, []);

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (req: any) => {
    try {
      const result = await POST("/users/login", req);
      dispatch(setUser(result.data));

      setCookie("accessToken", result.accessToken.token);

      router.push("/");
    } catch (error: any) {
      callToast("warning", "Wrong username / password");
    }
  };
  useEffect(() => {
    let toastCookie = getCookie("toast");
    if (toastCookie) {
      let toast: any = JSON.parse(toastCookie?.toString() || "");
      callToast(toast?.status, toast?.message);
      deleteCookie("toast");
    }
  }, []);
  return { formik };
};

export default useLogin;
