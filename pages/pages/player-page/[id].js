import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Link from "next/link";

import { generalRequest } from "http/httpService";

const columns = [
  { accessorKey: "Team", header: "Team" },
  { accessorKey: "GameDay", header: "Game Date" },
  { accessorKey: "Opponent", header: "Opponent" },
  { accessorKey: "Game Grade", header: "Game Grade" },
  { accessorKey: "MIN", header: "MIN" },
  { accessorKey: "PTS", header: "PTS" },
  { accessorKey: "FGM", header: "FGM" },
  { accessorKey: "FGA", header: "FGA" },
  { accessorKey: "3FM", header: "3FM" },
  { accessorKey: "3FA", header: "3FA" },
  { accessorKey: "FTM", header: "FTM" },
  { accessorKey: "FTA", header: "FTA" },
  { accessorKey: "REB", header: "REB" },
  { accessorKey: "AST", header: "AST" },
  { accessorKey: "STL", header: "STL" },
  { accessorKey: "BLK", header: "BLK" },
  { accessorKey: "OREB", header: "OREB" },
  { accessorKey: "TO", header: "TO" },
  { accessorKey: "PF", header: "PF" },
];

const NcaaD1MensPlayer = () => {
  const router = useRouter();
  const id = router.query?.id ? router.query?.id : router.query?.param;
  console.log(router);
  const [ncaaD1MensPlayer, setNcaaD1MensPlayer] = useState({});
  const [ncaaD1MensPlayerGameGrades, setNcaaD1MensPlayerGameGrades] = useState(
    {}
  );
  const [selectedTeam, setSelectedTeam] = useState();
  const currentUser = useSelector((state) => state.currentUser?.payload);

  useEffect(() => {
    let isMounted = true;

    const fetchPlayerData = async () => {
      if (id) {
        // TODO: Can I make any updates here?
        // Need to get gameGrades flowing in here correctly
        try {
          const playerLeagueResponse = await generalRequest.get(
            `/ncaa-d1-mens-league-players/${id}`
          );

          const ncaaPlayerResponse = await generalRequest.get(
            `/ncaa-d1-mens-player/${id}`
          );

          console.log(playerLeagueResponse);
          console.log(ncaaPlayerResponse);

          if (ncaaPlayerResponse?.data?.ncaaPlayer?.length && isMounted) {
            setNcaaD1MensPlayer(ncaaPlayerResponse.data?.ncaaPlayer[0]);
          } else if (
            playerLeagueResponse?.data?.ncaaPlayerLeague?.length &&
            isMounted
          ) {
            setNcaaD1MensPlayer(playerLeagueResponse.data?.ncaaPlayerLeague[0]);
          }
        } catch (error) {
          console.error("Error fetching player data:", error);
        }
      }
    };

    // TODO: Fix this function
    const fetchPlayerGameGradeData = async () => {
      if (id) {
        try {
          console.log(ncaaD1MensPlayer);
          const playerGameGradeResponse = await generalRequest.get(`
          /ncaa-d1-mens-game-grades/${ncaaD1MensPlayer}`);

          console.log(playerGameGradeResponse);

          if (playerGameGradeResponse?.data?.gameGrades?.length && isMounted) {
            ncaaD1MensPlayerGameGrades(ncaaPlayerResponse.data);
          } else if (
            playerGameGradeResponse?.data?.gameGrades?.length &&
            isMounted
          ) {
            ncaaD1MensPlayerGameGrades(playerLeagueResponse.data);
          }
        } catch (error) {
          console.error("Error fetching player data:", error);
        }
      }
    };

    fetchPlayerData();
    fetchPlayerGameGradeData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log(ncaaD1MensPlayer);

  return (
    <>
      {ncaaD1MensPlayer && (
        <>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px",
              mb: "15px",
            }}
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 18,
                fontWeight: 500,
                mb: "10px",
              }}
            >
              {ncaaD1MensPlayer["Player"]} Statistics
            </Typography>

            <TableContainer
              component={Paper}
              sx={{
                boxShadow: "none",
              }}
            >
              <Table aria-label="simple table" className="dark-table">
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
                      >
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          Team:
                        </Typography>
                        <Link
                          href={`/pages/teams/${ncaaD1MensPlayer._id}?param=${ncaaD1MensPlayer["Team"]}`}
                        >
                          <Typography
                            sx={{
                              fontWeight: "700",
                              fontSize: "12px",
                            }}
                            className="ml-10px"
                          >
                            {ncaaD1MensPlayer["Team"]}
                          </Typography>
                        </Link>
                      </Box>
                    </TableCell>
                  </TableRow>
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
                          {ncaaD1MensPlayer["Season Grade"]}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>

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
                      >
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          WCr %
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensPlayer["WCr %"]}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>

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
                          {ncaaD1MensPlayer["WCr/GP"]}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>

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
                          {ncaaD1MensPlayer["MVPr"]}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: "none",
              }}
            >
              <MaterialReactTable
                columns={columns}
                data={ncaaD1MensPlayerGameGrades}
                enableColumnOrdering
                muiTableBodyRowProps={({ row }) => ({
                  onClick: () => handleRowClick(row),
                  sx: {
                    cursor: "pointer",
                  },
                })}
              />
            </TableContainer>
          </Card>
        </>
      )}
    </>
  );
};

export default NcaaD1MensPlayer;
