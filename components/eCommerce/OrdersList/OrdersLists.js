import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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

function OrdersList(props) {
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

OrdersList.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  orderID,
  productImg,
  productTitle,
  customer,
  price,
  vendor,
  date,
  status,
  badgeClass,
  rating
) {
  return {
    orderID,
    productImg,
    productTitle,
    customer,
    price,
    vendor,
    date,
    status,
    badgeClass,
    rating,
  };
}

const rows = [
  createData(
    "#SK258",
    "/images/product1.png",
    "Laptop Macos Pro",
    "Colin Firth",
    "$289.50",
    "Boetic Fashion",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK259",
    "/images/product2.png",
    "Smart Camera XD6",
    "Wade Dave",
    "$189.50",
    "Aronic Conver",
    "2021-12-19",
    "Out of Stock",
    "dangerBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK260",
    "/images/product3.png",
    "Pixi 8 Wireless Airphone",
    "Seth Riley",
    "$250.50",
    "Lotu Arnich",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK261",
    "/images/product4.png",
    "Jebble Smart Watch",
    "Gilbert Dan",
    "$289.50",
    "Zoetic Fashion",
    "2021-12-19",
    "Pending",
    "primaryBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK262",
    "/images/product5.png",
    "Admas Airpod x-Zon",
    "Joshua Glen",
    "$289.50",
    "Airpod",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK263",
    "/images/product6.png",
    "Smart Satch F8 Pro",
    "Lewis Milton",
    "$289.50",
    "Smart Satch",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK264",
    "/images/product7.png",
    "Nord Fold ZL",
    "Liam Ethan",
    "$289.50",
    "Nord",
    "2021-12-19",
    "Pending",
    "primaryBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK265",
    "/images/product8.png",
    "Wall Clock Cimbina",
    "Ramon Miles",
    "$289.50",
    "Clock",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK266",
    "/images/product9.png",
    "Galaxo T6 Munsun",
    "Brian Roberto",
    "$289.50",
    "Smart Phone",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK267",
    "/images/product1.png",
    "Laptop Macos Pro",
    "Colin Firth",
    "$289.50",
    "Boetic Fashion",
    "2021-12-19",
    "Pending",
    "primaryBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK268",
    "/images/product2.png",
    "Smart Camera XD6",
    "Wade Dave",
    "$189.50",
    "Aronic Conver",
    "2021-12-19",
    "Out of Stock",
    "dangerBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK269",
    "/images/product3.png",
    "Pixi 8 Wireless Airphone",
    "Seth Riley",
    "$250.50",
    "Lotu Arnich",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK270",
    "/images/product4.png",
    "Jebble Smart Watch",
    "Gilbert Dan",
    "$289.50",
    "Zoetic Fashion",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK271",
    "/images/product5.png",
    "Admas Airpod x-Zon",
    "Joshua Glen",
    "$289.50",
    "Airpod",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK272",
    "/images/product6.png",
    "Smart Satch F8 Pro",
    "Lewis Milton",
    "$289.50",
    "Smart Satch",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK273",
    "/images/product7.png",
    "Nord Fold ZL",
    "Liam Ethan",
    "$289.50",
    "Nord",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK274",
    "/images/product8.png",
    "Wall Clock Cimbina",
    "Ramon Miles",
    "$289.50",
    "Clock",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
  createData(
    "#SK275",
    "/images/product9.png",
    "Galaxo T6 Munsun",
    "Brian Roberto",
    "$289.50",
    "Smart Phone",
    "2021-12-19",
    "Delivered",
    "successBadge",
    "5.0 (61 votes)"
  ),
].sort((a, b) => (a.orderID < b.orderID ? -1 : 1));

export default function OrdersLists() {
  // Select
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

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
          p: "25px 25px 10px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
            Recent Orders
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
                <MenuItem value={0} sx={{ fontSize: "14px" }}>
                  Today
                </MenuItem>
                <MenuItem value={1} sx={{ fontSize: "14px" }}>
                  Last 7 Days
                </MenuItem>
                <MenuItem value={2} sx={{ fontSize: "14px" }}>
                  Last Month
                </MenuItem>
                <MenuItem value={3}>Last 12 Months</MenuItem>
                <MenuItem value={4} sx={{ fontSize: "14px" }}>
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
          }}
        >
          <Table 
            sx={{ minWidth: 950 }} 
            aria-label="custom pagination table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "16px 10px",
                  }}
                >
                  Order ID
                </TableCell>

                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "16px 10px",
                  }}
                >
                  Product
                </TableCell>

                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "16px 10px",
                  }}
                >
                  Customer
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "16px 10px",
                  }}
                >
                  Price
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "16px 10px",
                  }}
                >
                  Vendor
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "16px 10px",
                  }}
                >
                  Date
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "16px 10px",
                  }}
                >
                  Status
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                    padding: "16px 10px",
                  }}
                >
                  Rating
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
                <TableRow key={row.orderID}>
                  <TableCell
                    sx={{
                      width: 100,
                      fontWeight: "500",
                      fontSize: "13px",
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                    }}
                  >
                    {row.orderID}
                  </TableCell>

                  <TableCell
                    sx={{
                      width: 250,
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={row.productImg}
                        alt="Product Img"
                        width={50}
                        className="borderRadius10"
                      />
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "13px",
                        }}
                        className='ml-10px'
                      >
                        {row.productTitle}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.customer}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.price}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.vendor}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.date}
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
                    align="right"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.rating}
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell
                    colSpan={8}
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
                  ActionsComponent={OrdersList}
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
