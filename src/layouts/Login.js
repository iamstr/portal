import "assets/css/login.css";
import React from "react";
import { Redirect, Route } from "react-router-dom";
export function LoginRoute(props) {
  return <Route component={Login} path="/login" />;
}
export function RedirectRoute(props) {
  return <Route render={() => <Redirect to="admin/bus/ticket" />} />;
}
const Login = function(props) {
  const [password, setPassword] = React.useState("njdnjdfnj");
  const [username, setUsername] = React.useState("njdnjdfnj");
  const [role, setRole] = React.useState();
  const [user, setUser] = React.useState();
  const [company, setCompany] = React.useState();
  const [message, setMessage] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);
  React.useEffect(() => {
    let mounted = true;
    if (user !== localStorage.getItem("user")) {
      if (mounted) {
        localStorage.setItem("user", user);
        localStorage.setItem("role", role);
        localStorage.setItem("company", company);
      }
    }
    return () => (mounted = false);
  }, [user, company, role]);
  const handleLogin = () => {
    let formBody = [],
      formRequest = {
        password,
        username
      };

    for (let property in formRequest) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(formRequest[property]);

      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    fetch("http://localhost:5000/user/login", {
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "post",
      body: formBody
    })
      .then(response => response.json())
      .then(contents => {
        console.log(contents.company);

        setFlag(contents.color);
        setMessage(contents.message);

        if (flag === "success") {
          setRole(contents.role);
          setCompany(contents.company);
          setUser(contents.user);
          setIsLogged(true);
        }

        // setShow(true);
      })
      .then(() => {})
      .catch(error => {});
  };
  return (
    <>
      <div className="row">
        <div className="column">
          <h2 className="logo">Column 1</h2>

          <div className="form">
            <div className="form-toggle"></div>
            <div className="form-panel one">
              <div className="form-header">
                <h1>Account Login</h1>
              </div>
              <div className="form-content">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required="required"
                      onChange={e => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required="required"
                      onChange={e => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-remember">
                      <input type="checkbox" />
                      Remember Me
                    </label>
                    <a className="form-recovery" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      onClick={e => {
                        e.preventDefault();
                        handleLogin();
                        console.log("this is the company id", company);
                        if (user) {
                          /* document.location.replace("/admin"); */
                        }
                      }}
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <h1>SAFARIPASS</h1>
          
        </div>
      </div>
      {localStorage.getItem("user") === "undefined" || "" ? (
        <RedirectRoute />
      ) : (
        ""
      )}
    </>
  );
};

export default Login;
