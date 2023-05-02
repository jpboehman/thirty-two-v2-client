import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import PlayerGradesOverview from "@/components/StatOverviews/playerGradesOverview";

import { useSelector } from "react-redux";

const columns = [
  { accessorKey: "PLAYER", header: "PLAYER" },
  { accessorKey: "SCHOOL", header: "SCHOOL" },
  { accessorKey: "CONF", header: "CONF" },
  { accessorKey: "CLASS", header: "CLASS" },
  { accessorKey: "POS", header: "POS" },
  { accessorKey: "SEASON", header: "SEASON" },
  { accessorKey: "PLAYER GRADE", header: "PLAYER GRADE" },
  { accessorKey: "EPS", header: "EPS" },
  { accessorKey: "G", header: "G" },
  { accessorKey: "MP", header: "MP" },
  { accessorKey: "PTS", header: "PTS" },
  { accessorKey: "REB", header: "REB" },
  { accessorKey: "AST", header: "AST" },
  { accessorKey: "STL", header: "STL" },
  { accessorKey: "BLK", header: "BLK" },
];

const NcaaTeamEpss = () => {
  const [ncaaTeamEpss, setNcaaTeamEpss] = useState([]);
  //   const [selectedYear, setSelectedYear] = useState([]);
  const currentUser = useSelector((state) => state.currentUser?.payload);

  useEffect(() => {
    try {
      Papa.parse(
        "https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=0&single=true&output=csv",
        {
          download: true,
          header: true,
          complete: (results) => {
            if (currentUser) {
              setNcaaTeamEpss(results.data);
            } else {
              setNcaaTeamEpss(results.data.slice(0, 5));
            }
          },
        }
      );
    } catch (error) {
      console.log(`error: ${JSON.stringify(error)}`);
    }
  }, []);

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NCAA Player Grades and EPS</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Orders List</li>
        </ul>
      </div>
      <PlayerGradesOverview />

      <TableContainer
        component={Paper}
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
