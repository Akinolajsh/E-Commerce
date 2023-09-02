// import { useState } from 'react'
import { useState } from "react"
// import watch from "../../assets/watches/watch1.png"
// import watch2 from "../../assets/watches/watch12-F.png"
import bag from "../../assets/Product13_600x.webp"
import bag2 from "../../assets/Product12_5e426ffc-31d0-4476-89ae-9113a1fe8081_600x.webp"

const TopProducts = () => {

    const [show, setShow] = useState(false)

    const reveal = () => {
        setShow(!show)
    }


  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center overflow-hidden transition-all ease-in-out">

        <div className="w-[90%] h-[90%] flex flex-col items-center">

            <h2 className="text-[20px] text-black font-bold text-center animate-bounce border-b-2 border-t-2 border-slate-500 mt-[30px] md">TOP PRODUCTS
            </h2>

            <div className="w-[270px]  bg-color1 flex justify-around items-center text-heroBg h-[50px] mt-[20px] mb-[30px] rounded-3xl bg-slate-100">
                <h3 className="text-[18px] font-bold font-roboto cursor-pointer text-gray-500 hover:text-blue-500" onClick={reveal}>KLASSIK BAG</h3>

                <h3 className="text-[18px] font-bold font-roboto cursor-pointer text-gray-500 hover:text-blue-500" onClick={reveal}>KRITTY BAG
                </h3>
            </div>

            {
                show ?

                (<div className="w-[70%] flex-col md:flex-row md:flex justify-between items-center font-roboto transition-all ease-in-out duration-1000 text-heroBg">

                  <div className='md:w-[220px] w-[250px] text-black flex md:flex-col' >
                      <div className=''>
                        <h4 className='md:text-[18px] text-[16px] font-bold md:text-right text-left'>FSHION STATEMENTS</h4>
                        <h6 className='md:text-[14px] text-[11px] text-roboto mb-[15px] md:text-right text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                      </div>
                      <div className=''>
                        <h4 className='md:text-[18px] text-[16px] font-bold md:text-right text-right '>UNMATCHED QUALITY</h4>
                        <h6 className='md:text-[14px] text-[11px] text-roboto mb-[15px] md:text-right text-right text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!
                        </h6>
                      </div>
                      <div className=' hidden md:block'>
                        <h4 className='text-[18px] font-bold text-right hidden md:block'>SLEEK DESIGN</h4>
                        <h6 className='text-[14px] text-roboto mb-[15px] text-right text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci! </h6>
                      </div>
                  </div>

                  <img src={bag} alt="" className="md:w-[190px] w-[200px] ml-[50px]  transition-all ease-in-out duration-500 md:ml-[100px] md:mr-[100px] "/>

                  <div className='md:w-[220px] w-[250px]   text-black flex md:flex-col'>
                      <div className='hidden md:block'>
                        <h4 className='text-[18px] font-bold '>CLASSIC APPEAL</h4>
                        <h6 className='text-[14px] text-roboto mb-[15px] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                      </div>
                      <div className=''>
                        <h4 className='md:text-[18px] text-[16px] font-bold '>EXQUISITE STYLE</h4>
                        <h6 className='md:text-[14px] text-[11px] text-roboto mb-[15px] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                      </div>
                      <div className=''>
                        <h4 className='md:text-[18px] text-[16px] font-bold text-right md:text-left '>LUXURIOUS ELEGANCE</h4>
                        <h6 className='md:text-[14px] text-[11px] text-roboto mb-[15px] text-right md:text-left text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                      </div>
                  </div>

                </div>)

                :

                (
                <div className="w-[70%]fle flex-col md:flex-row md:flex justify-between items-center font-roboto transition-all ease-in-out duration-1000 text-heroBg">

                  <div className='md:w-[220px] w-[250px] text-black flex md:flex-col ' >
                      <div className=''>
                        <h4 className='md:text-[18px] text-[16px] font-bold md:text-right text-left'>FASHION STATEMENTS</h4>
                        <h6 className='md:text-[14px] text-[11px] text-roboto mb-[15px] md:text-right text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                      </div>
                      <div className=''>
                        <h4 className='md:text-[18px] text-[16px] font-bold md:text-right text-right '>UNMATCHED QUALITY</h4>
                        <h6 className='md:text-[14px] text-[11px] text-roboto mb-[15px] md:text-right text-right text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!
                        </h6>
                      </div>
                      <div className=' hidden md:block'>
                        <h4 className='text-[18px] font-bold text-right hidden md:block'>SLEEK DESIGN</h4>
                        <h6 className='text-[14px] text-roboto mb-[15px] text-right text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci! </h6>
                      </div>
                  </div>

                  <img src={bag2} alt="" className="md:w-[350px] w-[200px] ml-[20px]  transition-all ease-in-out duration-500 md:ml-[20px] md:mr-[20px]"/>

                  <div className='md:w-[220px] w-[250px]   text-black flex md:flex-col'>
                      <div className='hidden md:block'>
                        <h4 className='text-[18px] font-bold '>CLASSIC APPEAL</h4>
                        <h6 className='text-[14px] text-roboto mb-[15px] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                      </div>
                      <div className=''>
                        <h4 className='md:text-[18px] text-[16px] font-bold '>EXQUISITE STYLE</h4>
                        <h6 className='md:text-[14px] text-[11px] text-roboto mb-[15px] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                      </div>
                      <div className=''>
                        <h4 className='md:text-[18px] text-[16px] font-bold text-right md:text-left '>LUXURIOUS ELEGANCE</h4>
                        <h6 className='md:text-[14px] text-[11px] text-roboto mb-[15px] text-right md:text-left text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                      </div>
                  </div>

                </div>)
            }

            <button className='w-[200px] h-[40px] mt-[30px] bg-black rounded-3xl text-white font-bold cursor-pointer animate-pulse mb-[30px] md:mb-0'>SHOP NOW</button>

        </div>

    </div>
  )
}

export default TopProducts