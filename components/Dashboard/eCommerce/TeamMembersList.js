import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
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

function TeamMembersLists(props) {
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

TeamMembersLists.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  userImg,
  name,
  userName,
  email,
  roleIcon,
  role,
  status,
  badgeClass
) {
  return {
    userImg,
    name,
    userName,
    email,
    roleIcon,
    role,
    status,
    badgeClass,
  };
}

const rows = [
  createData(
    "/images/user1.png",
    "Jordan Stevenson",
    "@jstevenson5c",
    "jordansteven@admash.com",
    "ri-macbook-line",
    "Admin",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user2.png",
    "Lucile Young",
    "@lyoung4a",
    "lucile@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user3.png",
    "Francis Frank",
    "@ffrank7e",
    "frank43@admash.com",
    "ri-shield-user-fill",
    "Maintainer",
    "Inactive",
    "dangerBadge"
  ),
  createData(
    "/images/user4.png",
    "Phoebe Patterson",
    "@ppatterson2g",
    "phoebe57@admash.com",
    "ri-settings-2-line",
    "Author",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user5.png",
    "Wade Dave",
    "@wadedave",
    "wadedave1@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user6.png",
    "Seth Ivan",
    "@sethivan",
    "sethivansds@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user7.png",
    "Riley",
    "@riley",
    "riley@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user8.png",
    "Gilbert",
    "@gilbert",
    "gilbert@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user9.png",
    "Jorge",
    "@jorge",
    "jorge@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user10.png",
    "Dan Brian",
    "@danbrian",
    "danbrian@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user11.png",
    "Roberto",
    "@roberto",
    "roberto@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user12.png",
    "Ramon",
    "@ramon",
    "ramon@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user13.png",
    "Miles Liam",
    "@milesliam",
    "milesliam@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
  createData(
    "/images/user14.png",
    "Nathaniel",
    "@nathaniel",
    "nathaniel@admash.com",
    "ri-edit-line",
    "Editor",
    "Active",
    "successBadge"
  ),
].sort((a, b) => (a.name < b.name ? -1 : 1));
export default function TeamMembersList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
          p: "25px 25px 10px",
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
            Team Members List
          </Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table 
            sx={{ minWidth: 600 }} 
            aria-label="custom pagination table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}>
                  User
                </TableCell>

                <TableCell style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}>
                  Email
                </TableCell>

                <TableCell
                  align="center"
                  style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Role
                </TableCell>

                <TableCell
                  align="center"
                  style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Status
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
                    style={{ width: 250, borderBottom: "1px solid #F7FAFF" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={row.userImg}
                        alt="Product Img"
                        width={40}
                        height={40}
                        className="borRadius100"
                      />

                      <Box className="ml-10px">
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                          as="h5"
                        >
                          {row.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#A9A9C8",
                          }}
                        >
                          {row.userName}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "13px",
                    }}
                  >
                    {row.email}
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px", }}
                  >
                    <i className={row.roleIcon} /> {row.role}
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{
                      fontWeight: 500,
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                    }}
                  >
                    <span className={row.badgeClass}>{row.status}</span>
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
                  ActionsComponent={TeamMembersLists}
                  style={{ borderBottom: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
