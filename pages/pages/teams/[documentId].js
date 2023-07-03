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

const columns = [
  { accessorKey: "Team", header: "Team" },
  { accessorKey: "adj EPSS/Poss", header: "Adj. EPS/Possession" },
  { accessorKey: "adj Tm EPS/Poss", header: "Adj. Team EPS/Possession" },
  { accessorKey: "adj Opp EPS/Poss", header: "Adj. Opp EPS/Poss" },
  { accessorKey: "GP", header: "GP" },
  { accessorKey: "Record", header: "Record" },
  { accessorKey: "W %", header: "W %" },
  { accessorKey: "EPSS", header: "EPSS" },
  { accessorKey: "Team EPS", header: "Team EPS" },
  { accessorKey: "Opp EPS", header: "Opp EPS" },
  { accessorKey: "exW %", header: "exW %" },
  { accessorKey: "exW", header: "exW" },
  { accessorKey: "exW Regression", header: "exW Regression" },
];

const NcaaD1MensTeamRoster = () => {
  const [ncaaD1MensTeamRosterData, setNcaaD1MensTeamRosterData] = useState([]);
  const router = useRouter();
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  // Obtain ObjectID and Team name from URL
  const { documentId, teamName } = router.query;
  console.log(documentId, Team);

  // TODO: Update route
  const { data, isError, errorMessage } = useApi(
    "/ncaa-d1-mens-team/roster",
    500
  );
  useEffect(() => {
    if (data?.ncaaTeamsRoster)
      setNcaaD1MensTeamRosterData(data.ncaaTeamsRoster);
  }, [data]);

  useEffect(() => {
    if (selectedPlayerId) {
      window.location.pathname = `/pages/players/${selectedPlayerId}`;
    }
  }, [selectedPlayerId]);

//   const handleRowClick = (row) => {
//     const { _id, Team } = row;
//     setSelectedPlayerId(_id);
//     const pathname = `/pages/players/${_id}}`;
//     window.location.pathname = pathname;
//   };

  // TODO: Now routing to documentId page. Obtain objectId from URL and then obtain stats from database

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
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <MaterialReactTable
          columns={columns}
          data={ncaaD1MensTeamRosterData}
          enableColumnOrdering
        //   muiTableBodyRowProps={({ row }) => ({
        //     onClick: () => handleRowClick(row),
        //     sx: {
        //       cursor: "pointer",
        //     },
        //   })}
        />
      </TableContainer>
    </>
  );
};

export default NcaaD1MensTeamRoster;
