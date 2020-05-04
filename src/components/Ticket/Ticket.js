// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import SecondCustomCard from "components/Card/SecondCustomCard.js";
import Button from "components/CustomButtons/Button.js";
import MaterialDatePickers from "components/CustomDate/CustomDate.js";
import MaterialTimePicker from "components/CustomDate/CustomTime.js";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import moment from "moment";
import React from "react";
import PDF from "views/PDF/PDF";
import "../../assets/css/styles.css";
import Input from "../CustomInput/Input.js";
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

const useStyles = makeStyles(styles);
export default function NewBus() {
  const [ID, setID] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [firstName, setfirstName] = React.useState(false);
  const [lastName, setlastName] = React.useState(false);
  const [phone, setPhone] = React.useState(false);
  const [select, setSelect] = React.useState(false);
  const [errorIndex, setErrorIndex] = React.useState(0);
  const [error, setError] = React.useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    departure: false,
    ID: false,
    to: false,
    travelDate: false
  });
  const [to, setTo] = React.useState(false);
  const [theDateTravel, setTheDateTravel] = React.useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [theTimeTravel, setTheTimeTravel] = React.useState(
    moment(new Date()).format("HH:mm")
  );

  const [flag, setFlag] = React.useState("info");
  const [disabled, setDisabled] = React.useState(true);
  const [departure, setDeparture] = React.useState(false);
  const [payment, setPayment] = React.useState(false);

  const [busData, setBusData] = React.useState([]);
  const [pdf, setPdf] = React.useState();

  const theDateData = childData => {
    setTheDateTravel(childData);
  };
  const theTimeData = childData => {
    setTheTimeTravel(childData);
  };
  React.useEffect(() => {
    localStorage.setItem(
      "date",
      moment(theDateTravel).format("YYYY-MM-DD ") +
        moment(theTimeTravel).format("HH:mm")
    );
    console.log(localStorage.getItem("date"));
  }, [theTimeTravel, theDateTravel]);
  const classes = useStyles();
  const fetchBuses = async () => {
    const urlBuses = await fetch(
      "http://localhost:5000/new/bus/" + localStorage.getItem("company")
    );
    const response = await urlBuses.json();
    setBusData(response);
  };
  // y

  React.useEffect(() => {
    fetchBuses();
  }, [busData]);
  React.useEffect(() => {}, [disabled]);

  const handleSubmit = (travelDate, user) => {
    let formBody = [],
      formRequest = {
        firstName,
        lastName,
        phone,
        email,
        departure,
        ID,
        to,
        travelDate,
        user
      };

    for (let property in formRequest) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(formRequest[property]);

      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    fetch("http://localhost:5000/bus/ticket", {
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
        localStorage.setItem("booking_id", contents.booking_id);
        setFlag(contents.color);
        // setMessage(contents.message);
        // setShow(true);
      })
      .catch(error => {});
  };

  return (
    <div>
      <GridContainer container spacing={3}>
        <GridItem xs={12} sm={12} md={7}>
          <Card>
            <CardHeader color="safari">
              <h4 className={classes.cardTitleWhite}>Book Ticket</h4>
              <p className={classes.cardCategoryWhite}>
                Add Details of The client
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    error={error}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setEmail(ref);
                    }}
                    labeled="Email Address"
                    id="email"
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    id="ID"
                    error={error}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: false
                    }}
                    inputCustomRef={ref => {
                      setID(ref);
                    }}
                    labeled="ID"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    labelText="First Name"
                    error={error}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setfirstName(ref);
                    }}
                    labeled="First Name"
                    id="firstName"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    labelText="Last Name"
                    error={error}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setlastName(ref);
                    }}
                    labeled="Last Name"
                    id="lastName"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Input
                    labelText=" departure "
                    error={error}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setDeparture(ref);
                    }}
                    labeled="From "
                    id="departure"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Input
                    labelText="To"
                    error={error}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setTo(ref);
                    }}
                    labeled="To "
                    id="to"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Input
                    labelText="Phone Number"
                    error={error}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setPhone(ref);
                    }}
                    labeled="Phone "
                    id="phone"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <MaterialDatePickers theDate={theDateData} />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <MaterialTimePicker theTime={theTimeData} />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button
                color="safari"
                onClick={() => {
                  let time =
                    moment(theDateTravel).format("YYYY-MM-DD ") +
                    moment(theTimeTravel).format("HH:mm");

                  setError({
                    firstName,
                    lastName,
                    phone,
                    email,
                    departure,
                    ID,
                    to
                  });

                  const even = element => element === "" || undefined;

                  if (
                    firstName == "" ||
                    firstName == undefined ||
                    lastName == "" ||
                    lastName == undefined ||
                    phone == "" ||
                    phone == undefined ||
                    email == "" ||
                    email == undefined ||
                    departure == "" ||
                    departure == undefined ||
                    ID == "" ||
                    ID == undefined ||
                    to == "" ||
                    to == undefined
                  ) {
                    setDisabled(true);
                  } else {
                    setDisabled(false);
                  }

                  /* localStorage.setItem("travel", time) */
                  const user = localStorage.getItem("user");
                  console.log(localStorage.getItem("date"));
                  handleSubmit(time, user);
                }}
              >
                Add Ticket Details
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={5}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Pick Seat Number</h4>
              <p className={classes.cardCategoryWhite}>
                Choose from the available seats
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <SecondCustomCard busInfo={busData} disabled={disabled} />
              </GridContainer>
            </CardBody>
            {select && (
              <CardFooter>
                <Button color="primary" onClick={() => {}}>
                  Continue to Payment
                </Button>
              </CardFooter>
            )}
            {/* {payment === true ? (
              <FormDialog
                pdfShow={() => {
                  setPdf(true);
                }}
              />
            ) : (
              ""
            )} */}

            {pdf && (
              <PDFDownloadLink
                document={
                  <PDF
                    data={{
                      seat: "A20",
                      name: "abdisatar mohamed",
                      paid: "mpesa",
                      "travel Date": "20/01/20"
                    }}
                  />
                }
                fileName="ticket.pdf"
                style={{
                  textDecoration: "none",
                  padding: "10px",
                  color: "#4a4a4a",
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #4a4a4a"
                }}
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "download here"
                }
              </PDFDownloadLink>
            )}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
