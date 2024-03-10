import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { productActionDetail } from '../redux/actions/productAction';
import { CgMathPlus,CgMathMinus } from "react-icons/cg";
import { productCart } from '../redux/actions/basketActon';


const Details = () => {
  const {id}=useParams();
  console.log("id",id);
  const dispatch = useDispatch();
  const {product}=useSelector(state => state.product);
  const [count, setcount] = useState(0);

  useEffect(() => {
    dispatch(productActionDetail(id))  
     
  }, [dispatch])

  const addCart =()=> {
    dispatch(productCart(id,count))
    dispatch({type:"DRAWER",payload:true})
  }
  console.log("product",product);

  return (
    <div className='w-full flex justify-center items-center p-3'>
      <img src={product?.image} alt="" className='w-1/3' />
      <div className='w-2/3'>
        <div> {product?.title}</div>
        <div> Category: {product?.category}</div>
        <div> {product?.description}</div>
        {/* <div> {product?.rating?.rate}</div> */}

        <div className='flex items-center'>
          <CgMathPlus size={30} onClick={()=>setcount(count => count+1)} className='cursor-pointer'/>
          <span className='text-xl'>{count} </span>
          <CgMathMinus size={30} className='cursor-pointer' onClick={()=>setcount(count => count+1)}/>
        </div>
        <button onClick={addCart} className='p-3 bg-orange-500 w-full text-center rounded-lg text-white'>SEPETE EKLE</button>
      </div>
    </div>
  )
}

export default Details