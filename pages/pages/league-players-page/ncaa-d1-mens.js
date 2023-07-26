import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import useApi from "hooks/useApi";

const columns = [
  { accessorKey: "Player", header: "Player Name" },
  { accessorKey: "Team", header: "Team" },
  { accessorKey: "Season Grade", header: "Season Grade" },
  { accessorKey: "G", header: "G" },
  { accessorKey: "WCr", header: "WCr" },
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

const NcaaD1MensLeaguePlayers = () => {
  const [ncaaD1MensLeaguePlayers, setNcaaD1MensLeaguePlayers] = useState([]);
  const router = useRouter();
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const { data, isError, errorMessage } = useApi(
    "/ncaa-d1-mens-league-players",
  );
  useEffect(() => {
    if (data?.ncaaPlayerLeague)
      setNcaaD1MensLeaguePlayers(data.ncaaPlayerLeague);
  }, [data]);

  const handleRowClick = (row) => {
    const { _id } = row.original;
    setSelectedPlayerId(_id);
    const query = `league=ncaa`;
    const pathname = `/pages/player-page/${_id}`;
    router.push({
      pathname,
      query,
    });
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NCAA League Players</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
      {ncaaD1MensLeaguePlayers && (
        <>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
            }}
          >
            <MaterialReactTable
              columns={columns}
              data={ncaaD1MensLeaguePlayers.sort(
                (a, b) => b["Season Grade"] - a["Season Grade"]
              )}
              enableColumnOrdering
              muiTableBodyRowProps={({ row }) => ({
                onClick: () => handleRowClick(row),
                sx: {
                  cursor: "pointer",
                },
              })}
              muiTablePaginationProps={{
                rowsPerPageOptions: [5, 20, 50, 100, 200],
                showFirstButton: false,
                showLastButton: false,
              }}
            />
          </TableContainer>
        </>
      )}
    </>
  );
};

export default NcaaD1MensLeaguePlayers;
