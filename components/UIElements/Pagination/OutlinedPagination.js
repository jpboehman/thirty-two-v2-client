import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function OutlinedPagination() {
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
            mb: '10px'
          }}
        >
          Outlined Pagination
        </Typography>

        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" />
          <Pagination count={10} variant="outlined" color="primary" />
          <Pagination count={10} variant="outlined" color="secondary" />
          <Pagination count={10} variant="outlined" disabled />
        </Stack>
      </Card>
    </>
  );
}
