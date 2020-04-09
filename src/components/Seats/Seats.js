import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
const array = {
  color: "white",
  position: " relative",
  width: "35px",
  height: " 35px",
  border: "1px solid #344753",
  display: " inline-block",
  borderTopLeftRadius: " 2px",
  borderTopRightRadius: "2px",
  marginRight: " 10px",
  cursor: "pointer",
  lineHeight: "35px",
  textAlign: " center"
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: "2em",
    paddingRight: "2em",
    paddingBottom: "2em"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  seatBody: {
    background:
      "linear-gradient(196deg, rgba(255,0,99,1) 0%, rgba(247,0,21,1) 100%)",

    ...array
  },
  seatBodySelected: {
    background:
      "linear-gradient(180deg, rgba(92,92,92,1) 0%, rgba(0,0,0,1) 100%)",
    border: "3px solid black",
    ...array,
    cursor: "no-drop"
  },

  seatedBodyBooked: {
    background:
      "linear-gradient(196deg, rgba(107,255,0,1) 0%, rgba(0,247,228,1) 100%)",
    border: "3px solid green",
    ...array
  },
  bodyLeft: {
    width: "5px",
    height: "20px",
    right: "-4px",
    bottom: "-1px",
    borderTopRightRadius: " 2px",
    borderBottomRightRadius: " 2px",
    borderLeft: "none !important",
    position: "absolute",
    border: "5px solid #344753",
    zIndex: -1
  },
  bodyRight: {
    zIndex: -1,
    width: "15px",
    bottom: "-1px",
    borderTopRightRadius: " 2px",
    borderBottomRightRadius: " 2px",
    borderRight: "none !important",
    height: "20px",
    left: "-4px",
    position: "absolute",
    border: "5px solid #344753"
  },

  bodyBottom: {
    width: "40px",
    right: "-3px",
    bottom: "-4px",
    borderTopRightRadius: " 2px",
    borderBottomRightRadius: " 2px",
    borderTop: "none !important",
    position: "absolute",
    border: "5px solid #344753",
    height: "3px"
  }
}));
export default function Seats(props) {
  const classes = useStyles();
  const [select, setSelect] = useState(false);
  const sendData = data => {
    setSelect(!select);
    data = select;
    props.parentCallback(!data);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.seatData.map((seat, index) => {
          return (
            <Grid item xs={2} key={index}>
              <div
                className={classes.seatedBodyBooked}
                onClick={e => {
                  if (
                    e.currentTarget.classList.contains(classes.seatedBodyBooked)
                  ) {
                    e.currentTarget.classList.remove(classes.seatedBodyBooked);
                    e.currentTarget.classList.add(classes.seatBody);
                  } else {
                    e.currentTarget.classList.add(classes.seatedBodyBooked);
                    e.currentTarget.classList.remove(classes.seatBody);
                  }

                  sendData();
                }}
              >
                {seat.seat_name}
                <div className={classes.bodyLeft}></div>
                <div className={classes.bodyRight}></div>
                <div className={classes.bodyBottom}></div>
              </div>
            </Grid>
          );
        })}

        <Grid item xs={2}>
          <div
            className={
              select === true ? classes.seatBody : classes.seatedBodyBooked
            }
            onClick={() => {
              sendData();
            }}
          >
            A4
            <div className={classes.bodyLeft}></div>
            <div className={classes.bodyRight}></div>
            <div className={classes.bodyBottom}></div>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={2}>
          <div className={classes.seatBodySelected}>
            A4
            <div className={classes.bodyLeft}></div>
            <div className={classes.bodyRight}></div>
            <div className={classes.bodyBottom}></div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.seatedBodyBooked}>
            A4
            <div className={classes.bodyLeft}></div>
            <div className={classes.bodyRight}></div>
            <div className={classes.bodyBottom}></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Seats.prototype = {
  seatData: PropTypes.array,
  parentCallback: PropTypes.func
};
