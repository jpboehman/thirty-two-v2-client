import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function BasicTooltip() {
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
          Basic Tooltip
        </Typography>

        <Stack direction="row" spacing={1}>
          <Tooltip title="Delete">
            <IconButton sx={{ background: '#f5f5f5'}}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
 
          <Tooltip title="Alarm">
            <IconButton color="secondary" sx={{ background: '#f5f5f5'}}>
              <AlarmIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Add To Cart">
            <IconButton color="primary" sx={{ background: '#f5f5f5'}}>
              <AddShoppingCartIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Card>
    </>
  );
}
