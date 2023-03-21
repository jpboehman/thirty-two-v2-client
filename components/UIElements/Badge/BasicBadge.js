import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BasicBadge = () => {
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
          Basic Badge
        </Typography>
          
        <Stack spacing={3} direction="row" className="gadge-gap">
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" fontSize="large" />
          </Badge>

          <Badge 
            badgeContent={4} 
            color="danger"
            sx={{
              color: '#fff'
            }}
          >
            <NotificationsIcon color="action" fontSize="large" />
          </Badge>

          <Badge 
            badgeContent={4} 
            color="success"
            style={{
              color: '#fff'
            }}
          >
            <ShoppingCartIcon color="action" fontSize="large" />
          </Badge>
        </Stack>
      </Card>
    </>
  );
};

export default BasicBadge;
