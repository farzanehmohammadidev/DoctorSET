"use client";
// doctor login
import Link from "next/link";
import { NextResponse } from "next/server";
import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

function DoctorsLogin() {
  const [showPasssword, setShowPassword] = useState<boolean>(false);
  const showPassHandler = () => {
    setShowPassword(!showPasssword);
  };
  const DoctorsLoginSubmitHandler = async (e:React.FormEvent<HTMLFormElement> ) => {
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    if (!username || !password)
      return NextResponse.json(
        { error: "فیلد ها رو خالی نزار!" },
        { status: 400 }
      );
    try {
      fetch(`api/auth/DoctorsLogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });
    } catch {
      return NextResponse.json({ error: "مشکلی در ورود شما به سایت پیش آمد" });
    }
  };
  return (
    <form onSubmit={DoctorsLoginSubmitHandler} className="flex justify-center items-center h-screen flex-col bg-blue-50">
      <div className="w-[700px] rounded flex justify-center p-20 flex-col bg-white">
        <input
          type="text"
          placeholder="لطفا نام کاربری خود را وارد کنید"
          name="username"
          id=""
          className="border-2 focus:outline-none border-blue-700 my-[20px] p-2 m-5 rounded"
        />
        <div className="flex border-2 items-center justify-between my-[20px] border-blue-700 p-2 m-5 rounded">
          <input
            className="focus:outline-none w-[99.9%]"
            type={showPasssword ? "text" : "password"}
            name="password"
            id=""
          />
          <span onClick={showPassHandler}>
            {showPasssword ? <LuEyeClosed /> : <LuEye />}
          </span>
        </div>
        <button
          type="submit"
          className="bg-green-600 m-[20px] text-white px-5 py-1 rounded"
        >
          ورود
        </button>
        <p>
          <Link className="text-red-600" href={`RegisterDoctors`}>
            {" "}
            حساب کاربری نداری؟{" "}
          </Link>
        </p>
      </div>
    </form>
  );
}

export default DoctorsLogin;
