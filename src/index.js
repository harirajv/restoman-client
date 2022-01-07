import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
// import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
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
import * as serviceWorker from './serviceWorker';

// const mock = new MockAdapter(axios);

// mock.onGet('/dishes').reply(200, {
//   users: [{
//     id: 1,
//     image: 'https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-600w-535853269.jpg'
//   }]
// });
axios.interceptors.request.use(request => {
  const token = localStorage.getItem('token');
  if(token && (request.url.startsWith('http://localhost:3000/api') || request.url === 'http://localhost:3000/logout')) {
    request.headers.common.Authorization = token;
  }
  return request;
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  if(error.response.status == 401) {
    localStorage.clear();
    window.location.href = '/';
  }
  return Promise.reject(error);
});

function isLoggedIn() {
  return localStorage.getItem('token') !== null;
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login">
        {isLoggedIn()==true?<Redirect to="/"/> : <LoginPage/>}</Route>
      <Route exact path="/">
      {isLoggedIn()==true?<Home/> : <LoginPage/>}</Route>
      <Route exact path="/admin">
      {isLoggedIn()==true?<AdminComponent/> : <LoginPage/>}</Route>
      <Route exact path="/dishes">
      {isLoggedIn()==true?<Dishes/> : <LoginPage/>}
      </Route>
      <Route exact path="/dishes/:dishId">
      {isLoggedIn()==true?<DishDetails/> : <LoginPage/>}</Route>
      <Route exact path="/users">
      {isLoggedIn()==true?<Users/> : <LoginPage/>}</Route>
      <Route exact path="/dish/activation">
      {isLoggedIn()==true?<DishAvailability/> : <LoginPage/>}</Route>
      <Route exact path="/new_order">
      {isLoggedIn()==true?<NewOrder/> : <LoginPage/>}</Route>
      <Route exact path="/users">
      {isLoggedIn()==true?<Users/> : <LoginPage/>}</Route>
      <Route exact path="/users/:dishId">
      {isLoggedIn()==true?<UserDetails/> : <LoginPage/>}</Route>
      <Route exact path="/orders">
      {isLoggedIn()==true?<Orders/> : <LoginPage/>}
        </Route>
      <PrivateRoute exact path="/edit_dish/:dishId">
      {isLoggedIn()==true?<EditDish/> : <LoginPage/>}
      </PrivateRoute>
      <PrivateRoute exact path="/add_user">
      {isLoggedIn()==true?<AddUser/> : <LoginPage/>}
      </PrivateRoute>
      
    </Switch>
</BrowserRouter>,
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

serviceWorker.unregister();
