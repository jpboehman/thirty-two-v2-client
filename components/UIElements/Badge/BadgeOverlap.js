import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const BadgeOverlap = () => {
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
          Badge Overlap
        </Typography>
        
        <Stack spacing={3} direction="row">
          <Badge color="danger" badgeContent=" ">
            {rectangle}
          </Badge>
          <Badge color="danger" badgeContent=" " variant="dot">
            {rectangle}
          </Badge>
          <Badge color="danger" overlap="circular" badgeContent=" ">
            {circle}
          </Badge>
          <Badge color="danger" overlap="circular" badgeContent=" " variant="dot">
            {circle}
          </Badge>
        </Stack>
      </Card>
    </>
  );
};

export default BadgeOverlap;
