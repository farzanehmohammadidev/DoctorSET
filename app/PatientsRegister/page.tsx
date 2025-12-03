"use client";
//  Patient Login page
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LuEye, LuEyeClosed } from "react-icons/lu";

function Page() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const RegisterDocterHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const family = formData.get("family");
    const username = formData.get("username");
    const password = formData.get("password");
    const phonenumber = formData.get("phonenumber");
    const email = formData.get("email");
    const nationalID = formData.get("nationalID");
    const confirmPassword = formData.get("confirmPassword");
    if (password !== confirmPassword) {
      toast.error("تکرار پسوورد درست نیست");
      return;
    }
    try {
      const res = await fetch(`/api/auth/PatientsRegister`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          email,
          name,
          family,
          phonenumber,
          nationalID,
          role: "Patient",
        }),
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("ثبت نام با موفقیت انجام شد!"); // موفقیت
      }
    } catch (err) {
      console.log("مشکلی در ثبت نام شما به وجود اومده", err);
    }
  };

  return (
    <form
      onSubmit={RegisterDocterHandler}
      className="grid grid-cols-2 gap-4 p-4"
    >
      <div className="flex flex-col">
        <label htmlFor="name">نام:</label>
        <input
          name="name"
          id="name"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="نام خود را وارد کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="family">نام خانوادگی:</label>
        <input
          name="family"
          id="family"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="نام خانوادگی خود را وارد کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="username">یوزرنیم:</label>
        <input
          name="username"
          id="username"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="یک یوزرنیم انتخاب کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">پسوورد:</label>
        <div className="flex justify-between items-center rounded-md p-2 border-red-600 border-2">
          <input
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
            className="focus:outline-none w-[99.99%] text-red-600"
            placeholder="یک پسورد انتخاب کنید"
          />
          <span className="text-red-600" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <LuEyeClosed size={25} /> : <LuEye size={25} />}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirmPassword">تکرار پسوورد:</label>
        <div className="flex justify-between items-center rounded-md p-2 border-red-600 border-2">
          <input
            name="confirmPassword"
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            className="focus:outline-none w-[99.99%] text-red-600 "
            placeholder="پسورد را مجدد وارد کنید"
          />
          <span className="text-red-600" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <LuEyeClosed size={25} /> : <LuEye size={25} />}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="phonenumber">شماره تلفن:</label>
        <input
          name="phonenumber"
          id="phonenumber"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="شماره تلفن خود را وارد کنید"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="nationalID"> کدملی:</label>
        <input
          name="nationalID"
          id="nationalID"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="  کد ملی خود را وارد کنید"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">ایمیل:</label>
        <input
          name="email"
          id="email"
          type="email"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="ایمیل خود را وارد کنید"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 my-2 w-[200px] rounded self-end"
        >
          ثبت نام
        </button>
      </div>
    </form>
  );
}

export default Page;
