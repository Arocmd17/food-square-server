import React, {useContext} from 'react'
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css'
import {UserContext} from '../App'
const NavBar = ()=>{
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const viewCategory = (category) =>{
       history.push(`/product-category/${category}`)
      
    }
    const signout =() =>{
      localStorage.clear(); 
      dispatch({type:"CLEAR"})
      history.push('/')
      M.toast({html: "You have signed out successfully", classes:"#1e88e5 blue darken-1"})
    }
    const mustSignin =()=>{
      if(!state){
        M.toast({html: "You must sign in", classes:"#c62828 red darken-3"})
      } 
    }
    const refreshPage =()=> {
      window.location.reload(false);
    }
    return(
      <div className="navbar-fixed header">
        <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">FOOD.com</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li key="1"><Link to="/mycart" onClick={()=>{mustSignin()}}
                   ><i className="material-icons">add_shopping_cart</i></Link></li>
                  <li key="2"><Link to="/Signin" >Sign In</Link></li>
                  <li key="3"><span className="loggout" onClick={()=>{signout()}} >Sign Out</span></li>
                  {/* <li key="4"><Link to={state? "/dashboard": "/signin"} onClick={()=>{mustSignin()}}>Admin</Link></li> */}
                  <li key="4"><Link to="/dashboard">Admin</Link></li>
              </ul>
            </div>
            <div className="category-route #4fc3f7 light-blue lighten-2">
              <Link to="/product-category-beverages" className="category-item">Beverages</Link>
              <Link to="/product-category-oil" className="category-item">Oil</Link>
              <Link to="/product-category-dairy"  className="category-item">Dairy</Link>
              <Link to="/product-category-produce"  className="category-item">Produce</Link>
              <Link to="/product-category-condiments"  className="category-item">Condiments</Link>
              <Link to="/product-category-bread"  className="category-item">Bread</Link>
            </div>
        </nav> 
          
      </div>
    )
}
export default NavBar;




