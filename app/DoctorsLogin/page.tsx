"use client";
// doctor login
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LuEye, LuEyeClosed } from "react-icons/lu";

function DoctorsLogin() {
  const [showPasssword, setShowPassword] = useState<boolean>(false);
  const route = useRouter();
  const showPassHandler = () => {
    setShowPassword(!showPasssword);
  };
  const DoctorsLoginSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    if (!username || !password) toast.error("فیلد ها رو خالی نزار!");
    try {
      const res = await fetch(`/api/auth/DoctorsLogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(" ورود شما با موفقیت انجام شد!");
        route.push("/");
      }
    } catch {
      return { error: "مشکلی در ورود شما به سایت پیش آمد" };
    }
  };
  return (
    <form
      onSubmit={DoctorsLoginSubmitHandler}
      className="flex justify-center items-center h-screen flex-col bg-blue-50"
    >
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
            placeholder="لطفا پسوورد خود را وارد کنید"
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
            حساب کاربری ندارید؟
          </Link>
        </p>
      </div>
    </form>
  );
}

export default DoctorsLogin;
