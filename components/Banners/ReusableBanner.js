import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { useSelector } from "react-redux";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import useApi from "hooks/useApi";

// TODO: May have to implemnent seasonSelector component
const ReusableBanner = ({ statistics, teamName }) => {
  const [ncaaD1MensTeamData, setNcaaD1MensTeamData] = useState([]);
  const currentUser = useSelector((state) => state.currentUser?.payload);

  const { data, isError, errorMessage } = useApi(
    `/ncaa-d1-mens-teams/${teamName}`,
    500
  );
  useEffect(() => {
    if (data?.ncaaTeam) setNcaaD1MensTeamData(data.ncaaTeam[0]);
  }, [data]);

  return (
    <>
      {ncaaD1MensTeamData && (
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
              {ncaaD1MensTeamData["Team"]} Team Statistics
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
                          Adj. EPS/Possession:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["adj EPSS/Poss"]}
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
                          EPSS:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["EPSS"]}
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
                          GP:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["GP"]}
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
                          Opp EPS:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["Opp EPS"]}
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
                          Record:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["Record"]}
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
                          Team EPS:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["Team EPS"]}
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
                          W %:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["W %"]}
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
                          Team EPS:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["W %"]}
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
                          Adj. EPSS/POSS:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["adj EPSS/Poss"]}
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
                          Adj Opp EPS/Poss:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["adj Opp EPS/Poss"]}
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
                          Adj. Tm EPS/Poss:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["adj Tm EPS/Poss"]}
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
                          exW:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["exW"]}
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
                          exW %:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["exW %"]}
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
                          exW Regression:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "12px",
                          }}
                          className="ml-10px"
                        >
                          {ncaaD1MensTeamData["exW Regression"]}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </>
      )}
    </>
  );
};

export default ReusableBanner;
