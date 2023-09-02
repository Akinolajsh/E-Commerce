import { AiFillStar } from 'react-icons/ai';

 interface CardInt {
    watchImg: string;
    rating: string;
    watchName: string;
    price: string;
}

const Card : React.FC<CardInt> = ({watchImg, rating, watchName, price}) => {
  return (
    <div className="w-[240px] h-[300px] shadow-xl flex flex-col items-center font-roboto rounded relative">

        <div className="w-[95%] h-[65%] bg-gray-200 mt-[6px] rounded flex justify-center items-center">
            <img src={watchImg} alt="product" className=' w-[80%]' />
        </div>

        <div className="w-[95%] mt-[10px]">
            <div className='bg-gray-200 w-[50px] h-[25px] flex items-center rounded justify-center mb-[5px]'>
                <div className='text-orange-500 text-[17px] mr-[4px]'>
                    <AiFillStar />
                </div>
                <h5 className='text-[14px] font-bold '>{ rating } </h5>
            </div>
            
            <h4 className='text-blue-500 font-medium text-[18px]'>{ watchName } </h4>

            <h4 className='text-gray-300 font-bold'>{ price }</h4>

        </div>

        <div className='absolute bg-blue-500 w-[60px] h-[30px] right-0 bottom-0 rounded-tl-full rounded-br flex justify-center items-center text-[25px] font-bold text-white cursor-pointer hover:bg-black transition-all ease-in-out duration-1000'>+</div>

    </div>
  )
}

export default Card