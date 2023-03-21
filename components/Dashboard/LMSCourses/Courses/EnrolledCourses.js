import * as React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
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
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Link from "@mui/material/Link";

function EnrolledCourse(props) {
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

EnrolledCourse.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  courseName,
  courseLink,
  image,
  result,
  badgeClass,
  expirationTime,
  endTime
) {
  return {
    courseName,
    courseLink,
    image,
    result,
    badgeClass,
    expirationTime,
    endTime,
  };
}

const rows = [
  createData(
    "Node.js for Beginners: Go From Zero to Hero with Node.js",
    "#",
    "/images/course-brand1.png",
    "87%",
    "primaryBadge",
    "2021-12-19 10:00 AM",
    "2021-12-19 12:00 PM"
  ),
  createData(
    "Learn the fundamentals of working with Angular and how to create",
    "#",
    "/images/course-brand2.png",
    "Failed",
    "dangerBadge",
    "2021-12-19 11:00 AM",
    "2021-12-19 01:00 PM"
  ),
  createData(
    "Build an iOS Application in Swift Learn the fundamentals",
    "#",
    "/images/course-brand3.png",
    "Passed",
    "successBadge",
    "2021-12-19 02:00 PM",
    "2021-12-19 04:00 PM"
  ),
  createData(
    "Programming Language Become a React Native Developer",
    "#",
    "/images/course-brand4.png",
    "90%",
    "primaryBadge",
    "2021-12-19 04:00 PM",
    "2021-12-19 06:00 PM"
  ),
  createData(
    "Node.js for Beginners Go From Zero to Hero with Node.js",
    "#",
    "/images/course-brand1.png",
    "87%",
    "primaryBadge",
    "2021-12-19 10:00 AM",
    "2021-12-19 12:00 PM"
  ),
  createData(
    "Learn the fundamentals of working with React and how to create",
    "#",
    "/images/course-brand2.png",
    "Failed",
    "dangerBadge",
    "2021-12-19 11:00 AM",
    "2021-12-19 01:00 PM"
  ),
  createData(
    "Build an Android Application in Swift Learn the fundamentals",
    "#",
    "/images/course-brand3.png",
    "Passed",
    "successBadge",
    "2021-12-19 02:00 PM",
    "2021-12-19 04:00 PM"
  ),
  createData(
    "Programming Language Become a React.js Developer",
    "#",
    "/images/course-brand4.png",
    "90%",
    "primaryBadge",
    "2021-12-19 04:00 PM",
    "2021-12-19 06:00 PM"
  ),
].sort((a, b) => (a.courseName < b.courseName ? -1 : 1));

export default function EnrolledCourses() {
  // Table
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
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <Table 
          sx={{ minWidth: 650 }} 
          aria-label="custom pagination table"
          className="dark-table"
        >
          <TableHead sx={{ background: "#F7FAFF" }}>
            <TableRow>
              <TableCell
                sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
              >
                Courses
              </TableCell>

              <TableCell
                align="center"
                sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
              >
                Result
              </TableCell>

              <TableCell
                sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
              >
                Start Time
              </TableCell>

              <TableCell
                align="right"
                sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
              >
                End Time
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.courseName}>
                <TableCell
                  style={{
                    width: 350,
                    borderBottom: "1px solid #F7FAFF",
                    paddingTop: "13px",
                    paddingBottom: "13px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={row.image}
                      alt="Product Img"
                      width={65}
                      className="borderRadius10"
                    />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "13.5px",
                      }}
                      className="ml-10px"
                    >
                      <Link
                        href={row.courseLink}
                        underline="none"
                        color="#260944"
                      >
                        {row.courseName}
                      </Link>
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  style={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    paddingTop: "13px",
                    paddingBottom: "13px",
                  }}
                >
                  <span className={row.badgeClass}>{row.result}</span>
                </TableCell>

                <TableCell
                  style={{
                    width: 120,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    paddingTop: "13px",
                    paddingBottom: "13px",
                  }}
                >
                  {row.expirationTime}
                </TableCell>
                
                <TableCell
                  align="right"
                  style={{
                    width: 120,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    paddingTop: "13px",
                    paddingBottom: "13px",
                  }}
                >
                  {row.endTime}
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
                colSpan={4}
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
                ActionsComponent={EnrolledCourse}
                style={{ borderBottom: "none" }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
