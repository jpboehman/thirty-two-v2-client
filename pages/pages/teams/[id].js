import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import useApi from "hooks/useApi";
import { ncaaColumns, nbaColumns } from "common/tableColumns";
import SubscribeForMore from "@/components/Forms/SubscribeForMore";
import Card from "@mui/material/Card";

const LEAGUE_TYPE = {
  NBA: "nba",
  NCAA: "ncaa-d1-mens-team",
};

const TeamRoster = () => {
  const [teamRosterData, setTeamRosterData] = useState([]);
  const router = useRouter();
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const team = router.query?.team || router.query?.param;
  const league = router.query?.league || LEAGUE_TYPE.NCAA;

  const { data, isError, errorMessage } = useApi(`/${league}/${team}`, 500);

  const isNba = league?.includes(LEAGUE_TYPE.NBA);
  const columns = isNba ? nbaColumns : ncaaColumns;

  useEffect(() => {
    if (data?.teamRoster) setTeamRosterData(data.teamRoster);
  }, [data]);

  const handleRowClick = (row) => {
    const { _id, Player } = row.original;
    // grab player Name from here?
    setSelectedPlayerId(_id);
    const query = `league=${league}&player=${Player}`;
    const pathname = `/pages/player-page/${_id}`;
    router.push({
      pathname,
      query,
    });
  };

  if (isError) {
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Roster Statistics</h1>
        {/* // TODO: Insert season buttons here when columns are added for this*/}
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
      {teamRosterData && (
        <>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px",
              mb: "15px",
            }}
          >
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: "none",
              }}
            ></TableContainer>
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: "none",
              }}
            >
              <MaterialReactTable
                columns={isNba ? nbaColumns : ncaaColumns}
                data={
                  currentUser
                    ? teamRosterData.sort(
                        (a, b) => b["adj EPSS/Poss"] - a["adj EPSS/Poss"]
                      )
                    : teamRosterData
                        .sort((a, b) => b["adj EPSS/Poss"] - a["adj EPSS/Poss"])
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
              <div>{!currentUser && <SubscribeForMore />}</div>
            </TableContainer>
          </Card>
        </>
      )}
    </>
  );
};

export default TeamRoster;
