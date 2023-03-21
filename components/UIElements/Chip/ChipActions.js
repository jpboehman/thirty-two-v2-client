import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ChipActions() {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

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
          Chip Actions
        </Typography>

        <Stack direction="row" spacing={1} className="chip-gap-for-rtl">
          <Chip label="Clickable" onClick={handleClick} />
          <Chip label="Clickable" variant="outlined" onClick={handleClick} />
        </Stack>
      </Card>
    </>
  );
}
