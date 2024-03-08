import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';


const Card = () => {
    const dispatch = useDispatch();

  return (
    <div className='w-1/4 h-full border fixed top-0 right-0 p-2 bg-white' >
        <div className='flex justify-between items-center'>
            <h1>SEPETİM </h1>
            <IoIosCloseCircleOutline onClick={()=>dispatch({type:"DRAWER",payload:false})} className='cursor-pointer' size={25} />
        </div>

        <div className='h-28 flex justify-between items-center'>
          <img className="h-24" src="https://cdn05.e-bebek.com/mnresize/1600/1600/media/p/casual-goldfix-pro-i-size-isofixli-oto-koltugu-9-36-kg-76-150-cm_8681693001899_01.jpg" alt="" />
          <div className=' w-72'>
            <div className=''>
              <div className='font-bold text-sm'> Lorem ipsum dolor sit amet</div>
              <div className='opacity-80 text-xs'> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quas totam nulla blanditiis facilis sunt?</div>
              </div>

            </div>
            <div className='font-bold text-lg' >199.90 TL </div>

        </div>
    </div>
  )
}

export default Card