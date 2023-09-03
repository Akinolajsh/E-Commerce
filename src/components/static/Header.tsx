import React, { useState } from "react";
import {AiOutlineMenu,AiFillHome,AiOutlineShoppingCart} from "react-icons/ai"
import {LiaTrashRestoreSolid} from "react-icons/lia"
import {RiLoginBoxLine} from "react-icons/ri"
import {BiLogOut} from "react-icons/bi"
import { Link } from "react-router-dom";
const Header = () => {

const [state, setState]= useState<boolean>(false)

const onShow= ()=>{
  setState(!state)
}

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
      <Link to="/sign-in">
      <button className="w-[130px] h-[40px] bg-red border-white rounded-md text-white flex justify-center items-center font-semibold hover:cursor-pointer hover:scale-75 ease-in-out duration-500 ">Buy Now</button>
      </Link>
</div>
<div className="hidden meduim:flex text-[30px] cursor-pointer"
onClick={onShow}
>
    <AiOutlineMenu />
{
  state ? (
    <div className="h-[200px] w-[200px] bg-black absolute top-[60px] right-[10px] z-10 rounded-md shadow-md text-[20px] flex flex-col justify-center font-semibold">
<div className="h-[35px] hover:cursor-pointer hover:bg-white hover:text-black  px-5 flex  items-center justify-around">Home <AiFillHome/></div>
<div className="h-[35px] hover:cursor-pointer hover:bg-white hover:text-black  px-5 flex  items-center justify-around">Cart <AiOutlineShoppingCart/></div>
<div className="h-[35px] hover:cursor-pointer hover:bg-white hover:text-black  px-5 flex  items-center justify-around">Store <LiaTrashRestoreSolid/></div>
<div className="h-[35px] hover:cursor-pointer hover:bg-white hover:text-black  px-5 flex  items-center justify-around">Sign in <RiLoginBoxLine/></div>
<div className="h-[35px] hover:cursor-pointer hover:bg-white hover:text-black  px-5 flex  items-center justify-around">Sign up <RiLoginBoxLine/></div>
    </div>
  ): null
}
       </div>
      </div>
    </div>
  );
};

export default Header;
