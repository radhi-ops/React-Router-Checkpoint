/* Import statements */
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login, { fakeAuth } from "./Login";
import Admin from "./Admin";
import Home from "./Home";
import Navbar from "./Navbar";
// import PrivateRoute from './PrivateRoute'

/* App component */
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default Main;
