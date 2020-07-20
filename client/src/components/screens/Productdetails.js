import React, {useContext, useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {UserContext} from '../../App'
const Productdetails = ({match:{params:{productId}}})=>{
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`/product/${productId}`,{
            method:"get"
        }).then(res=>res.json())
        .then(result=>{
            console.log(result.foods)
            setData(result.foods)
        })
    },[])
    const addtoCart =(id) =>{
        fetch('/addtocart', {
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                foodId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            history.push("/mycart")
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="card-details " >
            <div className=" details-card-image waves-effect waves-block waves-light">
                <img src={data.picture} alt=""/>
                
            </div>
            <div className=" details-card-content">
                <h1 className="card-title activator red-text text-darken-4"><strong>{data.foodName}</strong></h1>
                <h2>Categogy: <a href="/">{data.category}</a></h2>
                <h3>Price: {data.price}</h3>
                <h3>Stock: {data.quantity}</h3>
                <p>Description: {data.description}</p>
                <i className="material-icons right #dd2c00 deep-orange accent-4" style={{fontSize:"80px"}}
                    onClick={()=>{state? addtoCart(data): history.push('/signin')}}>
                    add_shopping_cart
                </i>
            </div>
        </div>
    )
}
export default Productdetails