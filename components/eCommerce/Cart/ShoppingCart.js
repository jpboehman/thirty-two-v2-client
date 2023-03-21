import * as React from 'react';
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';

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
            mb: "20px",
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
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                  }}
                >
                  Total Amount
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                  }}
                >
                  Action
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
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$200</b>
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <Tooltip title="Remove" placement="left" arrow>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
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
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$200</b>
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <Tooltip title="Remove" placement="left" arrow>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
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
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$120</b>
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <Tooltip title="Remove" placement="left" arrow>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
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
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$120</b>
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <Tooltip title="Remove" placement="left" arrow>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
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
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <b>$120</b>
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                  }}
                >
                  <Tooltip title="Remove" placement="left" arrow>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={2}>
          <Typography fontWeight="500" mb="5px">Add a Note:</Typography>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Some demo text ... "
            style={{ 
              width: '100%',
              background: '#FFFFFF',
              border: '1px solid #E7EBF5',
              borderRadius: '10px',
              padding: '10px'
            }}
            className="dark-textarea"
          />

          <Box align="end">
            <Link href="/ecommerce/checkout" className="text-decoration-none">
              <Button 
                variant="contained" 
                startIcon={<ShoppingCartIcon sx={{ color: "#fff !important" }} />}
                sx={{
                  p: "10px 25px",
                  mt: '10px',
                  textTransform: 'capitalize',
                  color: "#fff !important",
                }}
              >
                Checkout
              </Button>
            </Link>
          </Box>
        </Box>
      </Card>
    </>
  )
}
  
export default ShoppingCart;