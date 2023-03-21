import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableAndDeletable() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
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
          Clickable And Deletable
        </Typography>

        <Stack direction="row" spacing={1} className="chip-gap-for-rtl">
          <Chip
            label="Clickable Deletable"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            label="Clickable Deletable"
            variant="outlined"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Stack>
      </Card>
    </>
  );
}
