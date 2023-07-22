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
import { ncaaColumns } from "common/tableColumns";

const tempNbaColumns = [
  { accessorKey: "Player", header: "Player" },
  { accessorKey: "Team", header: "Team" },
  { accessorKey: "Season", header: "Season" },
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

const LEAGUE_TYPE = {
  NBA_LEAGUE: "nba-league-players",
  NCAA_LEAGUE: "ncaa-d1-mens-league-players",
  NCAA_PLAYER: "ncaa-d1-mens-player",
};

const PlayerPage = () => {
  const router = useRouter();
  const id = router.query?.id ? router.query?.id : router.query?.param;
  const league = router.query?.league || LEAGUE_TYPE.NCAA;
  const isNba = league?.includes(LEAGUE_TYPE.NBA);
  console.log(router);
  const [player, setPlayer] = useState({});
  const [playerGameGrades, setPlayerGameGrades] = useState({});
  const [selectedTeam, setSelectedTeam] = useState();
  const currentUser = useSelector((state) => state.currentUser?.payload);
  // Once added to sheet, then should be good to go
  const [selectedSeason, setSelectedSeason] = useState("2022-23");

  console.log(`league is: ${JSON.stringify(league)}`);

  console.log(`router from player: ${JSON.stringify(router)}`);

  useEffect(() => {
    let isMounted = true;

    const fetchPlayerData = async () => {
      if (id) {
        try {
          if (league === "ncaa") {
            const playerLeagueResponse = await generalRequest.get(
              // `/ncaa-d1-mens-league-players/${id}`
              `/${LEAGUE_TYPE.NCAA_LEAGUE}/${id}`
            );

            const ncaaPlayerResponse = await generalRequest.get(
              `/${LEAGUE_TYPE.NCAA_PLAYER}/${id}`
            );

            if (ncaaPlayerResponse?.data?.ncaaPlayer?.length && isMounted) {
              setPlayer(ncaaPlayerResponse.data?.ncaaPlayer[0]);
            } else if (
              playerLeagueResponse?.data?.ncaaPlayerLeague?.length &&
              isMounted
            ) {
              setPlayer(playerLeagueResponse.data?.ncaaPlayerLeague[0]);
            }
          } else {
            // Fetching nba endpoints
            const playerLeagueResponse = await generalRequest.get(
              `/${LEAGUE_TYPE.NBA_LEAGUE}/${id}`
            );

            if (
              playerLeagueResponse?.data?.nbaPlayerLeague?.length &&
              isMounted
            ) {
              setPlayer(playerLeagueResponse.data?.nbaPlayerLeague[0]);
            }
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

    // TODO: Add NBA functionality for this
    const fetchPlayerGameGradeData = async () => {
      if (player && player["Player"] && league) {
        try {
          if (league === "ncaa") {
            const playerGameGradeResponse = await generalRequest.get(
              `/ncaa-d1-mens-game-grades/${player["Player"]}/${selectedSeason}`
            );

            if (
              playerGameGradeResponse?.data?.gameGrades?.length &&
              isMounted
            ) {
              setPlayerGameGrades(playerGameGradeResponse.data.gameGrades);
            }
          } else {
            // Repeating the same thing for the NBA
            const playerGameGradeResponse = await generalRequest.get(
              `/nba-game-grades/${player["Player"]}/${selectedSeason}`
            );

            if (
              playerGameGradeResponse?.data?.gameGrades?.length &&
              isMounted
            ) {
              setPlayerGameGrades(playerGameGradeResponse.data.gameGrades);
            }
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
  }, [player]);

  return (
    <>
      {player && (
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
              {player["Player"]} Statistics
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
                          href={`/pages/teams/${player._id}?param=${player["Team"]}`}
                        >
                          <Typography
                            sx={{
                              fontWeight: "700",
                              fontSize: "12px",
                            }}
                            className="ml-10px"
                          >
                            {player["Team"]}
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
              </Table>
            </TableContainer>

            {/* Season Selectors */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "10px",
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
                columns={league === "nba" ? tempNbaColumns : ncaaColumns}
                data={playerGameGrades}
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

export default PlayerPage;
