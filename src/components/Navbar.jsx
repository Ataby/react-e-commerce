import React ,{useState,useEffect} from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { useDispatch,useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/searchAction';


const Navbar = () => {
    const [color, setcolor] = useState(false);
    const dispatch = useDispatch();
    const {cart  }=useSelector (state => state.cart )
    const [search, setsearch] = useState("")


   useEffect(() => {
    const root = document.querySelector("#root");
     if(color){
        root.style.backgroundColor="black";
        root.style.color="lightgray";
     }else {
        root.style.backgroundColor="lightgray";
        root.style.color="black";
     }
   
     
   }, [color])

   const searchPost =(e)=> {
    if(e.key === 'Enter' ){
        dispatch(searchAction(search))
    }
   }

  return (
    <div className='flex items-center justify-between border-2 px-2 h-28'>
        <div className='text-2xl tracking-wider'>LOGO</div>
        <div className='flex border-2 items-center'>
            
            <input type="text" placeholder='search' className='p-2 outline-none rounded-lg' value={search} onChange={((e)=> setsearch(e.target.value))} />
            <div className='relative p-2' onKeyPress={searchPost} onClick={()=>dispatch({type:"DRAWER",payload:true})}>
                <span className='bg-blue-200 absolute bottom-0' fontSize="" > {cart?.length} </span>
                <FiShoppingBag fontSize="32" className='cursor-pointer'/>
            </div>
            <div onClick={()=> setcolor(!color)}>
                {color ? <MdOutlineDarkMode fontSize="22" className='cursor-pointer'/> 
                : <IoMdMoon fontSize="22" className='cursor-pointer' /> }               
            </div>

        </div>
    </div>
  )
}

export default Navbar