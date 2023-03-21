import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Sizes() {
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
          Sizes
        </Typography>

        <Box width={300}>
          <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
      </Card>
    </>
  );
}
