import React, { useState, useEffect } from "react";
import OrdersLists from "@/components/eCommerce/OrdersList/OrdersLists";
import Papa from "papaparse";
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

const columns = [
  { accessorKey: "School", header: "SCHOOL" },
  { accessorKey: "G", header: "G" },
  { accessorKey: "W", header: "W" },
  { accessorKey: "L", header: "L" },
  { accessorKey: "WIN %", header: "WIN %" },
  { accessorKey: "Team EPS", header: "TEAM EPS" },
  { accessorKey: "Opponent EPS", header: "OPPONENT EPS" },
  { accessorKey: "Expected Wins", header: "EXPECTED WINS" },
  { accessorKey: "Actual Wins", header: "ACTUAL WINS" },
  { accessorKey: "Expected Win %", header: "EXPECTED WIN %" },
  { accessorKey: "Actual Win %", header: "ACTUAL WIN %" },
];

const NcaaTeamEpss = () => {
  const [ncaaExpectedWins, setNcaaExpectedWins] = useState([]);
  //   const [selectedYear, setSelectedYear] = useState([]);
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);
  const [seasonUrl, setSeasonUrl] = useState(
    "https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?output=csv"
  );

  console.log(seasonUrl);

  useEffect(() => {
    Papa.parse(`${seasonUrl}`, {
      download: true,
      header: true,
      complete: (results) => {
        setNcaaExpectedWins(results.data);
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
        <h1>NCAA Expected Wins</h1>
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
          data={ncaaExpectedWins}
          enableColumnOrdering
        />
      </TableContainer>
    </>
  );
};

export default NcaaTeamEpss;
