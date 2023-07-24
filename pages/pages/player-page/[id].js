import React, { useCallback, useEffect, useState } from "react";
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

const tempNbaColumns = [
  { accessorKey: "GameDay", header: "Game Day" },
  { accessorKey: "Opponent", header: "Opp" },
  { accessorKey: "Game Grade", header: "Game Grade" },
  { accessorKey: "MIN", header: "MIN" },
  { accessorKey: "PTS", header: "PTS" },
  { accessorKey: "FGM", header: "FGM" },
  { accessorKey: "FGA", header: "FGA" },
  { accessorKey: "3FM", header: "3FM" },
  { accessorKey: "3FA", header: "3FA" },
  { accessorKey: "FTM", header: "FTM" },
  { accessorKey: "FTA", header: "FTA" },
  { accessorKey: "OREB", header: "OREB" },
  { accessorKey: "REB", header: "REB" },
  { accessorKey: "AST", header: "AST" },
  { accessorKey: "STL", header: "STL" },
  { accessorKey: "BLK", header: "BLK" },
  { accessorKey: "TO", header: "TO" },
  { accessorKey: "PF", header: "PF" },
];

export const ncaaColumns = [
  { accessorKey: "GameDay", header: "Game Day" },
  { accessorKey: "Opponent", header: "Opp" },
  { accessorKey: "Game Grade", header: "Game Grade" },
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
  const id = Array.isArray(router.query?.param)
    ? router.query?.param[0]
    : router.query?.id
    ? router.query?.id
    : router.query?.param;

  const playerName = router.query?.Player;
  const league = router.query?.league;
  const [player, setPlayer] = useState({});
  const [playerGameGrades, setPlayerGameGrades] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState();
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState("2022-23");

  const fetchPlayerGameGradeData = useCallback(
    async (fetchedPlayer, currentLeague) => {
      console.log(
        `fetchPlayerGameGradeData fetchedPlayer: ${JSON.stringify(
          fetchedPlayer
        )}, currentLeague: ${currentLeague}`
      );
      if (fetchedPlayer?.Player && currentLeague) {
        const endPoint =
          currentLeague === "nba" || currentLeague === "nba-team"
            ? `/nba-game-grades/${fetchedPlayer["Player"]}/${selectedSeason}`
            : `/ncaa-d1-mens-game-grades/${fetchedPlayer["Player"]}/${selectedSeason}`;

        try {
          const response = await generalRequest.get(endPoint);
          if (response?.data?.gameGrades?.length) {
            setPlayerGameGrades(response.data.gameGrades);
          }
        } catch (error) {
          console.error("Error fetching player game grade data:", error);
        }
      } else {
        console.warn(
          "fetchPlayerGameGradeData: Missing fetchedPlayer or currentLeague"
        );
      }
    },
    [selectedSeason]
  );

  useEffect(() => {
    let isMounted = true;

    const fetchPlayerData = async () => {
      if (id && league) {
        try {
          if (league === "ncaa" || league === "ncaa-d1-mens-team") {
            const ncaaPlayerLeagueResponse = await generalRequest.get(
              `/${LEAGUE_TYPE.NCAA_LEAGUE}/${id}`
            );
            const ncaaPlayerResponse = await generalRequest.get(
              `/${LEAGUE_TYPE.NCAA_PLAYER}/${id}`
            );

            const responseData =
              ncaaPlayerResponse?.data?.ncaaPlayer?.length > 0
                ? ncaaPlayerResponse.data.ncaaPlayer[0]
                : ncaaPlayerLeagueResponse?.data?.ncaaPlayerLeague[0];

            if (isMounted) {
              setPlayer(responseData);
              await fetchPlayerGameGradeData(responseData, league);
            }
          } else {
            // Passing the wrong id to NBA - need to pass right playerId
            const nbaPlayerLeagueResponse = await generalRequest.get(
              `/nba/${id}`,
              {
                params: {
                  playerName,
                },
              }
            );
            const nbaPlayerResponse = await generalRequest.get(
              `/${LEAGUE_TYPE.NBA_LEAGUE}/${id}`,
              {
                params: {
                  playerName,
                },
              }
            );

            console.log(
              `nbaPlayerResponse: ${JSON.stringify(nbaPlayerResponse)}`
            );
            console.log(
              `nbaPlayerLeagueResponse: ${JSON.stringify(
                nbaPlayerLeagueResponse
              )}`
            );

            const responseData =
              nbaPlayerResponse?.data?.nbaPlayer?.length > 0
                ? nbaPlayerResponse.data.nbaPlayer[0]
                : nbaPlayerLeagueResponse?.data?.nbaPlayer[0];

            console.log(`responseData: ${JSON.stringify(responseData)}`);

            if (isMounted && responseData) {
              setPlayer(responseData);
              await fetchPlayerGameGradeData(responseData, league);
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
  }, [id, selectedSeason, league, fetchPlayerGameGradeData]);

  console.log(`gameGrades are: ${JSON.stringify(playerGameGrades)}`);

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
                            {player["Tm"] || player["Team"]}
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
                          WCr:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {player["WCr"]}
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
                columns={!league.includes("nba") ? ncaaColumns : tempNbaColumns}
                data={playerGameGrades}
                enableColumnOrdering
              />
            </TableContainer>
          </Card>
        </>
      )}
    </>
  );
};

export default PlayerPage;
