import React, { useState, useEffect } from "react";
import OrdersLists from "@/components/eCommerce/OrdersList/OrdersLists";
import Papa from "papaparse";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TeamEpssOverview from "@/components/StatOverviews/teamEpssOverview";

const columns = [
  { accessorKey: "Team", header: "TEAM" },
  { accessorKey: "G", header: "G" },
  { accessorKey: "Actual Wins", header: "ACTUAL WINS" },
  { accessorKey: "Actual Win %", header: "ACTUAL WIN %" },
  { accessorKey: "Expected Wins", header: "EXPECTED WINS" },
  { accessorKey: "Expected Wins", header: "EXPECTED WIN %" },
  { accessorKey: "G", header: "GAMES" },
  { accessorKey: "L", header: "LOSSES" },
  { accessorKey: "Team EPS", header: "TEAM EPS" },
  { accessorKey: "Opponent EPS", header: "OPPONENT EPS" },
];

const NbaTeamEpss = () => {
  const [nbaTeamEpss, setNbaTeamEpss] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem("theme");
    if (storedPreference === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    const htmlElement = document.querySelector("html");
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          if (results.data.length > 100) {
            setNbaTeamEpss(results.data.slice(0, 100));
          } else {
            setNbaTeamEpss(results.data);
          }
        },
      }
    );
  }, []);

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NBA Team EPSS</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Orders List</li>
        </ul>
      </div>
      <TeamEpssOverview />

      <TableContainer
        component={Paper}
        id={
          isDarkMode
            ? "material-react-table-dark-mode"
            : "material-react-table-light-mode"
        }
        sx={{
          boxShadow: "none",
        }}
      >
        <MaterialReactTable
          columns={columns}
          data={nbaTeamEpss}
          enableColumnOrdering
        />
      </TableContainer>
    </>
  );
};

export default NbaTeamEpss;
