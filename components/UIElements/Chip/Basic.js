import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Basic() {
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
          Basic
        </Typography>

        <Stack direction="row" spacing={1} className="chip-gap-for-rtl">
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
        </Stack>
      </Card>
    </>
  );
}
