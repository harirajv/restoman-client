import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router,Link,Route,Switch, Redirect} from "react-router-dom"
// import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { createHashHistory } from "history"
import AdminComponent from "./components/admin"
import {Dishes} from "./components/dish"
import DishDetails from "./components/dishinfo"
import Users from './components/user';
import DishAvailability from "./components/dish_availability"
import Home from "./components/home"
import { NewOrder } from './components/new_order';
import EditDish from "./components/edit_dish"
import Orders from "./components/orders"
import UserDetails from "./components/userinfo"
import LoginPage from "./components/login"
import AddUser from "./components/add_user"
const history = createHashHistory({
  basname: "",
  hashType: "slash"
});

// const mock = new MockAdapter(axios);

// mock.onGet('/dishes').reply(200, {
//   users: [{
//     id: 1,
//     image: 'https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-600w-535853269.jpg'
//   }]
// });
var is_logged_in = false;
if(localStorage.getItem('auth_token'))
{
  is_logged_in = true;
}
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/login">
        {is_logged_in==true?<Redirect to="/"/> : <LoginPage/>}</Route>
      <Route exact path="/">
      {is_logged_in==true?<Home/> : <LoginPage/>}</Route>
      <Route exact path="/admin">
      {is_logged_in==true?<AdminComponent/> : <LoginPage/>}</Route>
      <Route exact path="/dishes">
      {is_logged_in==true?<Dishes/> : <LoginPage/>}
      </Route>
      <Route exact path="/dishes/:dishId">
      {is_logged_in==true?<DishDetails/> : <LoginPage/>}</Route>
      <Route exact path="/users">
      {is_logged_in==true?<Users/> : <LoginPage/>}</Route>
      <Route exact path="/dish/activation">
      {is_logged_in==true?<DishAvailability/> : <LoginPage/>}</Route>
      <Route exact path="/new_order">
      {is_logged_in==true?<NewOrder/> : <LoginPage/>}</Route>
      <Route exact path="/users">
      {is_logged_in==true?<Users/> : <LoginPage/>}</Route>
      <Route exact path="/users/:dishId">
      {is_logged_in==true?<UserDetails/> : <LoginPage/>}</Route>
      <Route exact path="/orders">
      {is_logged_in==true?<Orders/> : <LoginPage/>}
        </Route>
      <PrivateRoute exact path="/edit_dish/:dishId">
      {is_logged_in==true?<EditDish/> : <LoginPage/>}
      </PrivateRoute>
      <PrivateRoute exact path="/add_user">
      {is_logged_in==true?<AddUser/> : <LoginPage/>}
      </PrivateRoute>
      
    </Switch>
</Router>,
  document.getElementById('root')
);

function PrivateRoute({ component:Component, ...rest }) {
  
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem("role")=='admin'?(<Component/>)
        : (
          <Home/>
        )
      }   
    />
  );
}
