import React from 'react'
import bag from "../../assets/istockphoto-154417962-612x612-removebg-preview.png"
const Card = () => {

const rand = (max: number, min:number)=>{
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

  return (
  <div className='flex flex-wrap justify-center'>
      <div className='h-[500px] w-[320px] hover:shadow-md px-5 py-5 flex flex-col justify-between items-center rounded '>
        <div className='h-[60%] w-full object-cover bg-slate-100 relative'>
            <img src={bag}/>

        <div className='h-[50px] w-[50px] rounded-[50%] flex justify-center  items-center absolute right-[-5px] font-semibold top-[-5px] bg-[#9bbfe4]'>
            Sale!
        </div>
        </div>
        <div className='flex flex-col justify-between items-center h-[27%] '>
            <div className='font-semibold text-[20px]'>Cream Plaid Wristlet</div>
         <div className='flex gap-2 font-bold'>
         <div className='line-through text-[silver] '>₦70.00</div>
            <div className='text-[#434344d0]'>₦70.00</div>
         </div>
            <button className='h-[40px] border-[2px] w-[130px] border-[#9bbfe4] '>ADD TO CART</button>
        </div>
    </div>

  </div>
  )
}

export default Card