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

const OrderSummary = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 25px 15px",
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
          Order Summary
        </Typography>

        <TableContainer 
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table aria-label="simple table" className='dark-table'>
            <TableBody>
              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="left"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px", 
                    fontWeight: '500'
                  }}
                >
                  Sub Total :
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px", 
                    fontWeight: '500'
                  }}
                >
                  $760.00
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="left"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px", 
                    fontWeight: '500'
                  }}
                >
                  Discount :
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px", 
                    fontWeight: '500'
                  }}
                >
                  $60.00
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="left"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px", 
                    fontWeight: '500'
                  }}
                >
                  Shipping Charge :
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px", 
                    fontWeight: '500'
                  }}
                >
                  $50.00
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="left"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px", 
                    fontWeight: '500'
                  }}
                >
                  Estimated Tax :
                </TableCell>

                <TableCell 
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px", 
                    fontWeight: '500'
                  }}
                >
                  $00.00
                </TableCell>
              </TableRow>

              <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  align="left"
                  colSpan={3}
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px", 
                    fontWeight: '500',
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
                    fontWeight: '500',
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
  
export default OrderSummary;