import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating'; 

export default function Basic() {
  const [value, setValue] = React.useState(2);

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

        <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
        >
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={value} readOnly />

          <Typography component="legend">Disabled</Typography>
          <Rating name="disabled" value={value} disabled />

          <Typography component="legend">No rating given</Typography>
          <Rating name="no-value" value={null} />
        </Box>
      </Card>
    </>
  );
}
