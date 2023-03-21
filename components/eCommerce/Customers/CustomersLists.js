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
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close'; 

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// Create new Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Create new Modal

function CustomersList(props) {
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

CustomersList.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, image, userName, email, phone, balance, orders, status, badgeClass, joiningDate, projects) {
  return {
    name,
    image,
    userName,
    email,
    phone,
    balance,
    orders,
    status,
    badgeClass,
    joiningDate,
    projects,
  };
}

const rows = [
  createData(
    "Evangelina Mcclain",
    "/images/user1.png",
    "@jstevenson5c",
    "jordansteve@gmail.com",
    "0018 5054 8877",
    "$3365.12",
    "165",
    "Active",
    "successBadge",
    "Jan 1, 2023",
  ),
  createData(
    "Candice Munoz",
    "/images/user2.png",
    "@candice3unoz",
    "candicemunoz@gmail.com",
    "0018 5054 7532",
    "$3550",
    "112",
    "Active",
    "successBadge",
    "Jan 2, 2023",
  ),
  createData(
    "Mike Mcclain",
    "/images/user3.png",
    "@mike4mcclain",
    "mikemcclain@gmail.com",
    "0018 3567 8422",
    "$3928",
    "240",
    "Deactivate",
    "dangerBadge",
    "Jan 3, 2023",
  ),
  createData(
    "Bernard Langley",
    "/images/user4.png",
    "@bernardlangley",
    "bernardlangley@gmail.com",
    "0018 9382 4820",
    "$4932",
    "350",
    "Active",
    "successBadge",
    "Jan 4, 2023",
  ),
  createData(
    "Kristie Hall",
    "/images/user5.png",
    "@kristie7hall",
    "kristiehall@gmail.com",
    "0018 4663 5732",
    "$4922",
    "384",
    "Active",
    "successBadge",
    "Jan 5, 2023",
  ),
  createData(
    "Bolton Obrien",
    "/images/user6.png",
    "@bolton4obrien",
    "boltonobrien@gmail.com",
    "0018 5743 5657",
    "$4663.12",
    "145",
    "Active",
    "successBadge",
    "Jan 6, 2023",
  ),
  createData(
    "Dee Alvarado",
    "/images/user7.png",
    "@dee3alvarado",
    "deealvarado@gmail.com",
    "0018 4532 6666",
    "$2343.12",
    "435",
    "Active",
    "successBadge",
    "Jan 7, 2023",
  ),
  createData(
    "Cervantes Kramer",
    "/images/user8.png",
    "@cervantes4kramer",
    "cervantes4kramer@gmail.com",
    "0018 54545 7878",
    "$345",
    "24",
    "Active",
    "successBadge",
    "Jan 8, 2023",
  ),
  createData(
    "Dejesus Michael",
    "/images/user9.png",
    "@dejesus1michael",
    "dejesusmichael@gmail.com",
    "0018 3552 6678",
    "$3365.12",
    "56",
    "Active",
    "successBadge",
    "Jan 9, 2023",
  ),
  createData(
    "Alissa Nelson",
    "/images/user10.png",
    "@alissa1nelson",
    "alissa1nelson@gmail.com",
    "0018 3354 6822",
    "$3522.12",
    "165",
    "Active",
    "successBadge",
    "Jan 10, 2023",
  ),
  createData(
    "Milton",
    "/images/user11.png",
    "@milton",
    "milton@gmail.com",
    "0018 366 2232",
    "$3434",
    "222",
    "Active",
    "successBadge",
    "Jan 11, 2023",
  ),
  createData(
    "Claude",
    "/images/user12.png",
    "@claude",
    "claude@gmail.com",
    "0018 4614 23211",
    "$4554.12",
    "673",
    "Active",
    "successBadge",
    "Jan 12, 2023",
  ),
  createData(
    "Joshua",
    "/images/user13.png",
    "@joshua",
    "joshua@gmail.com",
    "0018 3354 2532",
    "$2434.12",
    "463",
    "Active",
    "successBadge",
    "Jan 13, 2023",
  ),
  createData(
    "Harvey",
    "/images/user14.png",
    "@harvey",
    "harvey@gmail.com",
    "0018 3331 2224",
    "$453.12",
    "445",
    "Active",
    "successBadge",
    "Jan 14, 2023",
  ),
  createData(
    "Antonio",
    "/images/user15.png",
    "@antonio",
    "antonio@gmail.com",
    "0018 3354 6822",
    "$3522.12",
    "165",
    "Active",
    "successBadge",
    "Jan 15, 2023",
  ),
  createData(
    "Julian",
    "/images/user16.png",
    "@julian",
    "julian@gmail.com",
    "0018 4322 1231",
    "$455.12",
    "165",
    "Active",
    "successBadge",
    "Jan 16, 2023",
  ),
  createData(
    "Harold",
    "/images/user17.png",
    "@harold",
    "harold@gmail.com",
    "0018 455 3323",
    "$3422.12",
    "564",
    "Active",
    "successBadge",
    "Jan 17, 2023",
  ),
  createData(
    "Kingston",
    "/images/user18.png",
    "@kingston",
    "kingston@info.com",
    "0018 3453 4325",
    "$442.12",
    "6776",
    "Active",
    "successBadge",
    "Jan 18, 2023",
  ),
].sort((a, b) => (a.name < b.name ? -1 : 1));

