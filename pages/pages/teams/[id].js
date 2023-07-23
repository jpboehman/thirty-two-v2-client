import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import MaterialReactTable from "material-react-table";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import useApi from "hooks/useApi";
import { ncaaColumns, nbaColumns } from "common/tableColumns";

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

  console.log(`teamRoster: ${JSON.stringify(teamRosterData)}`);

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
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
            }}
          >
            {/* TODO: Add in banner for 32A stats when ready */}
            {/* <Table aria-label="simple table" className="dark-table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    ></Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                        className="ml-10px"
                      >
                        Season Grade:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                        className="ml-10px"
                      >
                        {player["Season Grade"]}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                        className="ml-10px"
                      >
                        WCr %:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                        className="ml-10px"
                      >
                        {player["WCr %"]}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                        className="ml-10px"
                      >
                        WCr/GP:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                        className="ml-10px"
                      >
                        {player["WCr/GP"]}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                        className="ml-10px"
                      >
                        MVPr:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                        className="ml-10px"
                      >
                        {player["MVPr"]}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table> */}
          </TableContainer>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
            }}
          >
            <MaterialReactTable
              columns={isNba ? nbaColumns : ncaaColumns}
              data={teamRosterData}
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

export default TeamRoster;
