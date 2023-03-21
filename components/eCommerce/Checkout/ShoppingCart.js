import * as React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ShoppingCart = () => {
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
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: "10px",
          }}
        >
          Shopping Cart
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table aria-label="simple table" className="dark-table">
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                  }}
                >
                  Product
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                  }}
                >
                  Price
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
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
                      src="/images/product1.png"
                      alt="Product Img"
                      width={50}
                      className="borderRadius10"
                    />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                      className='ml-10px'
                    >
                      Laptop Macos Pro
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $100.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
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
                      src="/images/product2.png"
                      alt="Product Img"
                      width={50}
                      className="borderRadius10"
                    />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                      className='ml-10px'
                    >
                      Smart Camera XD6
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $200.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
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
                      src="/images/product3.png"
                      alt="Product Img"
                      width={50}
                      className="borderRadius10"
                    />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                      className='ml-10px'
                    >
                      Pixi 8 Wireless Airphone
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $120.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
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
                      src="/images/product4.png"
                      alt="Product Img"
                      width={50}
                      className="borderRadius10"
                    />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                      className='ml-10px'
                    >
                      Jebble Smart Watch
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $120.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
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
                      src="/images/product5.png"
                      alt="Product Img"
                      width={50}
                      className="borderRadius10"
                    />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                      className='ml-10px'
                    >
                      Airpod
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $120.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  Sub Total :
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  $760.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  Discount :
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  $60.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  Shipping Charge :
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  $50.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  Estimated Tax :
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  $00.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  Total (USD) :
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  $750.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default ShoppingCart;
