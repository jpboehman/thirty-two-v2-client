import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
import styles from "@/components/Dashboard/ProjectManagement/AllProjects/AllProjects.module.css";

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

const AllProjects = () => {
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
            All Projects
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{ fontSize: "14px" }}>
                Select
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={select}
                label="Select"
                onChange={handleChange}
                sx={{ fontSize: "14px" }}
              >
                <MenuItem value={0} sx={{ fontSize: "13px" }}>
                  Today
                </MenuItem>
                <MenuItem value={1} sx={{ fontSize: "13px" }}>
                  Last 7 Days
                </MenuItem>
                <MenuItem value={2} sx={{ fontSize: "13px" }}>
                  This Month
                </MenuItem>
                <MenuItem value={3} sx={{ fontSize: "13px" }}>
                  Last 12 Months
                </MenuItem>
                <MenuItem value={4} sx={{ fontSize: "13px" }}>
                  All Time
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            maxHeight: "370px",
            overflowY: "auto",
          }}
        >
          <Table 
            sx={{ minWidth: 700 }} 
            aria-label="simple table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Project Name
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Members
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Budget
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Status
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Completion
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="right"
                >
                  Due Date
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/project-logo1.png"
                      alt="Image"
                      width="25px"
                    />
                    <Typography
                      as="h5"
                      fontWeight="500"
                      fontSize="13px"
                      className="ml-1"
                    >
                      Product UI/UX Design
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img
                      src="/images/user1.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                    <img
                      src="/images/user2.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                    <img
                      src="/images/user3.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                  </div>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $14,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="successBadge">Active</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">70%</Typography>
                    <BorderLinearProgress variant="determinate" value={70} />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  08 Mar 2021
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/project-logo2.png"
                      alt="Image"
                      width="25px"
                    />
                    <Typography
                      as="h5"
                      fontWeight="500"
                      fontSize="13px"
                      className="ml-1"
                    >
                      Public Beta Release
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img
                      src="/images/user4.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                    <img
                      src="/images/user5.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                  </div>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $14,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="primaryBadge">Complete</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">100%</Typography>
                    <BorderLinearProgress variant="determinate" value={100} />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  17 Apr 2021
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/project-logo3.png"
                      alt="Image"
                      width="25px"
                    />
                    <Typography
                      as="h5"
                      fontWeight="500"
                      fontSize="13px"
                      className="ml-1"
                    >
                      SEO Marketing
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img
                      src="/images/user6.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                    <img
                      src="/images/user7.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                  </div>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $12,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="primaryBadge">Complete</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">100%</Typography>
                    <BorderLinearProgress variant="determinate" value={100} />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  10 Sep 2021
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/project-logo4.png"
                      alt="Image"
                      width="25px"
                    />
                    <Typography
                      as="h5"
                      fontWeight="500"
                      fontSize="13px"
                      className="ml-1"
                    >
                      New Office Building
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img
                      src="/images/user1.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                    <img
                      src="/images/user2.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                    <img
                      src="/images/user3.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                  </div>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $9,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="dangerBadge">Pending</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">0%</Typography>
                    <BorderLinearProgress variant="determinate" value={0} />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  06 Aug 2022
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/project-logo5.png"
                      alt="Image"
                      width="25px"
                    />
                    <Typography
                      as="h5"
                      fontWeight="500"
                      fontSize="13px"
                      className="ml-1"
                    >
                      Product Devlopment
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img
                      src="/images/user7.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                    <img
                      src="/images/user8.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                    <img
                      src="/images/user9.png"
                      alt="Image"
                      width="28px"
                      height="28px"
                    />
                  </div>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $16,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="successBadge">Active</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">80%</Typography>
                    <BorderLinearProgress variant="determinate" value={80} />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  08 Mar 2022
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default AllProjects;
