import React from 'react'
 

const ProductCard = ({prd}) => {
  return (
    <div className=' w-3/12 h-[400px] hover:border-2 rounded-lg m-2 p-2 flex-col items-center border-2 border-orange-500'>
        <div className='flex justify-center'>
        <img src={prd?.image} alt="img" className='h-52' onClick={()=> window.location = `detail/${prd.id}`}/>
        </div>
        
        <div className='text-center flex-wrap flex-col justify-items-end '>
            <div>
            <p className='font-bold h-12' >{(prd.title).substring(0,50)}</p>
            {/* <p className='opacity-80' >{(prd.description).substring(0,40)}</p> */}
            <p className='text-right p-3' >RATING: {prd?.rating?.rate} </p>
             
            </div>
            
            <div className='flex-col mt-3'>
                <button className='bg-orange-500 w-full roundend-lg text-white text-xl p-1'>SEPETE EKLE</button>
                <p className='font-bold text-2xl mb-1'>{prd.price} TL</p>
            </div>
            
        </div>
    </div>
  )
}

export default ProductCard;