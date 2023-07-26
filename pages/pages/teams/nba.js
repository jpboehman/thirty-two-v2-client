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

const columns = [
  {
    accessorKey: "Team",
    header: "Team",
  },
  { accessorKey: "Team EPS", header: "Team EPS" },
  { accessorKey: "Opp EPS", header: "Opp EPS" },
  { accessorKey: "EPSS", header: "EPSS" },
  { accessorKey: "GP", header: "GP" },
  { accessorKey: "Wins", header: "Wins" },
  { accessorKey: "exWins", header: "Expected Wins" },
  { accessorKey: "W %", header: "W %" },
  { accessorKey: "exW %", header: "Expected Win %" },
  { accessorKey: "exW Regression", header: "Expected Wins Regression" },
];

// TODO: Fix and align columns and replicate flow
const NbaTeams = () => {
  const [nbaTeamData, setNbaTeamData] = useState([]);
  const router = useRouter();
  const league = router.pathname.split("/").includes("nba")
    ? "nba-team"
    : "ncaa-d1-mens-team";
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const { data, isError, errorMessage } = useApi("/nba-teams", 500);
  useEffect(() => {
    if (data?.nbaTeams) setNbaTeamData(data.nbaTeams);
  }, [data]);

  const handleRowClick = (row) => {
    const { _id, Team, Player } = row.original;
    console.log(`player from row click: ${JSON.stringify(row)}`);
    setSelectedTeamId(_id);
    const query = `team=${encodeURIComponent(
      Team
    )}&league=${league}&player=${Player}`;
    const pathname = `/pages/teams/${_id}`;
    router.push({
      pathname,
      query,
    });
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NBA Teams</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
      {nbaTeamData && (
        <>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
            }}
          >
            <MaterialReactTable
              columns={columns}
              data={nbaTeamData.sort((a, b) => b["EPSS"] - a["EPSS"])}
              enableColumnOrdering
              muiTableBodyRowProps={({ row }) => ({
                onClick: () => handleRowClick(row),
                sx: {
                  cursor: "pointer",
                },
              })}
            />
          </TableContainer>
        </>
      )}
    </>
  );
};

export default NbaTeams;
