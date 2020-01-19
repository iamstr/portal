// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Input from "components/CustomInput/Input.js";
import FormDialog from "components/Dialog/UserDialog";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import SimpleSelect from "components/Select/Select";
import Snackbar from "components/Snackbar/Snackbar";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import React from "react";
const data = [
  { value: "Active", data: "Active" },
  { value: "Inactive", data: "Inactive" }
];
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
const useStyles = makeStyles(styles);
export default function NewBus() {
  const classes = useStyles();
  const [role, setRole] = React.useState(false);
  const [name, setName] = React.useState(false);
  const [status, setStatus] = React.useState();
  const [location, setLocation] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const inputLabel = React.useRef(null);

  const handleSubmit = () => {
    // let headers = new Headers();

    // headers.append("Content-Type", "application/json");
    // headers.append("Accept", "application/json");
    const dbData = new FormData();
    let formBody = [],
      formRequest = { name, location, status };
    dbData.append(name, name);
    dbData.append(status, status);
    dbData.append(location, location);
    console.log(formRequest);
    for (let property in formRequest) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(formRequest[property]);
      console.log("the property is ", property);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");
    console.log("this is the dbData ", formBody);
    fetch("http://801f9d0d.ngrok.io/new/branch", {
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
        setShow(true);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  const customRef = data => {
    setStatus(data);
  };
  const inputCustomRef = data => {
    setName(data);
  };

  return (
    <form onSubmit={() => handleSubmit()}>
      {show === true && (
        <SnackbarContent
          message="Name successfully added"
          color="info"
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
        />
      )}
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Branch</h4>
              <p className={classes.cardCategoryWhite}>
                Add Details of New Office
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Input
                    labelText="phone"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setName(ref);
                    }}
                    labeled="Branch Name"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Input
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setLocation(ref);
                    }}
                    labeled="Branch Location"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <SimpleSelect
                    options={data}
                    customRef={ref => customRef(ref)}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button
                color="primary"
                onClick={() => {
                  //setRole(true);
                  handleSubmit();
                  console.log(name, status, location);
                }}
              >
                Add New office
              </Button>
              {role === true && <FormDialog />}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </form>
  );
}
