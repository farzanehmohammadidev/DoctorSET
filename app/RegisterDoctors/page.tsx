"use client";
import React from "react";

function Page() {

const RegisterDocterHandler = ()=>{
  
}

  return (
    <form className="grid grid-cols-2 gap-4 p-4">
      <div className="flex flex-col">
        <label htmlFor="name">نام:</label>
        <input
          id="name"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="نام خود را وارد کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="family">نام خانوادگی:</label>
        <input
          id="family"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="نام خانوادگی خود را وارد کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="specialty">تخصص:</label>
        <input
          id="specialty"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="تخصص خود را وارد کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="username">یوزرنیم:</label>
        <input
          id="username"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="یک یوزرنیم انتخاب کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">پسوورد:</label>
        <input
          id="password"
          type="password"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="یک پسورد انتخاب کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="confirmPassword">تکرار پسوورد:</label>
        <input
          id="confirmPassword"
          type="password"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="پسورد را مجدد وارد کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phonenumber">شماره تلفن:</label>
        <input
          id="phonenumber"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="شماره تلفن خود را وارد کنید"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">ایمیل:</label>
        <input
          id="email"
          type="email"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2"
          placeholder="ایمیل خود را وارد کنید"
        />
      </div>

      <div className="flex flex-col col-span-2">
        <label htmlFor="address">آدرس مطب:</label>
        <input
          id="address"
          type="text"
          className="focus:outline-none border-red-600 border-2 text-red-600 rounded-md p-2 w-full"
          placeholder="آدرس مطب را وارد کنید"
        />
        <button onClick={RegisterDocterHandler} className="bg-blue-700 text-white px-4 py-2 my-2 w-[200px] rounded self-end">
          ثبت نام
        </button>
      </div>
    </form>
  );
}

export default Page;
