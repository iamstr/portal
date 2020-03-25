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
import FormDialog from "components/Dialog/Dialog";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
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
  const [to, setTo] = React.useState(false);
  const [departure, setDeparture] = React.useState(false);
  const [payment, setPayment] = React.useState(false);
  const [status, setStatus] = React.useState();
  const [download, setDownload] = React.useState();
  const [pdf, setPdf] = React.useState();

  const callbackFunction = childData => {
    setSelect(childData);
  };
  const classes = useStyles();
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
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setEmail(ref);
                    }}
                    labeled="Email Address"
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    id="company-disabled"
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
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setfirstName(ref);
                    }}
                    labeled="First Name"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setlastName(ref);
                    }}
                    labeled="Last Name"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Input
                    labelText=" From "
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setDeparture(ref);
                    }}
                    labeled="From "
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Input
                    labelText="To"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setTo(ref);
                    }}
                    labeled="To "
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Input
                    labelText="Phone Number"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputCustomRef={ref => {
                      setPhone(ref);
                    }}
                    labeled="Phone "
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <MaterialDatePickers />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <MaterialTimePicker />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="safari">Add Ticket Details</Button>
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
              <GridContainer container spacing={3}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <SecondCustomCard />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SecondCustomCard />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <SecondCustomCard />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SecondCustomCard />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <SecondCustomCard />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SecondCustomCard />
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </CardBody>
            {select === true ? (
              <CardFooter>
                <Button
                  color="primary"
                  onClick={() => {
                    setPayment(!payment);
                  }}
                >
                  Continue to Payment
                </Button>
              </CardFooter>
            ) : (
              ""
            )}
            {payment === true ? (
              <FormDialog
                pdfShow={() => {
                  setPdf(true);
                }}
              />
            ) : (
              ""
            )}

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
