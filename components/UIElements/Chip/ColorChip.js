import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChip() {
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
          Color Chip
        </Typography>

        <Stack spacing={1} alignItems="center" className="chip-gap-for-rtl">
          <Stack direction="row" spacing={1}>

            <Chip 
              label="Primary" 
              color="primary" 
              className="whiteColor"
            />

            <Chip 
              label="Secondary" 
              color="secondary" 
              className="whiteColor"
            />

            <Chip 
              label="Success" 
              color="success" 
              className="whiteColor"
            />
          </Stack>

          <Stack direction="row" spacing={1} className="chip-gap-for-rtl">
            <Chip label="Primary" color="primary" variant="outlined" />

            <Chip label="Secondary" color="secondary" variant="outlined" />

            <Chip label="Success" color="success" variant="outlined" />
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
