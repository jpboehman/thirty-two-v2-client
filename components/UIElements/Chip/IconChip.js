import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

export default function IconChip() {
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
          Icon Chip
        </Typography>

        <Stack direction="row" spacing={1} className="chip-gap-for-rtl">
          <Chip icon={<FaceIcon />} label="With Icon" />
          <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
        </Stack>
      </Card>
    </>
  );
}
