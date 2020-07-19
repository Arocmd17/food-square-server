import React, {useEffect, useState, createContext, useReducer, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css'
export const UserContext =createContext()

const MyCart = ()=>{
    const history = useHistory()
    const [data, setData] = useState([])
    const [userData, setUserData] = useState({})
    let sn = 1
    ///const {state, dispatch} = useContext(UserContext)
    // useEffect(()=>{
    //     
    // },[])
    useEffect(()=>{
        fetch("/mycart",{
            method:"get",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
        }).then(res=>res.json())
        .then(result=>{
            console.log(result.user.orders)
            setData(result.user.orders)
            setUserData(result.user)
            
        })
    },[])
    const checkout = (id)=>{
        fetch('/checkout', {
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
            M.toast({html: "You have checkout sucessfully.", classes:"#c62828 red darken-3"})
            history.push("/")
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="card-details " >
            <h4><strong>Customer Details</strong></h4>
            <hr/>
            <table>
                <thead>
                <tr>
                    <th>Customer Name:</th>
                    <th>
                        {userData?
                            userData.name
                        :
                            "--"
                        }
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr style={{height:"15px"}}>
                        <th>Customer Email:</th>
                        <th>
                            {userData?
                                userData.email
                            :
                                "--"
                            }
                        </th>
                    </tr>
                </tbody>
            </table>
            <br/>
            <h4><strong>Transaction Details</strong></h4>
            <hr/>
           <table>
                <thead>
                <tr>
                    <th>S//N</th>
                    <th>Designations</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>

                <tbody>
                    {data?
                        data.map(item=>{
                            return(
                                <tr key={sn++}>
                                    <td>{sn++}</td>
                                    <td>{item.foodName}</td>
                                    <td>{item.price}</td>
                                    <td>{1}</td>
                                    <td>{item.price * 1}</td>
                                </tr>
                            )
                            
                        })
                    :
                        <tr>
                            <td>1</td>
                            <td>None</td>
                            <td>None</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    }  
                </tbody>
                <tfoot>
                <tr>
                    <th></th>
                    <th>Total</th>
                    <th> --</th>
                    <th></th>
                    <th></th>
                </tr>
                </tfoot>
            </table>
            <span className="waves-effect waves-light btn #1e88e5 blue darken-1"
                onClick={()=>{checkout()}}>
                CHECKOUT
                </span>
        </div>
    )
}
export default MyCart