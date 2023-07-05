import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import chosenSeason from "common/seasonOptions";
import useApi from "hooks/useApi";

import InfoIcon from "@mui/icons-material/Info";

// For player page, not leveraging table to show data, but a profile component instead
const columns = [
  { accessorKey: "Player", header: "Player Name" },
  { accessorKey: "Team", header: "Team" },
  { accessorKey: "Season Grade", header: "Season Grade" },
  { accessorKey: "WCr %", header: "WCr %" },
  { accessorKey: "WCr/GP", header: "WCr/GP" },
  { accessorKey: "MVPr", header: "MVPr" },
  { accessorKey: "MIN", header: "MIN" },
  { accessorKey: "PTS", header: "PTS" },
  { accessorKey: "FGM", header: "FGM" },
  { accessorKey: "FGA", header: "FGA" },
  { accessorKey: "3FM", header: "3FM" },
  { accessorKey: "3FA", header: "3FA" },
  { accessorKey: "2FM", header: "2FM" },
  { accessorKey: "2FA", header: "2FA" },
  { accessorKey: "FTM", header: "FTM" },
  { accessorKey: "FTA", header: "FTA" },
  { accessorKey: "OREB", header: "OREB" },
  { accessorKey: "DREB", header: "DREB" },
  { accessorKey: "REB", header: "REB" },
  { accessorKey: "AST", header: "AST" },
  { accessorKey: "STL", header: "STL" },
  { accessorKey: "BLK", header: "BLK" },
  { accessorKey: "TO", header: "TO" },
  { accessorKey: "PF", header: "PF" },
];

const NcaaD1MensTeamRoster = () => {
  const router = useRouter();
  // TODO: Fix bug, if router.query is not available, we need to make sure that it is
  const [ncaaD1MensPlayer, setNcaaD1MensPlayer] = useState([]);
  const [mongoDocumentId, setMongoDocumentId] = useState();
  const currentUser = useSelector((state) => state.currentUser?.payload);

  // Cprrectly obtaining documentId and team from query. Now send these to backend
  const { documentId } = router.query;
  console.log(router.query);
  const decodedDocumentId = documentId ? decodeURIComponent(documentId) : null;

  // TODO: Update route
  const { data, isError, errorMessage } = useApi(
    `/ncaa-d1-mens-player/${decodedDocumentId}`,
    500
  );

  useEffect(() => {
    if (data?.ncaaPlayer) setNcaaD1MensPlayer(data.ncaaPlayer);
  }, [data]);

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Player Page</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NcaaD1MensTeamRoster;
