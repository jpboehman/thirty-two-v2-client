import * as React from 'react';
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function BasicTimePicker() {

  const [value, setValue] = React.useState(null);

  return (
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
        Time Picker
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Card>
  );
}