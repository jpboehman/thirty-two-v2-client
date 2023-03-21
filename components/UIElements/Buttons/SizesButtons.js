import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material"; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const SizesButtons = () => {
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
        
        <Box sx={{ '& button': { m: 1 } }}>
          <div>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          
          <div>
            <Button variant="outlined" size="small">
              Small
            </Button>

            <Button variant="outlined" size="medium">
              Medium
            </Button>

            <Button variant="outlined" size="large">
              Large
            </Button>
          </div>

          <div>
            <Button 
              variant="contained" 
              size="small" 
              sx={{ color: "#fff !important" }}
            >
              Small
            </Button>

            <Button 
              variant="contained" 
              size="medium" 
              sx={{ color: "#fff !important" }}
            >
              Medium
            </Button>

            <Button 
              variant="contained" 
              size="large" 
              sx={{ color: "#fff !important" }}
            >
              Large
            </Button>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default SizesButtons;
