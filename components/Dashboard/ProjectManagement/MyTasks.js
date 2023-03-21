import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Tooltip from "@mui/material/Tooltip";
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function MyTask(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

MyTask.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(task, dedline, status, badgeClass, assignee, memberName) {
  return {
    task,
    dedline,
    status,
    badgeClass,
    assignee,
    memberName,
  };
}

const rows = [
  createData(
    "Public Beta Release",
    "14 Feb 2022",
    "On Going",
    "successBadge",
    "/images/user1.png",
    "Wade"
  ),
  createData(
    "Fix Platform Errors",
    "15 Mar 2022",
    "Completed",
    "primaryBadge",
    "/images/user2.png",
    "Dave"
  ),
  createData(
    "Launch our Mobile App",
    "15 Apr 2022",
    "On Going",
    "successBadge",
    "/images/user3.png",
    "Liam"
  ),
  createData(
    "Add the New Pricing Page",
    "15 May 2022",
    "Pending",
    "dangerBadge",
    "/images/user4.png",
    "Nathaniel"
  ),
  createData(
    "Redesign New Online Shop",
    "15 Jun 2022",
    "On Going",
    "successBadge",
    "/images/user5.png",
    "Lewis"
  ),
  createData(
    "Material Ui Design",
    "15 Jul 2022",
    "On Going",
    "successBadge",
    "/images/user6.png",
    "Milton"
  ),
  createData(
    "Add Progress Track",
    "15 Mar 2022",
    "Completed",
    "primaryBadge",
    "/images/user7.png",
    "Claude"
  ),
  createData(
    "Web Design",
    "15 Aug 2022",
    "On Going",
    "successBadge",
    "/images/user8.png",
    "Harvey"
  ),
  createData(
    "Web Development",
    "15 Nov 2022",
    "On Going",
    "successBadge",
    "/images/user9.png",
    "Blake"
  ),
  createData(
    "React App Development",
    "15 Dec 2022",
    "Completed",
    "primaryBadge",
    "/images/user10.png",
    "Antonio"
  ),
  createData(
    "eCommerce Development",
    "15 Nov 2022",
    "On Going",
    "successBadge",
    "/images/user11.png",
    "Conner"
  ),
  createData(
    "App Development",
    "15 Nov 2022",
    "On Going",
    "successBadge",
    "/images/user12.png",
    "Shane"
  ),
].sort((a, b) => (a.task < b.task ? -1 : 1));

const MyTasks = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            paddingBottom: "10px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            My Tasks
          </Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table 
            sx={{ minWidth: 500 }} 
            aria-label="custom pagination table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "15px 10px",
                  }}
                >
                  Task
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "15px 10px",
                  }}
                >
                  Dedline
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "15px 10px",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "15px 10px",
                  }}
                >
                  Assignee
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.task}>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      fontSize: "13px",
                      borderBottom: "1px solid #F7FAFF",
                      color: "#260944",
                      padding: "9px 10px",
                    }}
                  >
                    <Checkbox {...label} size="small" />
                    {row.task}
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "9px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.dedline}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 500,
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "9px 10px",
                    }}
                  >
                    <span className={row.badgeClass}>{row.status}</span>
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "9px 10px",
                    }}
                  >
                    <Tooltip title={row.memberName} placement="left">
                      <img
                        src={row.assignee}
                        alt="Img"
                        wisth="30px"
                        height="30px"
                        className="borRadius100"
                      />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell
                    colSpan={4}
                    style={{ borderBottom: "1px solid #F7FAFF" }}
                  />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={8}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={MyTask}
                  style={{ borderBottom: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default MyTasks;
