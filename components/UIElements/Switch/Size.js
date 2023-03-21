import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function Size() {
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
          Size
        </Typography>

        <Switch {...label} defaultChecked size="small" />
        <Switch {...label} defaultChecked />
      </Card>
    </>
  );
}
