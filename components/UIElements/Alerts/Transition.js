import * as React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const Transition = () => {
  const [open, setOpen] = React.useState(true);
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
          Transition
        </Typography>
        
        <Box sx={{ width: '100%' }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Close me!
            </Alert>
          </Collapse>
          <Button
            disabled={open}
            variant="outlined"
            onClick={() => {
              setOpen(true);
            }}
          >
            Re-open
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default Transition;
