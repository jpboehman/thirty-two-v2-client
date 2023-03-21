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
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  productName,
  productImg,
  productId,
  price,
  stockAvailable,
  stockTotal,
  stockStatus
) {
  return {
    productName,
    productImg,
    productId,
    price,
    stockAvailable,
    stockTotal,
    stockStatus,
  };
}

const rows = [
  createData(
    "Admas airpod x-Zon",
    "/images/product5.png",
    "ID: A3652",
    "$289.50",
    "450",
    "550",
    "Stock"
  ),
  createData(
    "Smart watch F8 Pro",
    "/images/product6.png",
    "ID: A3653",
    "$189.50",
    "430",
    "550",
    "Stock"
  ),
  createData(
    "Nord Fold ZL",
    "/images/product7.png",
    "ID: A3654",
    "$280.50",
    "410",
    "550",
    "Stock"
  ),
  createData(
    "Wall Clock Cimbina",
    "/images/product8.png",
    "ID: A3655",
    "$389.50",
    "420",
    "550",
    "Stock"
  ),
  createData(
    "Galaxo T6 Munsun",
    "/images/product9.png",
    "ID: A3656",
    "$289.50",
    "440",
    "550",
    "Stock"
  ),
  createData(
    "Laptop Macos Pro",
    "/images/product1.png",
    "ID: A3657",
    "$489.50",
    "340",
    "550",
    "Stock"
  ),
];

const BestSellingProducts = () => {
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
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Best Selling Products
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={select}
                label="Select"
                onChange={handleChange}
              >
                <MenuItem value={0}>Today</MenuItem>
                <MenuItem value={1}>Last 7 Days</MenuItem>
                <MenuItem value={2}>Last Month</MenuItem>
                <MenuItem value={3}>Last 12 Months</MenuItem>
                <MenuItem value={4}>All Time</MenuItem>
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
            sx={{ minWidth: 450 }} 
            aria-label="simple table"
            className="dark-table"
          >
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.productName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "15px 10px",
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
                          {row.productName}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#A9A9C8",
                          }}
                        >
                          {row.productId}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                  >
                    {row.price}
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "13px"
                    }}
                  >
                    {row.stockAvailable}{" "}
                    <Typography
                      component="span"
                      sx={{ color: "#A9A9C8", fontSize: "12px" }}
                    >
                      {row.stockTotal}
                    </Typography>
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      color: "#757FEF",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    {row.stockStatus}
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

export default BestSellingProducts;
