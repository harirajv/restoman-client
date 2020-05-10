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

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/admin"><AdminComponent/></Route>
      <Route exact path="/dishes" component={Dishes}></Route>
      <Route exact path="/dishes/:dishId"><DishDetails/></Route>
      <Route exact path="/users"><Users/></Route>
      <Route exact path="/dish/activation"><DishAvailability/></Route>
      <Route exact path="/new_order"><NewOrder/></Route>
      <Route exact path="/users"><Users/></Route>
      <Route exact path="/users/:dishId"><UserDetails/></Route>
      <Route exact path="/orders"><Orders/></Route>
      <PrivateRoute exact path="/edit_dish/:dishId" component={EditDish}></PrivateRoute>
      
    </Switch>
</Router>,
  document.getElementById('root')
);

function PrivateRoute({ component:Component, ...rest }) {
  console.log(localStorage.getItem('role'))
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
