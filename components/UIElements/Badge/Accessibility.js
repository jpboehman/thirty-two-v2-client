import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

const Accessibility = () => {
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
          Accessibility
        </Typography>
        
        <IconButton aria-label={notificationsLabel(100)}>
          <Badge badgeContent={100} color="primary">
            <MailIcon fontSize="large" />
          </Badge>
        </IconButton>
      </Card>
    </>
  );
};

export default Accessibility;
