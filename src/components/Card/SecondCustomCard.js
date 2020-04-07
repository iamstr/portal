import "assets/css/secondCardStyles.css";
import BusImage from "assets/img/bus-80.png";
import Button from "components/CustomButtons/Button";
import SeatDialog from "components/Dialog/SeatDialog";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

export default function Card(props) {
  let key = 0;
  const { busInfo } = props;
  const [seat, setSeat] = React.useState(false);
  const [value, setValue] = React.useState("");
  const refContainer = React.useRef([]);

  useEffect(() => {}, [refContainer]);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <GridContainer>
      {busInfo.map((bus, index) => {
        return (
          <GridItem xs={12} sm={12} md={6} key={index}>
            <article className=" grow second-card ">
              <img alt="bus icon" src={BusImage} className="card-img" />
              <div className="info-card">
                <h6 className="info-header">Bus Name/No</h6>
                <p
                  className="info-desc"
                  data-bus-number={bus.busName}
                  ref={refContainer}
                >
                  {bus.busName}
                </p>
              </div>

              <Button
                color="safari"
                value={bus.busName}
                onClick={(e) => {
                  setSeat(!seat);

                  e.preventDefault();
                  (async () => {
                    let buttonValue = await e.currentTarget.value;
                    setValue(await buttonValue);
                  })();
                }}
              >
                Select Bus {bus.busName}
              </Button>
            </article>
          </GridItem>
        );
      })}

      {seat && <SeatDialog busNumber={value} />}
    </GridContainer>
  );
}
Card.propTypes = {
  busInfo: PropTypes.array
};
