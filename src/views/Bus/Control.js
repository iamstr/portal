import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import React from "react";
import BusAnimation from "./BusAnimation";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  wrapper: {
    marginTop: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
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
}));

export default function Contol() {
  const classes = useStyles();
  const [status, setStatus] = React.useState("");
  const Departure = () => {
    return <Button color="info">Departure</Button>;
  };
  const Arrival = () => {
    return <Button color="safari">Arrived</Button>;
  };

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Branch Table</h4>
          <p className={classes.cardCategoryWhite}>
            Here is Details of all the Branches
          </p>
        </CardHeader>
        <CardBody className={classes.wrapper}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <p>Bus --1</p>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <p>NBO</p>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <p>MSA</p>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <BusAnimation />
              </Paper>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </CardBody>
      </Card>
    </div>
  );
}
