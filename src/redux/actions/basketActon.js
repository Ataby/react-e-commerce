export const productDetail =(id,quantity)=> async(dispatch) => {

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    dispatch ({type:"ADD_CART", payload: {
        id: response.id,
        image: response.image,
        price: response.price,
        description: response.description,
        quantity: quantity
    }})
}