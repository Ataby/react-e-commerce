export const productCart =(id,quantity)=> async(dispatch,getState) => {

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    dispatch ({type:"ADD_CART", payload: {
        id: response.id,
        image: response.image,
        price: response.price,
        title: response.title,
        description: response.description,
        quantity: quantity
    }})
    const {cart:{cartItems}}=getState();
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
}

export const removeCart = (id)=>  (dispatch,getState) => {
    dispatch ({type:"REMOVE_CART", payload: id});

    const {cart:{cartItems}}=getState();
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
}