import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import   {productsAction}   from '../redux/actions/productAction';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const {products}= useSelector(state => state.products)

  useEffect(() => {
    dispatch(productsAction());
 
  }, [dispatch])
  
console.log("products:",products);
  return (
    <div className='flex flex-wrap justify-center  '>
      {products?.map((prd)=>
        <ProductCard key={prd.id} prd={prd}/>
      )}
    </div>
  )
}

export default Home