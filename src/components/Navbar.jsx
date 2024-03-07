import React ,{useState,useEffect} from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { useDispatch } from 'react-redux';
 



const Navbar = () => {
    const [color, setcolor] = useState(false);
    const dispatch = useDispatch();

   useEffect(() => {
    const night = document.querySelector(".night");
     if(color){
        night.style.backgroundColor="black";
        night.style.color="lightgray";
     }else {
        night.style.backgroundColor="lightgray";
        night.style.color="black";
     }
   
     
   }, [color ])
   

  return (
    <div className='flex items-center justify-between border-2 px-2 h-28'>
        <div className='text-2xl tracking-wider'>LOGO</div>
        <div className='flex border-2 items-center'>
            
            <input type="text" placeholder='search' className='p-2 outline-none rounded-lg' />
            <div className='relative p-2' onClick={()=>dispatch({type:"DRAWER",payload:true})}>
                <span className='bg-blue-200 absolute bottom-0' fontSize="" > 4</span>
                <FiShoppingBag fontSize="32" className='cursor-pointer'/>
            </div>
            <div onClick={()=> setcolor(!color)}>
                {color ? <MdOutlineDarkMode fontSize="22" className='cursor-pointer'/> : <IoMdMoon fontSize="22" className='cursor-pointer' /> }               
            </div>

        </div>
    </div>
  )
}

export default Navbar