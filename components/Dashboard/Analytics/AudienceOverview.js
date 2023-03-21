import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "New Visitors",
      backgroundColor: "#6F52ED",
      borderColor: "#6F52ED",
      data: [30, 40, 30, 80, 65, 70, 30],
    },
    {
      label: "Unique Visitors",
      backgroundColor: "#2DB6F5",
      borderColor: "#2DB6F5",
      data: [55, 60, 55, 45, 35, 55, 60],
    },
    {
      label: "Previous Visitors",
      backgroundColor: "#F765A3",
      borderColor: "#F765A3",
      data: [45, 30, 40, 30, 20, 30, 40],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      labels: {
        color: '#5B5B98'
      }
    },
  }
}

const AudienceOverview = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            marginBottom: "15px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Audience Overview
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{ fontSize: '14px' }}>Select</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={select}
                label="Select"
                onChange={handleChange} 
                sx={{ fontSize: '14px' }}
              >
                <MenuItem value={0} sx={{ fontSize: '14px' }}>Today</MenuItem>
                <MenuItem value={1} sx={{ fontSize: '14px' }}>Last 7 Days</MenuItem>
                <MenuItem value={2} sx={{ fontSize: '14px' }}>Last Month</MenuItem>
                <MenuItem value={3} sx={{ fontSize: '14px' }}>Last 12 Months</MenuItem>
                <MenuItem value={4} sx={{ fontSize: '14px' }}>All Time</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      
        <Line data={data} options={options} height={100}/>
      </Card>
    </>
  );
};

export default AudienceOverview;
