import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { UserContext } from '../../App'
//import M from 'materialize-css'
const Signin  = () =>{
    const {/*state,*/ dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () => {
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
             //M.toast({html: "Invalid email", classes:"#c62828 red darken-3"})
             alert('Invalid email')
             return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.error){
                //M.toast({html: data.error, classes:"#c62828 red darken-3"})
                alert(data.error)
            }
            else{
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                //M.toast({html: "Signin successfully", classes:"#43a047 green darken-1"})
                alert("Signin successfully")  
                history.push('/')
            }
        }).catch(err =>{
            console.log(err)
        })
    }
    return(
        <div className="mycard"> 
            <div className="card auth-card input-field">
            <h2>Sign In</h2>
                <input
                    type="text"
                    placeholder="email"
                    value = {email}
                    onChange= {(e)=>setEmail(e.target.value)}
                    />
                <input
                    type="password"
                    placeholder="password"
                    value = {password}
                    onChange= {(e)=>setPassword(e.target.value)}
                    />
                 <button className="btn waves-effect waves-light #1e88e5 blue darken-1"
                 onClick={()=>PostData()}>
                     Login
                 </button>
                 <h5>
                    <Link to="/signup">Don't have an account?</Link>
                </h5>
            </div>
        </div>
    )
}
export default Signin