import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Variants = () => {
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
          Variants
        </Typography>
        
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="outlined" severity="error">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an info alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </Card>
    </>
  );
};

export default Variants;
