import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Monthly from "./Monthly";
import "./report.css";
import Weekly from "./Weekly";

const useStyles = makeStyles(theme => ({
  cardCategoryWhite: {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    table: {
      display: "flex",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    },
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
}));

export default function Reports() {
  const classes = useStyles();

  const [report, setReport] = React.useState("Monthly");

  const handler = event => {
    const handle = event === "Monthly" || event === "Weekly" ? event : "";
    handle === "" ? alert("please click on the button") : setReport(event);
    console.log(event.target.value);
  };

  const TypeReport = props => {
    const Returns = report === "Monthly" ? <Monthly /> : <Weekly />;
    return Returns;
  };
  return (
    <div>
      <div className={classes.root}>
        <ButtonGroup
          variant="contained"
          color="info"
          aria-label="contained info button group"
        >
          <Button
            onClick={e => {
              handler(e);
            }}
            value="Weekly"
          >
            Weekly
          </Button>
          <Button
            onClick={e => {
              handler(e);
            }}
            value="Monthly"
          >
            Monthly
          </Button>
        </ButtonGroup>
      </div>
      <TypeReport />
    </div>
  );
}
