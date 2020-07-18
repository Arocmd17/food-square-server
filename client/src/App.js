import React, {useEffect, createContext, useReducer, useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Link, useHistory} from 'react-router-dom'
// import logo from './logo.svg';
import NavBar from './components/NavBar'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin';
import {reducer, initialState} from './reducers/userReducer'
import './App.css';
import Signup from './components/screens/Signup';
import Productdetails from './components/screens/Productdetails'
import Dashboard from './components/screens/Admin'
import MyCart from './components/screens/MyCart'
export const UserContext =createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER", payload:user})
    }else{
      history.push('/signin')
    }
  },[])
  return(
    <Switch>
      <Route exact path='/'>
          <Home/>
      </Route>
      <Route exact path='/Signin'>
          <Signin/>
      </Route>
      <Route exact path='/Signup'>
          <Signup/>
      </Route>
      <Route exact path='/product/:productId' component={Productdetails}/>
      <Route exact path='/dashboard'>
          <Dashboard/>
      </Route>
      <Route exact path='/mycart'>
          <MyCart/>
      </Route>
    </Switch>
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <NavBar/>
        <Routing/>
      </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
