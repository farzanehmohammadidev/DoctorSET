import React from "react";
import city from "@/public/data/iran.json";
function SearchBox() {
  const provinceName = city.map((province) => province.province_name);
  const uniqueProvinces = Array.from(new Set(provinceName)).sort();
  return (
    <form>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="لطفا نام پزشک یا تخصص مورد نظر خود را وارد کنید"
          className="focus:outline-none focus:text-red-700 border-2 transition-all duration-200 w-[70%] m-10 p-3 text-blue-700 rounded"
        />
        <select>
          <option>همه استان ها</option>
          {uniqueProvinces.map((name, index) => (
            <option key={index}>{name}</option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default SearchBox;
