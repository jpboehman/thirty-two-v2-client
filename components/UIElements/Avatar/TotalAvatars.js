import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const TotalAvatars = () => {
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
          Total Avatars
        </Typography>
        
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="/images/user1.png" />
          <Avatar alt="Travis Howard" src="/images/user2.png" />
          <Avatar alt="Agnes Walker" src="/images/user3.png" />
          <Avatar alt="Trevor Henderson" src="/images/user4.png" />
        </AvatarGroup>
      </Card>
    </>
  );
};

export default TotalAvatars;
