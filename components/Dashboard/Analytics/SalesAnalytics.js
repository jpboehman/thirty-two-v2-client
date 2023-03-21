import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "01 Jan",
    cost: 4000,
    sales: 2400,
    revenue: 2400,
  },
  {
    date: "02 Jan",
    cost: 3000,
    sales: 1398,
    revenue: 2210,
  },
  {
    date: "03 Jan",
    cost: 2000,
    sales: 9800,
    revenue: 2290,
  },
  {
    date: "04 Jan",
    cost: 2780,
    sales: 3908,
    revenue: 2000,
  },
  {
    date: "05 Jan",
    cost: 1890,
    sales: 4800,
    revenue: 2181,
  },
  {
    date: "06 Jan",
    cost: 2390,
    sales: 3800,
    revenue: 2500,
  },
  {
    date: "07 Jan",
    cost: 3490,
    sales: 4300,
    revenue: 2100,
  },
];

const SalesAnalytics = () => {
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
            Sales Analytics
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{ fontSize: "14px" }}>
                Select
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={select}
                label="Select"
                onChange={handleChange}
                sx={{ fontSize: "14px" }}
              >
                <MenuItem value={0} sx={{ fontSize: "14px" }}>
                  Today
                </MenuItem>
                <MenuItem value={1} sx={{ fontSize: "14px" }}>
                  Last 7 Days
                </MenuItem>
                <MenuItem value={2} sx={{ fontSize: "14px" }}>
                  Last Month
                </MenuItem>
                <MenuItem value={3} sx={{ fontSize: "14px" }}>
                  Last 12 Months
                </MenuItem>
                <MenuItem value={4} sx={{ fontSize: "14px" }}>
                  All Time
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
          
        <div style={{ width: '100%', height: 272 }}>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              barSize={50}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" fontSize={12} stroke="#A9A9C8" />

              <YAxis fontSize={12} stroke="#A9A9C8" />

              <Tooltip wrapperStyle={{ fontSize: "13px" }} />

              <Legend
                wrapperStyle={{ textTransform: "capitalize", fontSize: "13px" }}
              />

              <Bar dataKey="cost" stackId="a" fill="#165BAA" />

              <Bar dataKey="sales" stackId="a" fill="#A155B9" />

              <Bar dataKey="revenue" stackId="a" fill="#F765A3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </>
  );
};

export default SalesAnalytics;
