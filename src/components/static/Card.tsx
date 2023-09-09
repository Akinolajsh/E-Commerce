import React, { useState } from 'react'
import bag from "../../assets/istockphoto-154417962-612x612-removebg-preview.png"
import { useSelector } from 'react-redux';
import { useProduct } from '../../hooks/useProduct';
const Card = () => {

const [state, setState]= useState<boolean>(false);

const [propsState, setPropsState] = useState<{}>({} as any);

const cart= useSelector((state:any)=> state.cart)



let myData: any = [];
let star: any = [];

const rand = (max: number, min:number)=>{
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

Array.from({length:5}, ()=>{
    const randNumb = (max: number, min:number)=>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 1; i <= randNumb(1,0); i++){
        myData.push("⭐")
    }

    star.push(myData.join(" "));
})

const {data, isLoading} = useProduct();

  return (
  <div className='flex flex-wrap justify-center'>
{
    isLoading ? (
        <div>Loading......</div>
    ) : (
        <div>
   {
    data?.map((props:any)=>(
        <div className='h-[500px] w-[320px] hover:shadow-md px-5 py-5 flex flex-col justify-between items-center rounded '>
        <div className='h-[60%] w-full object-cover bg-slate-100 relative'>
            <img src={props.image}/>

        <div className='h-[50px] w-[50px] rounded-[50%] flex justify-center  items-center absolute right-[-5px] font-semibold top-[-5px] bg-[#9bbfe4]'>
            Sale!
        </div>
        </div>
        <div className='flex flex-col justify-between items-center h-[27%] '>
            <div className='font-semibold text-[20px]'>{props.title}</div>
            <div className="flex items-center mt-2 justify-center w-[250px]">
                {star[rand(4, 0)]}
              </div>
         <div className='flex gap-2 font-bold'>
         <div className='line-through text-[silver] '>₦{props.review + rand(2500, 1200)}</div>
            <div className='text-[#434344d0]'>₦{props.review}</div>
         </div>
            <button className='h-[40px] border-[2px] w-[130px] border-[#9bbfe4] '>ADD TO CART</button>
        </div>
    </div>
    ))
   }
   </div>
    )
}

  </div>
  )
}

export default Card