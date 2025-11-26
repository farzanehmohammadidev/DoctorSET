import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import { SlArrowLeft } from "react-icons/sl";


function HomeLayout() {
  return(
    <>
       <div className='flex justify-center mt-[50px] mb-[30px]'>
     <h1 className='text-[250px] text-red-700'>دکتر</h1><h1 className='text-[250px] text-blue-700'>ست</h1>
   </div>
   <SearchBox />
   <div className='flex justify-center items-center cursor-pointer transition-colors duration-300 hover:text-red-700'>
    <h3 className='mx-1'>گفت و گو آنلاین با پزشک</h3><span><SlArrowLeft /></span>
   </div>

    </>
  );
}

export default HomeLayout;
