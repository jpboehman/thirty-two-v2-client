import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const RoundedButtons = () => {
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
            mb: '10px',
          }}
        >
          Rounded Buttons
        </Typography>
        
        <Stack
          sx={{
            display: 'inline-block'
          }}
        >
          <Button 
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px',
              p: '10px 30px',
              fontSize: '14px',
              color: "#fff !important",
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
              borderRadius: '30px',
              mt: '10px',
              p: '10px 30px',
              fontSize: '14px',
              color: "#fff !important",
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
              borderRadius: '30px',
              mt: '10px',
              color: '#fff',
              p: '10px 30px',
              fontSize: '14px',
              color: "#fff !important",
            }}
            className="mr-10px"
          >
            Success
          </Button>

          <Button 
            variant="contained"
            color="info"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px',
              color: '#fff',
              p: '10px 30px',
              fontSize: '14px',
              color: "#fff !important",
            }}
            className="mr-10px"
          >
            Info
          </Button>

          <Button 
            variant="contained"
            color="warning"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px',
              color: '#fff',
              p: '10px 30px',
              fontSize: '14px',
              color: "#fff !important",
            }}
            className="mr-10px"
          >
            Warning
          </Button>

          <Button 
            variant="contained"
            color="danger"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px',
              color: '#fff',
              p: '10px 30px',
              fontSize: '14px',
              color: "#fff !important",
            }}
            className="mr-10px"
          >
            Danger
          </Button>

          <Button 
            variant="contained"
            color="dark"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px',
              color: '#fff',
              p: '10px 30px',
              fontSize: '14px',
              color: "#fff !important",
            }}
            className="mr-10px"
          >
            Dark
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default RoundedButtons;
