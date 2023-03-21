import * as React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
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
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CustomersDetail(props) {
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

CustomersDetail.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  name,
  userName,
  image,
  email,
  rolls,
  status,
  badgeClass,
  projects
) {
  return {
    name,
    userName,
    image,
    email,
    rolls,
    status,
    badgeClass,
    projects,
  };
}

const rows = [
  createData(
    "Evangelina Mcclain",
    "@jstevenson5c",
    "/images/user1.png",
    "jordansteve@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "165"
  ),
  createData(
    "Candice Munoz",
    "@candice3unoz",
    "/images/user2.png",
    "candicemunoz@gmail.com",
    "Administrator",
    "Active",
    "successBadge",
    "120"
  ),
  createData(
    "Mike Mcclain",
    "@mike4mcclain",
    "/images/user3.png",
    "mikemcclain@gmail.com",
    "Contributor",
    "Active",
    "successBadge",
    "220"
  ),
  createData(
    "Bernard Langley",
    "@bernardlangley",
    "/images/user4.png",
    "bernardlangley@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "122"
  ),
  createData(
    "Kristie Hall",
    "@kristie7hall",
    "/images/user5.png",
    "kristiehall@gmail.com",
    "Contributor",
    "Active",
    "successBadge",
    "360"
  ),
  createData(
    "Bolton Obrien",
    "@bolton4obrien",
    "/images/user6.png",
    "boltonobrien@gmail.com",
    "Administrator",
    "Active",
    "successBadge",
    "250"
  ),
  createData(
    "Dee Alvarado",
    "@dee3alvarado",
    "/images/user7.png",
    "deealvarado@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "140"
  ),
  createData(
    "Cervantes Kramer",
    "@cervantes4kramer",
    "/images/user8.png",
    "cervantes4kramer@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "345"
  ),
  createData(
    "Dejesus Michael",
    "@dejesus1michael",
    "/images/user9.png",
    "dejesusmichael@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "323"
  ),
  createData(
    "Alissa Nelson",
    "@alissa1nelson",
    "/images/user10.png",
    "alissa1nelson@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "451"
  ),
  createData(
    "Milton",
    "@milton",
    "/images/user11.png",
    "milton@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "432"
  ),
  createData(
    "Claude",
    "@claude",
    "/images/user12.png",
    "claude@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "543"
  ),
  createData(
    "Joshua",
    "@joshua",
    "/images/user13.png",
    "joshua@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "543"
  ),
  createData(
    "Harvey",
    "@harvey",
    "/images/user14.png",
    "harvey@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "432"
  ),
  createData(
    "Antonio",
    "@antonio",
    "/images/user15.png",
    "antonio@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "765"
  ),
  createData(
    "Julian",
    "@julian",
    "/images/user16.png",
    "julian@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "678"
  ),
  createData(
    "Harold",
    "@harold",
    "/images/user17.png",
    "harold@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "165"
  ),
  createData(
    "Kingston",
    "@kingston",
    "/images/user18.png",
    "kingston@info.com",
    "Agent",
    "Active",
    "successBadge",
    "165"
  ),
].sort((a, b) => (a.name < b.name ? -1 : 1));

export default function CustomersDetails() {
  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            mb: "20px",
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
            Customers Details
          </Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table 
            sx={{ minWidth: 900 }} 
            aria-label="custom pagination table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Name
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Email
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Rolls
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Status
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Projects
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Action
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
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox {...label} size="small" />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ml: "10px",
                      }}
                    >
                      <img
                        src={row.image}
                        alt="User"
                        width={40}
                        height={40}
                        className="borRadius100"
                      />
                      <Box className="ml-10px">
                        <Typography
                          as="h4"
                          sx={{
                            fontWeight: "500",
                            fontSize: "13.5px",
                          }}
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
                      paddingTop: "13px",
                      paddingBottom: "13px",
                    }}
                  >
                    {row.email}
                  </TableCell>

                  <TableCell
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                      fontSize: "13px",
                    }}
                  >
                    {row.rolls}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 500,
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    <span className={row.badgeClass}>{row.status}</span>
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                      fontSize: "13px",
                    }}
                  >
                    {row.projects}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{ borderBottom: "1px solid #F7FAFF" }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                      }}
                    >
                      <Tooltip title="Remove" placement="top">
                        <IconButton
                          aria-label="remove"
                          size="small"
                          color="danger"
                          className="danger"
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Rename" placement="top">
                        <IconButton
                          aria-label="rename"
                          size="small"
                          color="primary"
                          className="primary"
                        >
                          <DriveFileRenameOutlineIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell
                    colSpan={5}
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
                  ActionsComponent={CustomersDetail}
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
