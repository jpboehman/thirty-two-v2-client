import * as React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';

const GroupUserExample = () => {
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
            mb: '30px'
          }}
        >
          Group User Example
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src="/images/user1.png" />
              <Avatar alt="Travis Howard" src="/images/user2.png" />
              <Avatar alt="Cindy Baker" src="/images/user3.png" />
              <Avatar alt="Agnes Walker" src="/images/user4.png" />
              <Avatar alt="Trevor Henderson" src="/images/user5.png" />
            </AvatarGroup>
          </Box>

          <Box>
            <Button 
              variant="contained"
              color="secondary"
              sx={{
                textTransform: 'capitalize'
              }}
            >
              View Details
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default GroupUserExample;
