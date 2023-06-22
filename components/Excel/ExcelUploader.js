import React, { useState } from "react";
// import { Button, makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import * as XLSX from 'xlsx';

// const useStyles = makeStyles((theme) => ({
//   input: {
//     display: "none",
//   },
// }));

const ExcelUploader = ({ onUpload }) => {
//   const classes = useStyles();
  const [excelFile, setExcelFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: false });
      setExcelFile(jsonData);
      onUpload && onUpload(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <input
        accept=".xlsx, .xls"
        // className={classes.input}
        id="excel-file"
        multiple={false}
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="excel-file">
        <Button variant="contained" color="primary" component="span">
          Upload Excel File
        </Button>
      </label>
    </>
  );
};

export default ExcelUploader;
