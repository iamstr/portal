import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import React from "react";

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    // backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    width: "100%"
  },
  item: { margin: 10, padding: 10 }
});

// Create Document Component
const PDF = props => (
  <Document>
    <Page size="A5" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.item}>
          <Text>Seat</Text>
        </View>
        <View style={styles.item}>
          <Text>Client Name</Text>
        </View>
        <View style={styles.item}>
          <Text>Payment Mode</Text>
        </View>
        <View style={styles.item}>
          <Text>Travel Date</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.item}>
          <Text>{props.data.seat}</Text>
        </View>
        <View style={styles.item}>
          <Text>{props.data.name}</Text>
        </View>
        <View style={styles.item}>
          <Text>{props.data.paid}</Text>
        </View>
        <View style={styles.item}>
          <Text>{props.data["travel Date"]}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

PDF.prototype = {
  data: PropTypes.object
};

export default PDF;
