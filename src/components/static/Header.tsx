import React from "react";
import {AiOutlineMenu} from "react-icons/ai"
const Header = () => {
  return (
    <div className="w-full h-[70px] bg-black flex justify-center items-center text-white">
      {/* main */}
      <div className="w-[90%] flex justify-between items-center ">
        <div className=" font-bold text-[20px] text-center leading-4 ">FRAKIES <br/> <span className="text-[18px] text-gray-300">bags</span></div>
        <nav className="gap-5 flex justify-center items-center font-bold meduim:hidden ">
          <div>Home</div>
          <div>Store</div>
          <div>Cart</div>
        </nav>
       <div className="meduim:hidden flex ">
       <button className="w-[130px] h-[40px] bg-red border-white rounded-md text-white flex justify-center items-center font-semibold hover:cursor-pointer hover:scale-75 ease-in-out duration-500 ">Buy Now</button>
</div>
<div className="hidden meduim:flex text-[30px]">
    <AiOutlineMenu/>

       </div>
      </div>
    </div>
  );
};

export default Header;
