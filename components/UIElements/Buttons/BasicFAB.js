import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material"; 
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const BasicFAB = () => {
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
          Basic Favorite
        </Typography>
        
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <AddIcon sx={{ color: "#fff !important" }} />
          </Fab>

          <Fab color="secondary" aria-label="edit">
            <EditIcon sx={{ color: "#fff !important" }} />
          </Fab>

          <Fab variant="extended">
            <NavigationIcon 
              className="mr-1"
            />
            Navigate
          </Fab>

          <Fab disabled aria-label="like" sx={{ backgroundColor: "rgba(117, 127, 239, 0.1) !important" }}>
            <FavoriteIcon />
          </Fab>
        </Box>
      </Card>
    </>
  );
};

export default BasicFAB;
