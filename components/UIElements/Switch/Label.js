import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Label() {
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
          Label
        </Typography>

        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </FormGroup>
      </Card>
    </>
  );
}
