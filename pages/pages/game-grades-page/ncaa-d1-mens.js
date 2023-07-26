import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import GamegradesOverview from "@/components/StatOverviews/gameGradesOverview";

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

  // TODO: If the user requests more data, then add the page parameter as the third funciton argument
  // Perhaps a 'Load More' button that will set the page to the next page
  const { data, isError, errorMessage } = useApi(
    "/ncaa-d1-mens-game-grades",
  );
  useEffect(() => {
    // TODO:
    // Add error-handling logic here
    if (data?.gameGrades) setNcaaD1MensGameGrades(data.gameGrades);
  }, [data]);

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
      <GamegradesOverview />
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <MaterialReactTable
          columns={columns}
          data={
            currentUser
              ? ncaaD1MensGameGrades.sort(
                  (a, b) => b["Game Grade"] - a["Game Grade"]
                )
              : ncaaD1MensGameGrades
                  .sort((a, b) => b["Game Grade"] - a["Game Grade"])
                  .slice(0, 5)
          }
          enableColumnOrdering
        />
      </TableContainer>
    </>
  );
};

export default NcaaD1MensGameGrades;
