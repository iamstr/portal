import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SimpleSelect from "components/Select/Select";
import PropTypes from "prop-types";
import React from "react";
const data = [
  { value: 1, data: "Lipa Na Mpesa" },
  { value: 2, data: "Cash" },
  { value: 3, data: "Debit/Credit Card" }
];
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const [status, setStatus] = React.useState();
  const customRef = data => {
    setStatus(data);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose Payment provided by the user
          </DialogContentText>
          <SimpleSelect options={data} customRef={ref => customRef(ref)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.pdfShow} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

FormDialog.prototype = {
  pdfShow: PropTypes.func
};
