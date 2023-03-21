import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { deepOrange, green, pink, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

const IconAvatars = () => {
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
          Icon Avatars
        </Typography>
        
        <Stack direction="row" spacing={2} className="avatars-gap">
          <Avatar>
            <FolderIcon />
          </Avatar>

          <Avatar sx={{ bgcolor: pink[500] }}>
            <PageviewIcon />
          </Avatar>

          <Avatar sx={{ bgcolor: green[500] }}>
            <AssignmentIcon />
          </Avatar>

          <Avatar sx={{ bgcolor: deepOrange[500] }}>
            <PersonIcon />
          </Avatar>

          <Avatar sx={{ bgcolor: red[500] }}>
            <DeleteIcon />
          </Avatar>
        </Stack>
      </Card>
    </>
  );
};

export default IconAvatars;
