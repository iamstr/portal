import ReactPDF from "@react-pdf/renderer";
import React from "react";
import PDF from "../PDF/PDF";

const PDFPrint = ReactPDF.render(
  <PDF />,
  `${__dirname}/public/pdfs/example.pdf`
);

export default PDFPrint;
