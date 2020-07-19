import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Dashboard = () =>{
    const history = useHistory()
    const [foodName, setFoodName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState(undefined)
    let sn = 1
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/home',{
            method:"get"
        }).then(res=>res.json())
        .then(result=>{
            setData(result.foods)
        })
    },[])
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    })
    const uploadPic = ()=>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset","instagram-clone")
        data.append("cloud_name","arocmd9")
        fetch("https://api.cloudinary.com/v1_1/arocmd9/image/upload", {
            method:"post",
            body: data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const uploadFields = ()=>{
        fetch("/register-food",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                foodName,
                category,
                price,
                quantity,
                description,
                picture:url
            })
        }).then(res => res.json())
        .then(data =>{
            if(data.error){
                M.toast({html: data.error, classes:"#c62828 red darken-3"})
            }
            else{
              M.toast({html: data.message, classes:"#43a047 green darken-1"})  
              history.push('/')
            }
        }).catch(err =>{
            console.log(err)
        })
    }

    const PostData = () => {
        if(image){
            uploadPic()
        }else{
            uploadFields()
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, "");
    });
    return(
        <div className="stock-card"> 
            <h4><strong>Transaction Details</strong></h4>
            <hr/>
            <div className="content-stock-card">
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
                                        <td>{item.quantity}</td>
                                        <td>{item.price * item.quantity}</td>
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
            </div>
           
            <button data-target="modal1" className="btn modal-trigger">Enter New Product</button>
            <div id="modal1" className="modal">
                <div className="modal-content content-stock-card input-field">
                    <h4>Stock new food items</h4>
                    <input
                        type="text"
                        placeholder="Food item"
                        value = {foodName}
                        onChange= {(e)=>setFoodName(e.target.value)}
                        />
                    <input
                        type="text"
                        placeholder="Category"
                        value = {category}
                        onChange= {(e)=>setCategory(e.target.value)}
                        />
                    <input
                        type="number"
                        placeholder="Price"
                        value = {price}
                        onChange= {(e)=>setPrice(e.target.value)}
                        />
                    <input
                        type="number"
                        placeholder="Quantity"
                        value = {quantity}
                        onChange= {(e)=>setQuantity(e.target.value)}
                        />
                    <input
                        type="text"
                        placeholder="Description"
                        value = {description}
                        onChange= {(e)=>setDescription(e.target.value)}
                        />
                        <div className="file-field input-field">
                        <div className="btn">
                            <span>UPLOAD PIC</span>
                            <input type="file"
                            onChange={(e)=>setImage(e.target.files[0])}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn modal-close waves-effect waves-light #1e88e5 blue darken-1"
                        onClick={()=>PostData()}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard