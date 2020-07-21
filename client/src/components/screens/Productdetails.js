import React, {useContext, useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {UserContext} from '../../App';
import ResizeImage from 'react-resize-image'
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
        <div className="card " style={{margin:"70px 25%", width:"450px", height:"500px"}}>
            <div className="card-image waves-effect waves-block waves-light #e0f7fa cyan lighten-5"
                    style={{width:"auto", height:"300px"}}
                    >
                <img src={data.picture} alt=""/>
            </div>
            <div className="card-content">
                <div style={{width:"50%", height:"150px", float:"left", fontSize:"20px"}}>
                    <p className="card-title activator red-text text-darken-4"><strong>{data.foodName}</strong></p>
                    <p>Category: <strong>{data.category}</strong></p>
                    <p>Price: NGN{data.price}</p>
                    <p>Description: {data.description}</p>
                    <p>Stock: <span style={{fontSize:"20px"}}><strong>{data.quantity}</strong></span></p>
                </div>
                <div style={{width:"50%", height:"150px", float:"left", padding:"10%"}}>
                        <a class="waves-effect waves-light btn #ff5722 deep-orange"
                            onClick={()=>{state? addtoCart(data): history.push('/signin')}}
                        >Add to Cart</a>
                </div>
                
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{data.foodName}<i className="material-icons right">close</i></span>
                <p>Our products are excelent.</p>
            </div>
        </div>
        // <div className="card-details " >
        //     <div className=" details-card-image waves-effect waves-block waves-light">
        //         <img src={data.picture} alt={data.foodName}/>
                
        //     </div>
        //     <div className=" details-card-content">
        //         <h1 className="card-title activator red-text text-darken-4"><strong>{data.foodName}</strong></h1>
        //         <h2>Categogy: <a href="/">{data.category}</a></h2>
        //         <h3>Price: {data.price}</h3>
        //         <h3>Stock: {data.quantity}</h3>
        //         <p>Description: {data.description}</p>
        //         <i className="material-icons right #dd2c00 deep-orange accent-4" style={{fontSize:"80px"}}
        //             onClick={()=>{state? addtoCart(data): history.push('/signin')}}>
        //             add_shopping_cart
        //         </i>
        //     </div>
        // </div>
    )
}
export default Productdetails