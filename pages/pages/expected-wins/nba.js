import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import styles from "@/styles/PageTitle.module.css";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ExpectedWinsOverview from "@/components/StatOverviews/expectedWinsOverview";

import { useSelector } from "react-redux";

const columns = [
  { accessorKey: "Team", header: "TEAM" },
  { accessorKey: "G", header: "G" },
  { accessorKey: "W", header: "W" },
  { accessorKey: "L", header: "L" },
  { accessorKey: "WIN %", header: "WIN %" },
  { accessorKey: "Team EPS", header: "TEAM EPS" },
  { accessorKey: "Opponent EPS", header: "OPPONENT EPS" },
  { accessorKey: "Expected Wins", header: "EXPECTED WINs" },
  { accessorKey: "Actual Wins", header: "ACTUAL WINS" },
  { accessorKey: "Expected Win %", header: "EXPECTED WIN %" },
  { accessorKey: "Actual Win %", header: "ACTUAL WIN %" },
];

const NbaExpectedWins = () => {
  const [nbaExpectedWins, setNbaExpectedWins] = useState([]);
  //   const [selectedYear, setSelectedYear] = useState([]);
  const currentUser = useSelector((state) => state.currentUser?.payload);

  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          if (currentUser) {
            setNbaExpectedWins(results.data);
          } else {
            setNbaExpectedWins(results.data.slice(0, 5));
          }
        },
      }
    );
  }, []);

  return (
    <>
      <></>
      <div className={styles.pageTitle}>
        <h1>NBA Expected Wins</h1>
      </div>
      <ExpectedWinsOverview />

      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <MaterialReactTable
          columns={columns}
          data={nbaExpectedWins}
          enableColumnOrdering
        />
      </TableContainer>
    </>
  );
};

export default NbaExpectedWins;
