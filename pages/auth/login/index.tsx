import React, { useEffect, useState } from "react";
import useLogin from "./useLogin";
import { Toaster } from "react-hot-toast";

const index = (props: any) => {
  const { formik } = useLogin();
  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-[400px]">
        <h1 className="text-2xl mb-4 text-center">Login</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input 
              id="username" 
              type="text" 
              name="username"
              onInput={(e: any) => {
                formik.setFieldValue('username', e.target.value)
              }}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input 
              id="password" 
              type="password" 
              name="password"
              onInput={(e: any) => {
                formik.setFieldValue('password', e.target.value)
              }}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default index;
