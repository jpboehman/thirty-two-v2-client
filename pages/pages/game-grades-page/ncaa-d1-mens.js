import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ExpectedWinsOverview from "@/components/StatOverviews/expectedWinsOverview";

import { useSelector } from "react-redux";

import mapSeasonUrl from "@/utils/expected-wins/NCAAExpectedWinsURLs";

import chosenSeason from "common/seasonOptions";
import SeasonSelectButtons from "@/components/UIElements/Buttons/SeasonSelectButtons";

import useApi from "hooks/useApi";

const columns = [
  { accessorKey: "Player", header: "Player" },
  { accessorKey: "Team", header: "Team" },
  { accessorKey: "GameDay", header: "Game Date" },
  { accessorKey: "Opponent", header: "Opponent" },
  { accessorKey: "Game Grade", header: "Game Grade" },
  { accessorKey: "MIN", header: "MIN" },
  { accessorKey: "PTS", header: "PTS" },
  { accessorKey: "FGM", header: "FGM" },
  { accessorKey: "FGA", header: "FGA" },
  { accessorKey: "3FM", header: "3FM" },
  { accessorKey: "3FA", header: "3FA" },
  { accessorKey: "FTM", header: "FTM" },
  { accessorKey: "FTA", header: "FTA" },
  { accessorKey: "REB", header: "REB" },
  { accessorKey: "AST", header: "AST" },
  { accessorKey: "STL", header: "STL" },
  { accessorKey: "BLK", header: "BLK" },
  { accessorKey: "OREB", header: "OREB" },
  { accessorKey: "TO", header: "TO" },
  { accessorKey: "PF", header: "PF" },
];

const NcaaD1MensGameGrades = () => {
  const [ncaaD1MensGameGrades, setNcaaD1MensGameGrades] = useState([]);
  //   const [selectedYear, setSelectedYear] = useState([]);
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);

  const { data } = useApi("/ncaa-d1-mens-game-grades", 500);
  useEffect(() => {
    if (data) setNcaaD1MensGameGrades(data);
  }, [data]);
  console.log(data);

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setSeasonUrl(mapSeasonUrl(season));
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NCAA Men's Game Grades</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
      <ExpectedWinsOverview />
      <SeasonSelectButtons onSelectSeason={handleSeasonSelect} />
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <MaterialReactTable
          columns={columns}
          data={ncaaD1MensGameGrades}
          enableColumnOrdering
        />
      </TableContainer>
    </>
  );
};

export default NcaaD1MensGameGrades;
