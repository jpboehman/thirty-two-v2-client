import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

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

        <Stack spacing={1}>
          <Rating name="size-small" defaultValue={2} size="small" />
          <Rating name="size-medium" defaultValue={2} />
          <Rating name="size-large" defaultValue={2} size="large" />
        </Stack>
      </Card>
    </>
  );
}
