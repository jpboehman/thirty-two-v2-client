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
  { accessorKey: "adj EPSS/Poss", header: "Adj. EPSS/Possession" },
  { accessorKey: "adj Tm EPS/Poss", header: "Adj. Team EPS/Possession" },
  { accessorKey: "adj Opp EPS/Poss", header: "Adj. Opp EPS/Poss" },
  { accessorKey: "GP", header: "GP" },
  { accessorKey: "Record", header: "Record" },
  { accessorKey: "W %", header: "W %" },
  { accessorKey: "EPSS", header: "EPSS" },
  { accessorKey: "Team EPS", header: "Team EPS" },
  { accessorKey: "Opp EPS", header: "Opp EPS" },
  { accessorKey: "exW %", header: "Expected Win %" },
  { accessorKey: "exW", header: "Expected Wins" },
  { accessorKey: "exW Regression", header: "Expected Wins Regression" },
];

const NcaaD1MensTeams = () => {
  const [ncaaD1MensTeamData, setNcaaD1MensTeamData] = useState([]);
  const router = useRouter();
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const { data, isError, errorMessage } = useApi("/ncaa-d1-mens-teams", 500);
  useEffect(() => {
    if (data?.ncaaTeams) setNcaaD1MensTeamData(data.ncaaTeams);
  }, [data]);

  const handleRowClick = (row) => {
    const { _id, Team } = row.original;
    setSelectedTeamId(_id);
    const query = `team=${encodeURIComponent(Team)}`;
    const pathname = `/pages/teams/${_id}`;
    router.push({
      pathname,
      query,
    });
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NCAA Teams (Men)</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
      {ncaaD1MensTeamData && (
        <>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
            }}
          >
            <MaterialReactTable
              columns={columns}
              data={ncaaD1MensTeamData.sort(
                (a, b) => b["adj EPSS/Poss"] - a["adj EPSS/Poss"]
              )}
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

export default NcaaD1MensTeams;
