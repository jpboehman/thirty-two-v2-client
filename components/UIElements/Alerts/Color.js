import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Alert from '@mui/material/Alert';

const Color = () => {
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
          Color
        </Typography>
        
        <Alert severity="success" color="info">
          This is a success alert — check it out!
        </Alert>
      </Card>
    </>
  );
};

export default Color;
