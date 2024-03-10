import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../redux/actions/basketActon';


const Cart = () => {
    const dispatch = useDispatch();
    const {cart }=useSelector (state => state.cart )
    
    const deletePrdt =(id)=> {
      dispatch(removeCart(id))
    }

  return (
    <div className='w-1/4 h-full border fixed top-0 right-0 p-2 bg-white' >
        <div className='flex justify-between items-center'>
            <h1>SEPETİM </h1>
            <IoIosCloseCircleOutline onClick={()=>dispatch({type:"DRAWER",payload:false})} className='cursor-pointer' size={25} />
        </div>
        {cart.map((item,index)=> {
        <div key={index} className='h-28 flex justify-between items-center'>
          <img className="h-24" src={item.image} alt="" />
          <div className=' w-72'>
            <div className=''>
              <div className='font-bold text-sm'>{item.title} {item.quantity} </div>
              <div className='opacity-80 text-xs'> {item.description}</div>
              </div>

            </div>
            <div className='font-bold text-lg' >{item.price} </div>
            <div onClick={()=> deletePrdt(cart.id)} className='bg-red-500 w-12 p-1 text-center text-white rounded-md cursor-pointer'>SİL </div>

        </div>

        })}
    </div>
  )
}

export default Cart