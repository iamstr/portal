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

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <TextField
        required
        id="outlined-basic"
        variant="outlined"
        label={labeled}
        value={value}
        ref={() => {
          inputCustomRef(value);
        }}
        onChange={handleChange}
      />
    </form>
  );
}

Input.prototype = {
  inputCustomRef: PropTypes.func,
  labeled: PropTypes.string
};
