import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
//import { Link } from 'react-router-dom';


const Home = ()=>{
    const history = useHistory()
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/home',{
            method:"get"
        }).then(res=>res.json())
        .then(result=>{
            setData(result.foods)
        })
    },[])
    const viewDetails = (productId) =>{
        history.push(`/product/${productId}`)
    }
    return(
        <div className="home">
            <div className="category">
                {
                    data.map(item=>{
                        return(
                            
                                <div className="card " key={item._id}  onClick={()=>{viewDetails(item._id)}}>
                                    <div className="card-image waves-effect waves-block waves-light #e0f7fa cyan lighten-5">
                                        <img src={item.picture} alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <p className="card-title activator red-text text-darken-4"
                                                     onClick={()=>{viewDetails(item._id)}}>{item.foodName}</p>
                                        <p>Category: <a href="/">{item.category}</a></p>
                                        <p>Price: NGN{item.price}</p>
                                        <p>Description: {item.description}</p>
                                            <i className="material-icons left" onClick={()=>{viewDetails(item._id)}}
                                                style={{marginLeft:"100px"}}>
                                                add_shopping_cart
                                            </i>
                                        </div>
                                        <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">{item.foodName}<i className="material-icons right">close</i></span>
                                        <p>Our products are excelent.</p>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Home