import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import PlayerGradesOverview from "@/components/StatOverviews/playerGradesOverview";

import { useSelector } from "react-redux";

import mapSeasonUrl from "@/utils/player-grades/NCAAPlayerGradesSeasonURLs";

import chosenSeason from "common/seasonOptions";
import SeasonSelectButtons from "@/components/UIElements/Buttons/SeasonSelectButtons";

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
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);
  const [seasonUrl, setSeasonUrl] = useState(
    "https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=1828440697&single=true&output=csv"
  );

  useEffect(() => {
    try {
      Papa.parse(`${seasonUrl}`, {
        download: true,
        header: true,
        //TODO: Add loading state component
        complete: (results) => {
          if (currentUser) {
            setNcaaTeamEpss(results.data);
          } else {
            setNcaaTeamEpss(results.data.slice(0, 5));
          }
        },
      });
    } catch (error) {
      console.log(`error: ${JSON.stringify(error)}`);
    }
  }, [seasonUrl]);

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setSeasonUrl(mapSeasonUrl(season));
  };

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
      <SeasonSelectButtons onSelectSeason={handleSeasonSelect} />
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
