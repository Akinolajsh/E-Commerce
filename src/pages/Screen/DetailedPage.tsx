import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import image from "../../assets/Product13_600x.webp"
import pix from "../../assets/slider2.webp"

const DetailedPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.6)] relative " style={{backgroundImage : `url(${pix})`}}>
    <div className="w-[80%] h-[80%] flex justify-between items-center  bg-white shadow-md rounded- overflow-hidden 
    absolute z-10">
      <img src={image} alt="" className="w-[50%] h-full object-cover" />
      <div className="w-[50%] h-full  flex  flex-col pl-[10px]  pt-[10px]">
      <div className="ml-[400px]">
          <AiOutlineClose className="text-[30px] flex justify-end hover:cursor-pointer duration-300 transition-all"
          />
      </div>
        <div className="text-[30px] font-bold mb-4">title</div>
        <div className="flex mb-4">
          <div className="line-through text-[20px] font-medium mr-2">
          ₦677
          </div>
          <div className="text-[20px] font-semibold"> ₦555</div>
        </div>
        <div className="text-[20px] font-medium mb-3">rate</div>
        <div className="text-[15px] font-medium leading-[2] mb-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          maxime repellendus fugiat velit illum veritatis molestias nihil quis
          dolor blanditiis distinctio placeat harum veniam, animi,
          accusantium, architecto ad possimus eligendi deserunt est minima.
          Sed temporibus commodi aliquam dolor quo voluptate!
        </div>
        <hr />
        <div className="flex justify-between m-5 items-center">
          <div
            className="flex justify-between items-center h-[40px] w-[80px] border 
         "
          >
            <div className="text-[20px] hover:cursor-pointer   duration-300 transition-all">
              -
            </div>
            <div className="text-[20px]">1</div>
            <div className="text-[20px] hover:cursor-pointer   duration-300 transition-all">
              +
            </div>
          </div>
          <button
            className="w-[150px] h-[50px] rounded-md bg-black text-white hover:cursor-pointer
          hover:bg-purple-500 duration-300 transition-all flex justify-center items-center "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DetailedPage