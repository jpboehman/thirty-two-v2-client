import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);
export default function SlideRelativeToAContainer() {

  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
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
          Slide Relative To A Container
        </Typography>

        <Box
          sx={{
            height: 180,
            width: 240,
            display: 'flex',
            padding: 2,
            borderRadius: 1,
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
            overflow: 'hidden',
          }}
          ref={containerRef}
          className="bg-black"
        >
          <Box sx={{ width: 200 }}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show from target"
            />
            <Slide direction="up" in={checked} container={containerRef.current}>
              {icon}
            </Slide>
          </Box>
        </Box>
      </Card>
    </>
  );
}
