import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = ()=>{
    return(
      <div className="navbar-fixed header">
        <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">FOOD.com</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li key="1"><Link to="/" ><i className="material-icons">add_shopping_cart</i></Link></li>
                  <li key="2"><Link to="sass.html" >Contact us</Link></li>
                  <li key="3"><Link to="/Signin" >Sign In</Link></li>
                  <li key="4"><Link to="/" >Sign Out</Link></li>
                  <li key="5"><Link to="/dashboard">Admin</Link></li>
              </ul>
            </div>
            <div class="category-route #4fc3f7 light-blue lighten-2">
              <span onClick={()=>{alert('Beverages')}} class="category-item">Beverages</span>
              <span onClick={()=>{alert('Meat/Fish')}}  class="category-item active">Meat/Fish</span>
              <span onClick={()=>{alert('yes')}}  class="category-item">Oil/Fatd</span>
              <span onClick={()=>{alert('yes')}}  class="category-item">Dairy/Eggs</span>
              <span onClick={()=>{alert('yes')}}  class="category-item">Produce</span>
              <span onClick={()=>{alert('yes')}}  class="category-item">Tinned/ Dried Produces</span>
              <span onClick={()=>{alert('yes')}}  class="category-item">Condiments</span>
            </div>
        </nav> 
          
      </div>
    )
}
export default NavBar;




