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
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import BusinessIcon from "@material-ui/icons/Business";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import PersonIcon from "@material-ui/icons/Person";
import RestoreIcon from "@material-ui/icons/Restore";
import SettingsIcon from "@material-ui/icons/Settings";
import Ticket from "components/Ticket/Ticket";
import Control from "views/Bus/Control";
import Branch from "views/Business/Branch";
import Business from "views/Business/Business";
import Client from "views/Client/Client";
import NewBus from "views/NewBus/NewBus";
import Reports from "views/Reports/Reports";
import Settings from "views/Settings/Settings";
import TableList from "views/TableList/TableList";
const dashboardRoutes = [
  {
    path: "/table",
    name: "Bus List",
    rtlName: "قائمة الجدول",
    icon: DirectionsBusIcon,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/manage/users",
    name: "Manage Users",
    rtlName: "قائمة الجدول",
    icon: PersonIcon,
    component: Client,
    layout: "/admin"
  },
  {
    path: "/manage/sites",
    name: "List Branches",
    rtlName: "قائمة الجدول",
    icon: BusinessIcon,
    component: Business,
    layout: "/admin"
  },

  {
    path: "/bus/new",
    name: "Add Bus",
    rtlName: "طباعة",
    icon: AddIcon,
    component: NewBus,
    layout: "/admin"
  },
  {
    path: "/bus/ticket",
    name: "Book Ticket",
    rtlName: "طباعة",
    icon: AddIcon,
    component: Ticket,
    layout: "/admin"
  },
  {
    path: "/bus/control",
    name: "Bus Control",
    rtlName: "طباعة",
    icon: AirportShuttleIcon,
    component: Control,
    layout: "/admin"
  },
  {
    path: "/tickets/report",
    name: "Reports",
    rtlName: "طباعة",
    icon: ConfirmationNumberIcon,
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/manage/branch/add",
    name: "Add New Branch",
    rtlName: "طباعة",
    icon: AddIcon,
    component: Branch,
    layout: "/admin"
  },
  {
    path: "/manage/branch/add",
    name: "Restore Ticket",
    rtlName: "طباعة",
    icon: RestoreIcon,
    component: Branch,
    layout: "/admin"
  },
  {
    path: "/setting",
    name: "Settings",
    rtlName: "طباعة",
    icon: SettingsIcon,
    component: Settings,
    layout: "/admin"
  }
];

export default dashboardRoutes;
