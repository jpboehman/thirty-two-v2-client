import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material"; 
import Button from '@mui/material/Button';

const BlockButtons = () => {
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
          Block Buttons
        </Typography>
         
        <Button 
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'capitalize',
            borderRadius: '10px',
            mt: '10px',
            p: '10px 30px',
            fontSize: '14px',
            display: 'block',
            width: '100%',
            color: '#fff !important',
          }}
          className="mr-10px"
        >
          Primary
        </Button>

        <Button 
          variant="contained"
          color="secondary"
          sx={{
            textTransform: 'capitalize',
            borderRadius: '10px',
            mt: '10px',
            p: '10px 30px',
            fontSize: '14px',
            display: 'block',
            width: '100%',
            color: '#fff !important',
          }}
          className="mr-10px"
        >
          Secondary
        </Button>

        <Button 
          variant="contained"
          color="success"
          sx={{
            textTransform: 'capitalize',
            borderRadius: '10px',
            mt: '10px',
            color: '#fff',
            p: '10px 30px',
            fontSize: '14px',
            display: 'block',
            width: '100%',
            color: '#fff !important',
          }}
          className="mr-10px"
        >
          Success
        </Button>
      </Card>
    </>
  );
};

export default BlockButtons;
