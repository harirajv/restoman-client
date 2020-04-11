import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router,Link,Route,Switch} from "react-router-dom"
import { createHashHistory } from "history"
import AdminComponent from "./components/admin"
import Dishes from "./components/dish"
import DishDetails from "./components/dishinfo"
const history = createHashHistory({
  basname: "",
  hashType: "slash"
});
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/admin"><AdminComponent/></Route>
      <Route exact path="/dishes"><Dishes/></Route>
      <Route exact path="/dishes/:dishId"><DishDetails/></Route>
    </Switch>
</Router>,
  document.getElementById('root')
);

