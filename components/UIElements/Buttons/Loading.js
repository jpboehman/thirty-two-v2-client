import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material"; 
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

const Loading = () => {
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
          Loading
        </Typography>
        
        <Stack direction="row" spacing={2}>
          <LoadingButton loading variant="outlined" className="for-dark-border">
            Submit
          </LoadingButton>

          <LoadingButton loading loadingIndicator="Loading…" variant="outlined" className="for-dark-border whiteColor">
            Fetch data
          </LoadingButton>

          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined" 
            className="for-dark-border"
          >
            Save
          </LoadingButton>
        </Stack>
      </Card>
    </>
  );
};

export default Loading;
