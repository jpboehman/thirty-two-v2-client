import React, { useState, useEffect } from "react";
import OrdersLists from "@/components/eCommerce/OrdersList/OrdersLists";
import Papa from "papaparse";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const columns = [
  { accessorKey: "School", header: "SCHOOL" },
  { accessorKey: "G", header: "G" },
  { accessorKey: "Team EPS", header: "Team EPS" },
  { accessorKey: "Opponent EPS", header: "Opponent EPS" },
  { accessorKey: "EPSS", header: "EPSS" },
  { accessorKey: "WIN %", header: "WIN %" },
  { accessorKey: "Tm PTS", header: "Tm PTS" },
  { accessorKey: "Tm FG%", header: "Tm FG%" },
  { accessorKey: "Tm 3FG%", header: "Tm 3FG%" },
  { accessorKey: "Tm FT%", header: "Tm FT%" },
  { accessorKey: "Tm REB", header: "Tm REB" },
  { accessorKey: "Tm AST", header: "Tm AST" },
  { accessorKey: "Tm STL", header: "Tm STL" },
  { accessorKey: "Tm BLK", header: "Tm BLK" },
  { accessorKey: "Tm TOV", header: "Tm TOV" },
];

const NcaaTeamEpss = () => {
  const [ncaaTeamEpss, setNcaaTeamEpss] = useState([]);
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
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setNcaaTeamEpss(results.data);
        },
      }
    );
  }, []);

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NCAA Team EPSS</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Orders List</li>
        </ul>
      </div>

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
          data={ncaaTeamEpss}
          enableColumnOrdering
        />
      </TableContainer>
    </>
  );
};

export default NcaaTeamEpss;
