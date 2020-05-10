// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import SimpleSelect from "components/Select/Select";
import Snackbar from "components/Snackbar/Snackbar";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import React from "react";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
const snackbar = () => {
  return <Snackbar message="Name successfully added" color="info" />;
};

const data = [
  { value: "manager", data: "manager" },
  { value: "standard", data: "standard" }
];

const useStyles = makeStyles(styles);
export default function NewBus() {
  const classes = useStyles();
  const [role, setRole] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [firstname, setFirstname] = React.useState(false);
  const [username, setUsername] = React.useState(false);
  const [lastname, setLastname] = React.useState(false);
  const [phone, setPhone] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const customRef = data => {
    setRole(data);
  };

  const handleSubmit = company => {
    // let headers = new Headers();

    // headers.append("Content-Type", "application/json");
    // headers.append("Accept", "application/json");
    const dbData = new FormData();
    let formBody = [],
      formRequest = {
        user_password: password,
        user_email: email,
        user_first: firstname,
        username,
        user_last: lastname,
        user_role: role,
        user_phone: phone,
        company_id: localStorage.getItem("company")
      };

    console.log(formRequest);
    for (let property in formRequest) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(formRequest[property]);
      console.log("the property is ", property);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");
    console.log("this is the dbData ", formBody);
    fetch("http://localhost:5000/user/create", {
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "post",
      body: formBody
    })
      .then(response => response.json())
      .then(contents => {
        console.log(contents);
        setFlag(contents.color);
        setMessage(contents.message);
        setShow(true);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <div>
      {show && (
        <SnackbarContent
          message={message}
          color={flag}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
        />
      )}
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="safari">
              <h4 className={classes.cardTitleWhite}>Book Client</h4>
              <p className={classes.cardCategoryWhite}>
                Add Details of New Office
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Password"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    getInput={value => {
                      setPassword(value);
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    getInput={value => {
                      setUsername(value);
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    getInput={value => {
                      setEmail(value);
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    getInput={value => {
                      setFirstname(value);
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    getInput={value => {
                      setLastname(value);
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="phone"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    getInput={value => {
                      setPhone(value);
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <SimpleSelect
                    options={data}
                    customRef={ref => customRef(ref)}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button
                color="safari"
                onClick={() => {
                  handleSubmit(localStorage.getItem("company"));
                  console.log({
                    password,
                    email,
                    firstname,
                    username,
                    lastname,
                    role,
                    phone,
                    company: localStorage.getItem("company")
                  });
                }}
              >
                Add Client
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
