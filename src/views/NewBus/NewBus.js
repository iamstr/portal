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
  { value: "Shuttle", data: "Shuttle" },
  { value: "Bus", data: "Bus" }
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
const snackbar = props => {
  return (
    <Snackbar
      message="Name successfully added"
      color="error"
      variant="warning"
    />
  );
};
const useStyles = makeStyles(styles);
export default function NewBus() {
  const classes = useStyles();
  const [role, setRole] = React.useState(false);
  const [status, setStatus] = React.useState("info");
  const [message, setMessage] = React.useState("successfull");
  const [name, setName] = React.useState(false);
  const [seat, setSeat] = React.useState();
  const [type, setType] = React.useState(false);
  const [plate, setPlate] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const inputLabel = React.useRef(null);

  const handleSubmit = company => {
    // let headers = new Headers();

    // headers.append("Content-Type", "application/json");
    // headers.append("Accept", "application/json");
    const dbData = new FormData();
    let formBody = [],
      formRequest = { name, type, seat, plate, company };
    dbData.append(name, name);
    dbData.append(seat, seat);
    dbData.append(type, type);
    dbData.append(plate, plate);
    dbData.append("company_id", company);
    console.log(formRequest);
    for (let property in formRequest) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(formRequest[property]);
      console.log("the property is ", property);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");
    console.log("this is the dbData ", formBody);
    fetch("http://localhost:5000/new/bus", {
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
        setStatus(contents.color);
        setMessage(contents.message);
        setShow(true);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const changeType = data => {
    setType(data);
  };

  return (
    <form onSubmit={() => handleSubmit()}>
      {show === true && (
        <SnackbarContent
          message={message}
          color={status}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
        />
      )}
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="safari">
              <h4 className={classes.cardTitleWhite}>Add Bus</h4>
              <p className={classes.cardCategoryWhite}>
                Add Details of New Bus
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Input
                    labelText="phone"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setName(ref);
                    }}
                    labeled="Bus Name"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Input
                    labelText="phone"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setSeat(ref);
                    }}
                    labeled="Number of Seats"
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Input
                    labelText="First Name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setPlate(ref);
                    }}
                    labeled="Bus Plate Number"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <SimpleSelect
                    options={data}
                    customRef={ref => changeType(ref)}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button
                color="safari"
                onClick={() => {
                  //setRole(true);
                  handleSubmit(localStorage.getItem("company"));
                  console.log(name, seat, type, plate);
                }}
              >
                Add New Bus
              </Button>
              {role === true && <FormDialog />}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </form>
  );
}
