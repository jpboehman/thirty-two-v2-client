import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const SizesAvatars = () => {
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
          Sizes Avatars
        </Typography>
        
        <Stack direction="row" alignItems="center" spacing={2} className="avatars-gap">
          <Avatar
            alt="Remy Sharp"
            src="/images/profile.png"
            sx={{ width: 60, height: 60 }}
          />

          <Avatar 
            alt="Remy Sharp" 
            src="/images/profile.png" 
            sx={{ width: 55, height: 55 }}
          />

          <Avatar
            alt="Remy Sharp"
            src="/images/profile.png"
            sx={{ width: 50, height: 50 }}
          />

          <Avatar
            alt="Remy Sharp"
            src="/images/profile.png"
            sx={{ width: 45, height: 45 }}
          />

          <Avatar
            alt="Remy Sharp"
            src="/images/profile.png"
            sx={{ width: 40, height: 40 }}
          />
        </Stack>
      </Card>
    </>
  );
};

export default SizesAvatars;
