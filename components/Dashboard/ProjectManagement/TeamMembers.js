import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#757FEF" : "#308fe8",
  },
}));

const TeamMembersData = [
  {
    id: "1",
    image: "/images/user1.png",
    name: "Jordan Stevenson",
    userName: "@jstevenson5c",
    hours: "110h : 150m",
    task: "258",
    progress: "25",
  },
  {
    id: "2",
    image: "/images/user2.png",
    name: "Lydia Reese",
    userName: "@lreese3b",
    hours: "220h : 58m",
    task: "158",
    progress: "50",
  },
  {
    id: "3",
    image: "/images/user3.png",
    name: "Easin Arafat",
    userName: "@jstevenson5c",
    hours: "315h : 40m",
    task: "250",
    progress: "30",
  },
  {
    id: "4",
    image: "/images/user4.png",
    name: "Laurent Perrier",
    userName: "@laurentperrier",
    hours: "90h : 50m",
    task: "200",
    progress: "75",
  },
  {
    id: "5",
    image: "/images/user5.png",
    name: "Laurent Perrier",
    userName: "@laurentperrier",
    hours: "90h : 50m",
    task: "200",
    progress: "75",
  },
];

const TeamMembers = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            marginBottom: "15px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Team Members
          </Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            maxHeight: "440px",
            overflowY: "auto",
          }}
        >
          <Table 
            sx={{ minWidth: 450 }} 
            aria-label="simple table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Member
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Hours
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Task
                </TableCell>
                
                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {TeamMembersData.map((team) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={team.id}
                >
                  <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={team.image}
                        alt="Image"
                        width="40px"
                        height="40px"
                        className="borRadius100"
                      />
                      <Box className="ml-1">
                        <Typography as="h5" fontWeight="500" fontSize="13px">
                          {team.name}
                        </Typography>
                        <Typography fontSize="13px">{team.userName}</Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                    {team.hours}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                  >
                    {team.task}
                  </TableCell>

                  <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                    <Box>
                      <Typography fontSize="12px">{team.progress}%</Typography>
                      <BorderLinearProgress
                        variant="determinate"
                        value={team.progress}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default TeamMembers;
