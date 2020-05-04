// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import logo from "assets/img/safari_pass.jpeg";
import bgImage from "assets/img/sidebar-2.jpg";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes.js";
import standardRoutes from "standard_routes.js";

let ps;

const switchRoutes = (
  <>
    {localStorage.getItem("role") === "manager" ? (
      <Switch>
        {routes.map((prop, key) => {
          if (prop.layout === "/admin") {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          }
          return null;
        })}
      </Switch>
    ) : (
      <Switch>
        {standardRoutes.map((prop, key) => {
          if (prop.layout === "/admin") {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          }
          return null;
        })}
      </Switch>
    )}
  </>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  // styles

  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(localStorage.getItem("user"));
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = image => {
    setImage(image);
  };
  const handleColorClick = color => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    console.log(user);
    if (localStorage.getItem("user") === "undefined") {
      setIsLoggedIn(true);
    }
  }, [user]);
  React.useEffect(() => {
    console.log(user);
  }, []);
  React.useEffect(() => {
    console.log("this is the user storage", localStorage.getItem("user"));
    localStorage.setItem("user", localStorage.getItem("user"));
  }, [localStorage.getItem("role"), routes]);

  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (mainPanel) {
      if (navigator.platform.indexOf("Win") > -1) {
        ps = new PerfectScrollbar(mainPanel.current, {
          suppressScrollX: true,
          suppressScrollY: false
        });
        document.body.style.overflow = "hidden";
      }
      window.addEventListener("resize", resizeFunction);
      // Specify how to clean up after this effect:
      return function cleanup() {
        if (navigator.platform.indexOf("Win") > -1) {
          ps.destroy();
        }
        window.removeEventListener("resize", resizeFunction);
      };
    }
  }, [mainPanel]);

  return (
    <>
      {isLoggedIn && <Redirect to="/login" />}
      {localStorage.getItem("role") == "standard" ? (
        <Redirect to="/admin/bus/ticket" />
      ) : (
        <Redirect to="/admin/tickets/report" />
      )}
      <div className={classes.wrapper}>
        {localStorage.getItem("role") == "manager" ? (
          <Sidebar
            routes={routes}
            logoText={"Creative Tim"}
            logo={logo}
            image={image}
            handleDrawerToggle={handleDrawerToggle}
            open={mobileOpen}
            color={color}
            {...rest}
          />
        ) : (
          <Sidebar
            routes={standardRoutes}
            logoText={"Creative Tim"}
            logo={logo}
            image={image}
            handleDrawerToggle={handleDrawerToggle}
            open={mobileOpen}
            color={color}
            {...rest}
          />
        )}
        <div className={classes.mainPanel} ref={mainPanel}>
          <Navbar
            routes={routes}
            handleDrawerToggle={handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
        </div>
      </div>
    </>
  );
}
