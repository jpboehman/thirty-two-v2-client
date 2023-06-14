import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import PlayerGradesOverview from "@/components/StatOverviews/playerGradesOverview";

import { useSelector } from "react-redux";

import mapSeasonUrl from "@/utils/player-grades/NBAPlayerGradesSeasonURLs";

import chosenSeason from "common/seasonOptions";
import SeasonSelectButtons from "@/components/UIElements/Buttons/SeasonSelectButtons";

const columns = [
  { accessorKey: "PLAYER", header: "PLAYER" },
  { accessorKey: "TEAM", header: "TEAM" },
  { accessorKey: "AGE", header: "AGE" },
  { accessorKey: "POS", header: "POSITION" },
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
  const [nbaPlayerRatings, setNbaPlayerRatings] = useState([]);
  // const [selectedYear, setSelectedYear] = useState(chosenYear[20222023])
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);
  const [seasonUrl, setSeasonUrl] = useState(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRsWOjSYH9x30FEv-z4Pom-P6cvzkphmdHOpD1eFarNJi0XmkmPb5fzCEyAMX8xs9ttaFpRsWVYTPHx/pub?output=csv"
  );

  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(`${seasonUrl}`, {
      download: true,
      header: true,
      complete: (results) => {
        if (currentUser) {
          setNbaPlayerRatings(results.data);
        } else {
          setNbaPlayerRatings(results.data.slice(0, 5));
        }
      },
    });
  }, [seasonUrl]);

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setSeasonUrl(mapSeasonUrl(season));
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NBA Player Grades and EPS</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Players</li>
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
          data={nbaPlayerRatings}
          enableColumnOrdering
        />
      </TableContainer>
    </>
  );
};

export default NcaaTeamEpss;
