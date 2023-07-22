import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
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
  // { accessorKey: "Team", header: "Team" },
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
  // Once added to sheet, then should be good to go
  const [selectedSeason, setSelectedSeason] = useState("2022-23");

  useEffect(() => {
    let isMounted = true;

    const fetchPlayerData = async () => {
      if (id) {
        try {
          const playerLeagueResponse = await generalRequest.get(
            `/ncaa-d1-mens-league-players/${id}`
          );

          const ncaaPlayerResponse = await generalRequest.get(
            `/ncaa-d1-mens-player/${id}`
          );

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

    fetchPlayerData();

    return () => {
      isMounted = false;
    };
  }, [id, selectedSeason]);

  useEffect(() => {
    let isMounted = true;

    const fetchPlayerGameGradeData = async () => {
      if (ncaaD1MensPlayer && ncaaD1MensPlayer["Player"]) {
        try {
          const playerGameGradeResponse = await generalRequest.get(
            `/ncaa-d1-mens-game-grades/${ncaaD1MensPlayer["Player"]}/${selectedSeason}`
          );

          if (playerGameGradeResponse?.data?.gameGrades?.length && isMounted) {
            setNcaaD1MensPlayerGameGrades(
              playerGameGradeResponse.data.gameGrades
            );
          }
        } catch (error) {
          console.error("Error fetching player game grade data:", error);
        }
      }
    };

    fetchPlayerGameGradeData();

    return () => {
      isMounted = false;
    };
  }, [ncaaD1MensPlayer]);

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
                          {ncaaD1MensPlayer["WCr %"]}
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
                          {ncaaD1MensPlayer["WCr/GP"]}
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
                          {ncaaD1MensPlayer["MVPr"]}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* Season Selectors */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                mb: 2,
              }}
            >
              <Button
                variant="contained"
                onClick={() => setSelectedSeason("2022-23")}
              >
                2022-2023
              </Button>
              <Button
                variant="contained"
                onClick={() => setSelectedSeason("2021-22")}
              >
                2021-2022
              </Button>
              <Button
                variant="contained"
                onClick={() => setSelectedSeason("2020-21")}
              >
                2020-2021
              </Button>
              <Button
                variant="contained"
                onClick={() => setSelectedSeason("2019-18")}
              >
                2019-2018
              </Button>
              <Button
                variant="contained"
                onClick={() => setSelectedSeason("2018-19")}
              >
                2018-2019
              </Button>
            </Box>

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
