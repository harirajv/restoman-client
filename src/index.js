import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router,Link,Route,Switch} from "react-router-dom"
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { createHashHistory } from "history"
import AdminComponent from "./components/admin"
import Dishes from "./components/dish"
import DishDetails from "./components/dishinfo"
import Users from './components/user';

const history = createHashHistory({
  basname: "",
  hashType: "slash"
});

const mock = new MockAdapter(axios);

mock.onGet('/users').reply(200, {
  users: [{
    dish: {
      id: 1,
      image: 'https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-600w-535853269.jpg'
    }
  }]
});

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/admin"><AdminComponent/></Route>
      <Route exact path="/dishes"><Dishes/></Route>
      <Route exact path="/dishes/:dishId"><DishDetails/></Route>
      <Route exact path="/users"><Users/></Route>
    </Switch>
</Router>,
  document.getElementById('root')
);

