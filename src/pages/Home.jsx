import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {productsAction} from '../redux/actions/productAction';
import { searchAction } from '../redux/actions/searchAction';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const {products}= useSelector(state => state.products)
  const {search}= useSelector(state => state.search)

  useEffect(() => {
    dispatch(searchAction());
    dispatch(productsAction());
 
  }, [dispatch])
  
console.log("products:",products);
  return (
    <div className='flex flex-wrap justify-center night '>
      {search?.length >0 
      ?search?.map((prd)=>
        <ProductCard key={prd.id} prd={prd}/> )

      :products?.map((prd)=>
        <ProductCard key={prd.id} prd={prd}/>
      )}
    </div>
  )
}

export default Home