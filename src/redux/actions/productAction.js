 

export const productsAction =()=> async(dispatch) => {

    const response = await fetch('https://fakestoreapi.com/products').then(res=>res.json())
    
    dispatch ({type:"GET_PRODUCTS", payload: response})
}

export const productDetail =(id)=> async(dispatch) => {

    const response = await fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json())
    dispatch ({type:"GET_DETAILS", payload: response})
}
  