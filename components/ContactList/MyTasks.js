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

function createData(name, startDate, endDate, status, badgeClass, budget) {
  return {
    name,
    startDate,
    endDate,
    status,
    badgeClass,
    budget
  };
}

const rows = [
  createData(
    "Public Beta Release",
    "1 Jan 2022",
    "1 Apr 2022",
    "Completed",
    "successBadge",
    "$1250"
  ),
  createData(
    "Fix Platform Errors",
    "1 Mar 2022",
    "1 May 2022",
    "Completed",
    "successBadge",
    "$1550"
  ),
  createData(
    "Launch our Mobile App",
    "15 Apr 2022",
    "15 Jun 2022",
    "On Going",
    "primaryBadge",
    "$2500"
  ),
  createData(
    "Add the New Pricing Page",
    "15 May 2022",
    "15 Jun 2022",
    "Pending",
    "dangerBadge",
    "$100"
  ),
  createData(
    "Redesign New Online Shop",
    "15 Jun 2022",
    "15 Aug 2022",
    "On Going",
    "primaryBadge",
    "$1000"
  ),
  createData(
    "Material Ui Design",
    "15 Jul 2022",
    "15 Sep 2022",
    "On Going",
    "primaryBadge",
    "$2200"
  ),
  createData(
    "Add Progress Track",
    "15 Mar 2022",
    "15 May 2022",
    "Completed",
    "successBadge",
    "$1400"
  ),
  createData(
    "Web Design",
    "15 Aug 2022",
    "15 Dec 2022",
    "On Going",
    "primaryBadge",
    "$4000"
  ),
  createData(
    "Web Development",
    "15 Nov 2022",
    "15 Jan 2023",
    "On Going",
    "primaryBadge",
    "$400"
  ),
  createData(
    "React App Development",
    "15 Jan 2022",
    "15 Mar 2022",
    "Completed",
    "successBadge",
    "$1200"
  ),
  createData(
    "eCommerce Development",
    "15 Mar 2022",
    "15 May 2022",
    "On Going",
    "primaryBadge",
    "$250"
  ),
  createData(
    "App Development",
    "15 May 2022",
    "15 Jul 2022",
    "On Going",
    "primaryBadge",
    "$3400"
  ),
].sort((a, b) => (a.name < b.name ? -1 : 1));

const MyTasks = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

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
            sx={{ minWidth: 700 }} 
            aria-label="custom pagination table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px", 
                  }}
                >
                  Name
                </TableCell>

                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px", 
                  }}
                >
                  Start Date
                </TableCell>

                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px", 
                  }}
                >
                  End Date
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px", 
                  }}
                >
                  Status
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px", 
                  }}
                >
                  Budget
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
                <TableRow key={row.name}>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      fontSize: "13px",
                      borderBottom: "1px solid #F7FAFF",
                      color: "#260944", 
                      pt: '16px',
                      pb: '16px',
                    }}
                  >
                    {row.name}
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF", 
                      fontSize: "13px", 
                      pt: '16px',
                      pb: '16px',
                    }}
                  >
                    {row.startDate}
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF", 
                      fontSize: "13px", 
                      pt: '16px',
                      pb: '16px',
                    }}
                  >
                    {row.endDate}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 500,
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "11px", 
                      pt: '16px',
                      pb: '16px',
                    }}
                  >
                    <span className={row.badgeClass}>{row.status}</span>
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF", 
                      fontSize: "13px", 
                      pt: '16px',
                      pb: '16px',
                    }}
                    align="center"
                  >
                    {row.budget}
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
