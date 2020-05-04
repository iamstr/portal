/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import "assets/css/material-dashboard-react.css?v=1.8.0";
import { createBrowserHistory } from "history";
// core components
import Admin from "layouts/Admin.js";
import Login from "layouts/Login";
import RTL from "layouts/RTL.js";
import React from "react";
import ReactDOM from "react-dom";
import { Redirect, Route, Router, Switch } from "react-router-dom";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/login" />
      <Route path="/rtl" component={RTL} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
