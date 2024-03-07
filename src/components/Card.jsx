import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';


const Card = () => {
    const dispatch = useDispatch();

  return (
    <div className='w-1/4 h-full border fixed top-0 right-0 p-2 bg-white' >
        <div className='flex justify-around items-center'>
            <IoIosCloseCircleOutline onClick={()=>dispatch({type:"DRAWER",payload:false})} className='cursor-pointer' size={25} />
            <h1>SEPETİM </h1>

        </div>
    </div>
  )
}

export default Card