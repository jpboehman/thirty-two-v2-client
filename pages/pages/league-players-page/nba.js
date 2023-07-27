import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import useApi from "hooks/useApi";
import { Card } from "@mui/material";
import SubscribeForMore from "@/components/Forms/SubscribeForMore";

const columns = [
  { accessorKey: "Player", header: "Player" },
  { accessorKey: "Tm", header: "Team" },
  // { accessorKey: "Season", header: "Season" },
  { accessorKey: "Season Grade", header: "Season Grade" },
  { accessorKey: "WCr", header: "WCr" },
  { accessorKey: "WCr %", header: "WCr %" },
  { accessorKey: "WCr/GP", header: "WCr/GP" },
  { accessorKey: "MVPr", header: "MVPr" },
  { accessorKey: "MP", header: "MIN" },
  { accessorKey: "PTS", header: "PTS" },
  { accessorKey: "FG", header: "FG" },
  { accessorKey: "FGA", header: "FGA" },
  { accessorKey: "3P", header: "3P" },
  { accessorKey: "3PA", header: "3PA" },
  { accessorKey: "2P", header: "2P" },
  { accessorKey: "2PA", header: "2PA" },
  { accessorKey: "FT", header: "FT" },
  { accessorKey: "FTA", header: "FTA" },
  { accessorKey: "ORB", header: "ORB" },
  { accessorKey: "DRB", header: "DRB" },
  { accessorKey: "REB", header: "REB" },
  { accessorKey: "AST", header: "AST" },
  { accessorKey: "STL", header: "STL" },
  { accessorKey: "BLK", header: "BLK" },
  { accessorKey: "TOV", header: "TO" },
  { accessorKey: "PF", header: "PF" },
];

const NbaLeaguePlayers = () => {
  const [nbaLeaguePlayers, setNbaLeaguePlayers] = useState([]);
  const router = useRouter();
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const { data, isError, errorMessage } = useApi("/nba-league-players");
  useEffect(() => {
    if (data?.nbaPlayer) setNbaLeaguePlayers(data.nbaPlayer);
  }, [data]);

  const handleRowClick = (row) => {
    const { _id } = row.original;
    setSelectedPlayerId(_id);
    const query = `league=nba`;
    const pathname = `/pages/player-page/${_id}`;
    router.push({
      pathname,
      query,
    });
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NBA League Players</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
      {nbaLeaguePlayers && (
        <>
          <Card>
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
                    ? nbaLeaguePlayers.sort(
                        (a, b) => b["Season Grade"] - a["Season Grade"]
                      )
                    : nbaLeaguePlayers
                        .sort((a, b) => b["Season Grade"] - a["Season Grade"])
                        .slice(0, 5)
                }
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
            {!currentUser && <SubscribeForMore />}
          </Card>
        </>
      )}
    </>
  );
};

export default NbaLeaguePlayers;
