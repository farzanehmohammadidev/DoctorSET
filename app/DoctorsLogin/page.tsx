"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

function DoctorsLogin() {
  const [showPasssword, setShowPassword] = useState<boolean>(false);
  const showPassHandler = () => {
    setShowPassword(!showPasssword);
  };
  const DoctorsLoginSubmitHandler = ()=>{

  }
  return (
    <form className="flex justify-center items-center h-screen flex-col bg-blue-50">
      <div className="w-[700px] rounded flex justify-center p-20 flex-col bg-white">
        <input
          type="text"
          placeholder="لطفا نام کاربری خود را وارد کنید"
          name=""
          id=""
          className="border-2 focus:outline-none border-blue-700 my-[20px] p-2 m-5 rounded"
        />
        <div className="flex border-2 items-center justify-between my-[20px] border-blue-700 p-2 m-5 rounded">
          <input
            className="focus:outline-none w-[99.9%]"
            type={showPasssword ? "text" : "password"}
            name=""
            id=""
          />
          <span onClick={showPassHandler}>
            {showPasssword ? <LuEyeClosed /> : <LuEye />}
          </span>
        </div>
        <button type="button" onClick={DoctorsLoginSubmitHandler} className="bg-green-600 m-[20px] text-white px-5 py-1 rounded">
          ورود
        </button>
        <p><Link className="text-red-600" href={`RegisterDoctors`}> حساب کاربری نداری؟ </Link></p>
      </div>
    </form>
  );
}

export default DoctorsLogin;
