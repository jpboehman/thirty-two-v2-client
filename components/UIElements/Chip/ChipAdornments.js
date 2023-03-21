import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ChipAdornments() {
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
          Chip Adornments
        </Typography>

        <Stack direction="row" spacing={1} className="chip-gap-for-rtl">
          <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
          <Chip
            avatar={<Avatar alt="Natacha" src="/images/user1.png" />}
            label="Avatar"
            variant="outlined"
          />
        </Stack>
      </Card>
    </>
  );
}
