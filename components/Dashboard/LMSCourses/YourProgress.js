import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "01 Jan",
    Practice: 15,
    Theory: 10,
  },
  {
    name: "02 Jan",
    Practice: 11,
    Theory: 16,
  },
  {
    name: "03 Jan",
    Practice: 17,
    Theory: 12,
  },
  {
    name: "04 Jan",
    Practice: 13,
    Theory: 18,
  },
  {
    name: "05 Jan",
    Practice: 19,
    Theory: 14,
  },
  {
    name: "06 Jan",
    Practice: 15,
    Theory: 20,
  },
  {
    name: "07 Jan",
    Practice: 16,
    Theory: 22,
  },
];

const YourProgress = () => {
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
            marginBottom: "30px",
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
            Your Progress
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
                <MenuItem value={1} sx={{ fontSize: '14px' }}>This Week</MenuItem>
                <MenuItem value={2} sx={{ fontSize: '14px' }}>Last Month</MenuItem>
                <MenuItem value={3} sx={{ fontSize: '14px' }}>Last 12 Months</MenuItem>
                <MenuItem value={4} sx={{ fontSize: '14px' }}>All Time</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
 
        <ResponsiveContainer width="100%" aspect={2.0/1.0}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#EDEFF5" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} stroke="#A9A9C8" fontSize={14}  />
            <YAxis unit=" Hr" stroke="#A9A9C8" fontSize={14} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Theory"
              stroke="#757FEF"
              activeDot={{ r: 8 }}
              unit=" Hours" 
            />
            <Line type="monotone" dataKey="Practice" stroke="#2DB6F5" unit=" Hours" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default YourProgress;
