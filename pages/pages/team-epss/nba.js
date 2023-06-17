import React, { useState, useEffect } from "react";
import OrdersLists from "@/components/eCommerce/OrdersList/OrdersLists";
import Papa from "papaparse";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TeamEpssOverview from "@/components/StatOverviews/teamEpssOverview";

import { useSelector } from "react-redux";

// import mapSeasonUrl from "@/utils/team-epss/NBATeamEpssSeasonURLs";
import mapSeasonUrl from "@/utils/team-epss/NBATeamEpssSeasonURLs";

import chosenSeason from "common/seasonOptions";
import SeasonSelectButtons from "@/components/UIElements/Buttons/SeasonSelectButtons";

const columns = [
  { accessorKey: "Team", header: "TEAM" },
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

const NbaTeamEpss = () => {
  const [nbaTeamEpss, setNbaTeamEpss] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);
  const [seasonUrl, setSeasonUrl] = useState(
    "https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?output=csv"
  );

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
    Papa.parse(`${seasonUrl}`, {
      download: true,
      header: true,
      complete: (results) => {
          if (currentUser) {
            setNbaTeamEpss(results.data);
          } else {
            setNbaTeamEpss(results.data.slice(0, 5));
          }
        setNbaTeamEpss(results.data);
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
        <h1>NBA Team EPSS</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Orders List</li>
        </ul>
      </div>
      <TeamEpssOverview />
      <SeasonSelectButtons onSelectSeason={handleSeasonSelect} />
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
