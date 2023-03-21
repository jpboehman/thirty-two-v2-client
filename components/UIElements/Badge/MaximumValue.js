import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const MaximumValue = () => {
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
            mb: '20px'
          }}
        >
          Maximum Value
        </Typography>
        
        <Stack spacing={4} direction="row" sx={{ color: 'action.active' }} className="gadge-gap">
          <Badge 
            color="primary" 
            badgeContent={99}
          >
            <MailIcon fontSize="large" />
          </Badge>
          <Badge color="primary" badgeContent={100}>
            <MailIcon fontSize="large" />
          </Badge>
          <Badge color="primary" badgeContent={1000} max={999}>
            <MailIcon fontSize="large" />
          </Badge>
        </Stack>
      </Card>
    </>
  );
};

export default MaximumValue;
