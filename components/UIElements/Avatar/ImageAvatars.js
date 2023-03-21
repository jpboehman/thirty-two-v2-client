import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const ImageAvatars = () => {
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
          Image Avatars
        </Typography>
        
        <Stack 
          direction="row" 
          spacing={2}
          className="avatars-gap"
        >
          <Avatar alt="Remy Sharp" src="/images/user1.png" />
          <Avatar alt="Travis Howard" src="/images/user2.png" />
          <Avatar alt="Cindy Baker" src="/images/user3.png" />
          <Avatar alt="Cindy Baker" src="/images/user4.png" />
          <Avatar alt="Cindy Baker" src="/images/user5.png" />
        </Stack>
      </Card>
    </>
  );
};

export default ImageAvatars;
