import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingPrecision() {
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
          Rating Precision
        </Typography>

        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </Stack>
      </Card>
    </>
  );
}
