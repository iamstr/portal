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
// @material-ui/icons
import AddIcon from "@material-ui/icons/Add";
import Ticket from "components/Ticket/Ticket";
const standardRoutes = [
  {
    path: "/bus/ticket",
    name: "Book Ticket",
    rtlName: "طباعة",
    icon: AddIcon,
    component: Ticket,
    layout: "/admin"
  }
];

export default standardRoutes;