export default function CustomersLists() {
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
 
  // Create new modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  // End Create new Modal

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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
            Customers Lists
          </Typography>

          <Button
            onClick={handleClickOpen}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "12px 20px",
              color: "#fff !important",
            }}
          >
            <AddIcon
              sx={{ position: "relative", top: "-1px" }}
              className='mr-5px'
            />{" "}
            Create New
          </Button>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table 
            sx={{ minWidth: 1100 }} 
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
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Email
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Phone
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Balance
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Orders
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
                  Joining Date
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
                      width: 250,
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
                        ml: '10px'
                      }}
                    >
                      <img
                        src={row.image}
                        alt="User"
                        width={40}
                        height={40}
                        className="borRadius100"
                      />
                      <Box className='ml-10px'>
                        <Typography
                          as="h5"
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
                    align="center"
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
                    align="center"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                      fontSize: "13px",
                    }}
                  >
                    {row.phone}
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
                    {row.balance}
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
                    {row.orders}
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
                    {row.joiningDate}
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
                    colSpan={7}
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
                  ActionsComponent={CustomersList}
                  style={{ borderBottom: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>

      {/* Create new modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#EDEFF5",
              borderRadius: "8px",
              padding: "20px 20px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              Create New
            </Typography>

            <IconButton
              aria-label="remove"
              size="small"
              onClick={handleClose}
            >
              <ClearIcon />
            </IconButton>
          </Box>

          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Box
              sx={{
                background: "#fff",
                padding: "20px 20px",
                borderRadius: "8px",
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={12} lg={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Image
                  </Typography>
                  <TextField
                    autoComplete="image"
                    name="image"
                    required
                    fullWidth
                    id="image"
                    type="file"
                    autoFocus
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Name
                  </Typography>
                  <TextField
                    autoComplete="name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    User Name
                  </Typography>
                  <TextField
                    autoComplete="user-name"
                    name="userName"
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    autoFocus
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    autoComplete="email"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="example@info.com"
                    autoFocus
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Phone Number
                  </Typography>
                  <TextField
                    autoComplete="phone"
                    name="phone"
                    required
                    fullWidth
                    id="phone"
                    label="0018 5054 8877"
                    autoFocus
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Balance
                  </Typography>
                  <TextField
                    autoComplete="balance"
                    name="balance"
                    required
                    fullWidth
                    id="balance"
                    label="Balance"
                    autoFocus
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid>

                <Grid item xs={12} textAlign="end">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 1,
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "13px",
                      padding: "12px 20px",
                    }}
                  >
                    <AddIcon
                      sx={{
                        position: "relative",
                        top: "-2px",
                      }}
                      className='mr-5px'
                    />{" "}
                    Create New
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
}
