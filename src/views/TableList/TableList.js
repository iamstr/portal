// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/BusTable.js";
import React from "react";

const styles = {
  cardCategoryWhite: {
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
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [buses, setBus] = React.useState([]);
  const fetchBuses = async () => {
    const urlBuses = await fetch("http://localhost:5000/new/bus");
    const response = await urlBuses.json();
    setBus(response);
  };
  // y

  React.useEffect(() => {
    fetchBuses();
  }, ["http://localhost:5000/new/bus"]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Bus Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is Details of all the buses
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "ID",
                "Bus Number",
                "Plate Number",
                "Status",
                "Seat Nmbr"
              ]}
              tableData={buses}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
