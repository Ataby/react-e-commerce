export const searchAction =(keyword)=> async(dispatch) => {

    const response = await fetch('https://fakestoreapi.com/products').then(res=>res.json())    
    dispatch ({type:"SEARCH", payload: response.filter((res)=> res.title.includes(keyword) || res.category.includes(keyword)) })
}