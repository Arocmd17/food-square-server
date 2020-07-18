import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const MyCart = ()=>{
    const history = useHistory()
    const [data, setData] = useState([])
    let sn = 1
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
            // const newData = data.map(item =>{
            //     if(item._id==result._id){
            //         return result
            //     }else{
            //         return item
            //     }
            // })
            setData(result)
            alert('You have checkout sucessfully.')
            history.push("/")
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="card-details " >
            <p>Hello here </p>
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