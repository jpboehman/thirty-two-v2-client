import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

        <div>
          <Checkbox {...label} defaultChecked size="small" />
          <Checkbox {...label} defaultChecked />
          <Checkbox
            {...label}
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        </div>
      </Card>
    </>
  );
}
