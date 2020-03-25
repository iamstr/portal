import Button from "@material-ui/core/Button";
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
import { Button as CustomButton } from "components/CustomButtons/Button";
import FormDialog from "components/Dialog/Dialog";
import GridContainer from "components/Grid/GridContainer.js";
import Seats from "components/Seats/Seats";
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
export default function SeatDialog() {
  const [open, setOpen] = React.useState(true);

  const [payment, setPayment] = React.useState(false);
  const [status, setStatus] = React.useState();
  const [download, setDownload] = React.useState();
  const [select, setSelect] = React.useState(false);
  const [pdf, setPdf] = React.useState();
  const classes = useStyles();
  const callbackFunction = childData => {
    setSelect(childData);
  };

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
        <DialogTitle id="form-dialog-title"> choose Seat</DialogTitle>
        <DialogContent>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Pick Seat Number</h4>
              <p className={classes.cardCategoryWhite}>
                Choose from the available seats
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <Seats parentCallback={callbackFunction} />
                <Seats parentCallback={callbackFunction} />
                <Seats parentCallback={callbackFunction} />
                <Seats parentCallback={callbackFunction} />
                <Seats parentCallback={callbackFunction} />
                <Seats parentCallback={callbackFunction} />
                <Seats parentCallback={callbackFunction} />
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
        </DialogContent>
        <DialogActions>
          <CustomButton onClick={handleClose} color="safari">
            Cancel
          </CustomButton>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
