import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React from "react";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Settings() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <GridContainer>
        <GridItem xs={6} sm={6} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <MonetizationOnIcon />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Change Price
                  </Typography>
                </GridItem>
              </GridContainer>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={6} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <MonetizationOnIcon />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Change Price
                  </Typography>
                </GridItem>
              </GridContainer>
            </CardContent>
          </Card>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
