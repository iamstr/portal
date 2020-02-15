/* eslint-disable no-prototype-builtins */
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import PropTypes from "prop-types";
import React from "react";
import "../../assets/css/styles.css";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();

  const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableBody>
          {tableData.map((bus, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                <TableCell className={classes.tableCell} key={key + 1}>
                  {bus.bus_id}
                </TableCell>
                <TableCell className={classes.tableCell} key={key + 2}>
                  {bus.bus_name}
                </TableCell>
                <TableCell className={classes.tableCell} key={key + 3}>
                  {bus.bus_plate_number}
                </TableCell>
                <TableCell className={classes.tableCell} key={key + 3}>
                  {bus.bus_seat_number}
                </TableCell>

                {bus.bus_status === "Active" ? (
                  <TableCell
                    className={classes.tableCell + " " + "bus--active"}
                    key={key + 5}
                  >
                    {bus.bus_status}
                  </TableCell>
                ) : (
                  <TableCell
                    className={classes.tableCell + " " + "bus--broke"}
                    key={key + 5}
                  >
                    Inactive
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string)
};
