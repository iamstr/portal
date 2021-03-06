/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import "date-fns";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";

const MaterialTimePicker = props => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    moment(new Date(), "hh:mm ")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  props.theTime(selectedDate);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        variant="inline"
        inputVariant="outlined"
        margin="normal"
        id="time-picker"
        label="Time picker"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change time"
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default MaterialTimePicker;
MaterialTimePicker.propTypes = {
  theTime: PropTypes.func
};
