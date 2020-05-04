import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React from "react";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));
export default function Input(props) {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { inputCustomRef, labeled } = props;
  const [value, setValue] = React.useState();

  const handleChange = event => {
    setValue(event.target.value);
  };
  const { id, error } = props;
  return (
    <div className={classes.root}>
      <TextField
        required
        error={
          id === undefined ? false : error[id] === undefined ? true : false
        }
        id={id || "outlined-basic"}
        variant="outlined"
        label={labeled}
        value={value}
        ref={() => {
          inputCustomRef(value);
        }}
        onChange={handleChange}
      />
    </div>
  );
}

Input.prototype = {
  inputCustomRef: PropTypes.func,
  labeled: PropTypes.string,
  id: PropTypes.string
};
