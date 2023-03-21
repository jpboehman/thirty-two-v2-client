import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SoftButtons = () => {
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
          Soft Buttons
        </Typography>
        
        <Stack
          sx={{
            display: 'inline-block'
          }}
        >
          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#757FEF',
              textTransform: 'capitalize',
              borderRadius: '10px',
              p: '10px 30px',
              fontSize: '14px',
              mt: '10px'
            }}
            className="mr-10px primary"
          >
            Primary
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#818093',
              textTransform: 'capitalize',
              borderRadius: '10px',
              p: '10px 30px',
              fontSize: '14px',
              mt: '10px'
            }}
            className="mr-10px secondary"
          >
            Secondary
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#00B69B',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mt: '10px',
            }}
            className="mr-10px success"
          >
            Success
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#2DB6F5',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mt: '10px',
            }}
            className="mr-10px info"
          >
            Info
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#FFBC2B',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mt: '10px',
            }}
            className="mr-10px warning"
          >
            Warning
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#EE368C',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mt: '10px',
            }}
            className="mr-10px danger"
          >
            Danger
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#260944',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mt: '10px',
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

export default SoftButtons;
