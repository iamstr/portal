// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button";
import FormDialog from "components/Dialog/Dialog";
import Seats from "components/Seats/Seats";
import PropTypes from "prop-types";
import React from "react";
import PDF from "views/PDF/PDF";
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
export default function SeatDialog(props) {
  const [open, setOpen] = React.useState(true);

  const [payment, setPayment] = React.useState(false);
  const [status, setStatus] = React.useState();
  const [download, setDownload] = React.useState();
  const [select, setSelect] = React.useState(false);
  const [seatData, setSeatData] = React.useState([]);
  const [pdf, setPdf] = React.useState();
  const classes = useStyles();

  const handleSeatSelection = ({ booking_id, seat_id, date }) => {
    let formBody = [],
      formRequest = {
        booking_id,
        seat_id,
        date
      };

    for (let property in formRequest) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(formRequest[property]);

      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    fetch("http://localhost:5000/seat/selection", {
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
        localStorage("booking", contents.booking_id);

        // setMessage(contents.message);
        // setShow(true);
      })
      .catch(error => {});
  };

  const callbackFunction = childData => {
    setSelect(childData);
  };
  const fetchBuses = async busId => {
    busId = busId || 1;
    if (busId === 1) return [];
    console.log(busId);
    const urlBuses = await fetch("http://localhost:5000/site/seats/" + busId);
    const response = await urlBuses.json();
    setSeatData(response);
    console.log(response);
  };

  React.useEffect(() => {
    fetchBuses(props.busNumber);
  }, [props.busNumber]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {" "}
          choose Seat from Bus Name {props.busNumber}
        </DialogTitle>
        <DialogContent>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Pick Seat Number</h4>
              <p className={classes.cardCategoryWhite}>
                Choose from the available seats
              </p>
            </CardHeader>
            <CardBody>
              <Seats seatData={seatData} parentCallback={callbackFunction} />
            </CardBody>
            {select === true ? (
              <CardFooter>
                <Button
                  color="info"
                  onClick={() => {
                    (async () => {
                      const booking_id = await localStorage.getItem(
                          "booking_id"
                        ),
                        seat_id = await localStorage.getItem("seat_id"),
                        date = await localStorage.getItem("date");
                      console.log("here is the the ids ", {
                        booking_id,
                        seat_id,
                        date
                      });
                      await handleSeatSelection({ booking_id, seat_id, date });
                      /* await setPayment(!payment); */
                    })();
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="transparent">
            Cancel
          </Button>
          <Button onClick={handleClose} color="safari">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

SeatDialog.propTypes = {
  busNumber: PropTypes.string
};
