import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Customization() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
          Customization
        </Typography>

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Button variant="outlined" onClick={handleClick}>
            Open success snackbar
          </Button>
          
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              This is a success message!
            </Alert>
          </Snackbar>

          <Alert severity="error">This is an error message!</Alert>

          <Alert severity="warning">This is a warning message!</Alert>

          <Alert severity="info">This is an information message!</Alert>

          <Alert severity="success">This is a success message!</Alert>
        </Stack>
      </Card>
    </>
  );
}
