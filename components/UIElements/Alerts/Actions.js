import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';

const Actions = () => {
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
          Actions
        </Typography>
        
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
          <Alert
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </Card>
    </>
  );
};

export default Actions;
