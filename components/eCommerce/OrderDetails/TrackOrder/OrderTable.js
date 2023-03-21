import * as React from 'react';
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const OrderTable = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 25px 20px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            mb: "20px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Order #VL2667
          </Typography>

          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "13px",
              padding: "10px 20px",
              color: "#fff !important",
            }}
          >
            <AddIcon
              sx={{ position: "relative", top: "-1px" }}
              className='mr-5px'
            />{" "}
            Invoice
          </Button>
        </Box>

        <TableContainer 
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table 
            sx={{ minWidth: 650 }} 
            aria-label="simple table"
            className="dark-table"
          >
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
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                  }}
                >
                  Price
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
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                  }}
                >
                  Total Amount
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                        fontWeight: "600",
                        fontSize: "12px",
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
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $100.00
                </TableCell>

                <TableCell 
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  02
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$200</b>
                </TableCell>
              </TableRow>
              
              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                        fontWeight: "600",
                        fontSize: "12px",
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
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $200.00
                </TableCell>

                <TableCell 
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  01
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$200</b>
                </TableCell>
              </TableRow>
              
              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                        fontWeight: "600",
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
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $120.00
                </TableCell>

                <TableCell 
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  01
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$120</b>
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                        fontWeight: "600",
                        fontSize: "12px",
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
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $120.00
                </TableCell>

                <TableCell 
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  01
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$120</b>
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                        fontWeight: "600",
                        fontSize: "12px",
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
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  $120.00
                </TableCell>

                <TableCell 
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  01
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$120</b>
                </TableCell>
              </TableRow>
 
              {/* For Total Amount */}
              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="right"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: '600'
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
                    fontWeight: '600'
                  }}
                >
                  $760.00
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="right"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: '600'
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
                    fontWeight: '600'
                  }}
                >
                  $60.00
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="right"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: '600'
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
                    fontWeight: '600'
                  }}
                >
                  $50.00
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="right"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: '600'
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
                    fontWeight: '600'
                  }}
                >
                  $00.00
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="right"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                    fontWeight: '600',
                    color: "#000"
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
                    fontWeight: '600',
                    color: "#000"
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
  )
}
  
export default OrderTable;