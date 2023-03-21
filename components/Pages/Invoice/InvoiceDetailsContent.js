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
import Button from "@mui/material/Button";

const InvoiceDetailsContent = () => {
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
            justifyContent: "space-between",
          }}
        >
          {/* Invoice Details */}
          <Box>
            <Typography
              as="h3"
              sx={{
                fontSize: 18,
                fontWeight: 500,
                mb: "15px",
              }}
            >
              Invoice Details
            </Typography>

            {/* Billed To: */}
            <Box mb={3}>
              <Typography
                as="h3"
                sx={{
                  fontSize: 15,
                  fontWeight: 500,
                  mb: "5px",
                }}
              >
                Billed To:
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  mb: "5px",
                }}
              >
                Thomas Adison
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                32104 Main
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                Apt. 4c
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                Springfield ST 54321
              </Typography>
            </Box>

            {/* Payment : */}
            <Box mb={3}>
              <Typography
                as="h3"
                sx={{
                  fontSize: 15,
                  fontWeight: 500,
                  mb: "5px",
                }}
              >
                Payment :
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  mb: "5px",
                }}
              >
                Total Due: $12,110.55
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                Bank Name: American Bank
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                Country: United States
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                IBAN: ETD95476213874685
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                SWIFT code: BR91905
              </Typography>
            </Box>
          </Box>

          {/* Invoice id */}
          <Box align="end">
            <Typography
              as="h3"
              sx={{
                fontSize: 18,
                fontWeight: 500,
                mb: "15px",
              }}
            >
              Invoice #4987
            </Typography>

            {/* Shipped To: */}
            <Box mb={3}>
              <Typography
                as="h3"
                sx={{
                  fontSize: 15,
                  fontWeight: 500,
                  mb: "5px",
                }}
              >
                Shipped To:
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  mb: "5px",
                }}
              >
                Thomas Adison
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                32104 Main
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                Apt. 4c
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mb: "5px",
                }}
              >
                Springfield ST 54321
              </Typography>
            </Box>

            {/* Order Date : */}
            <Box mb={3}>
              <Typography
                as="h3"
                sx={{
                  fontSize: 15,
                  fontWeight: 500,
                  mb: "5px",
                }}
              >
                Order Date:
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  mb: "5px",
                }}
              >
                October 14, 2021
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Order Summary */}
        <Typography
          as="h3"
          sx={{
            fontSize: 16,
            fontWeight: 500,
            mb: "10px",
          }}
        >
          Order Summary
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table sx={{ minWidth: 450 }} className="dark-table">
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                  }}
                >
                  Item
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                  }}
                >
                  Quantity
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                  }}
                >
                  Unit Price
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
                    fontSize: "13px",
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
                        fontSize: "13px",
                      }}
                      className='ml-10px'
                    >
                      Laptop Macos Pro
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  2
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  200
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  $400
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
                        fontSize: "13px",
                      }}
                      className='ml-10px'
                    >
                      Smart Camera XD6
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  1
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  1
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
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
                    fontSize: "13px",
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
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  1
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  1
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
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
                  component="th"
                  scope="row"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
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
                        fontSize: "13px",
                      }}
                      className='ml-10px'
                    >
                      Jebble Smart Watch
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  1
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  1
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
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
                  component="th"
                  scope="row"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
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
                        fontSize: "13px",
                      }}
                      className='ml-10px'
                    >
                      Airpod
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  1
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  1
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                  }}
                >
                  $120.00
                </TableCell>
              </TableRow>

              {/* Sub Total */}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="right"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
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
                    fontSize: "13px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  $960.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  colSpan={3}
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
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
                    fontSize: "13px",
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
                  colSpan={3}
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
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
                    fontSize: "13px",
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
                  colSpan={3}
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
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
                    fontSize: "13px",
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
                  colSpan={3}
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
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
                    fontSize: "14px",
                    padding: "8px 10px",
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  $850.00
                </TableCell>
              </TableRow>

              {/* Print & Button Button */}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="right"
                  colSpan={4}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  <Button
                    color="primary"
                    style={{
                      background: "rgba(117, 127, 239, 0.1)",
                      border: "1px solid rgba(117, 127, 239, 0.1)",
                      borderRadius: "8px",
                      textTransform: "capitalize",
                      fontWeight: "500",
                      padding: "6px 20px",
                    }}
                  >
                    Print
                  </Button>

                  <Button
                    style={{
                      background: "#757FEF",
                      border: "1px solid #757FEF",
                      borderRadius: "8px",
                      textTransform: "capitalize",
                      fontWeight: "500",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                    className='ml-10px'
                  >
                    download
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default InvoiceDetailsContent;
