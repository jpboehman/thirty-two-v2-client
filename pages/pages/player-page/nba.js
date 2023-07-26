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
  const [ncaaD1MensPlayer, setNcaaD1MensPlayer] = useState([]);
  const router = useRouter();
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const { id } = router.query;

  // TODO: Update route
  const { data, isError, errorMessage } = useApi(
    `/ncaa-d1-mens-player/${id}`,
  );
  useEffect(() => {
    if (data?.ncaaPlayer) setNcaaD1MensPlayer(data.ncaaPlayer);
  }, [data]);

  const handleRowClick = (row) => {
    const { _id } = row.original;
    setSelectedPlayerId(_id);
    const pathname = `/pages/player-page/${_id}}`;
    window.location.pathname = pathname;
  };

  console.log(ncaaD1MensPlayer);

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NBA Roster</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
      {/* <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <MaterialReactTable
          columns={columns}
          data={ncaaD1MensTeamRosterData}
          enableColumnOrdering
          muiTableBodyRowProps={({ row }) => ({
            onClick: () => handleRowClick(row),
            sx: {
              cursor: "pointer",
            },
          })}
        />
      </TableContainer> */}
    </>
  );
};

export default NcaaD1MensTeamRoster;
