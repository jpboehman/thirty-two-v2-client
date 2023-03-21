import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';

const Icons = () => {
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
          Icons
        </Typography>
        
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            This is a success alert — check it out!
          </Alert>
          <Alert
            iconMapping={{
              success: <CheckCircleOutlineIcon fontSize="inherit" />,
            }}
          >
            This is a success alert — check it out!
          </Alert>
          <Alert icon={false} severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </Card>
    </>
  );
};

export default Icons;
