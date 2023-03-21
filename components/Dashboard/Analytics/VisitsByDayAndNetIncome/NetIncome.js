import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    income: 24,
  },
  {
    name: "Sun",
    income: 13,
  },
  {
    name: "Mon",
    income: 98,
  },
  {
    name: "Tue",
    income: 39,
  },
  {
    name: "Wed",
    income: 48,
  },
  {
    name: "Thu",
    income: 38,
  },
  {
    name: "Fri",
    income: 43,
  },
];

const NetIncome = () => {
  return (
    <>
      <Grid container alignItems="center" sx={{ marginTop: '20px' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={6} md={7} lg={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "46px",
                height: "54px",
                lineHeight: "54px",
                borderRadius: "8px",
                fontSize: "25px",
                background: "#FFFFFF",
                boxShadow: "0px 4px 20px rgba(117, 127, 239, 0.15)",
                color: "#757FEF",
                textAlign: "center",
              }}
              className='mr-15px'
            >
              <i className="ri-bar-chart-fill"></i>
            </Box>

            <Box>
              <Typography variant="p" sx={{ fontSize: 13 }}>
                Net Income
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontSize: 22, fontWeight: 700, mt: "5px" }}
              >
                $438.5k
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} md={5} lg={6}>
          <ResponsiveContainer width="100%" aspect={2.0 / 0.9}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
              barSize={8}
            >
              <XAxis
                dataKey="name"
                scale="point"
                fontSize={9}
                stroke="#A9A9C8"
              />

              <Tooltip wrapperStyle={{fontSize: "14px"}} />

              <Bar
                dataKey="income"
                fill="#757FEF"
                background={{ fill: "#DBDFF1" }}
                unit="k"
              />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default NetIncome;
