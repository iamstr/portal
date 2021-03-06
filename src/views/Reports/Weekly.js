import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import React from "react";

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

export default function Weekly() {
  const classes = useStyles();
  return (
    <div className={classes.table}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                This is the Weekly report
              </h4>
              <p className={classes.cardCategoryWhite}>
                Here is Details of all the tickets sold
              </p>
            </CardHeader>
            <CardBody className={classes.table}>
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "Week", "Tickets Sold"]}
                tableData={[
                  ["1", "2", "7"],
                  ["2", "3", "17"],
                  ["3", "4", "117"],
                  ["4", "5", "27"],
                  ["5", "6", "70"],
                  ["6", "7", "97"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
