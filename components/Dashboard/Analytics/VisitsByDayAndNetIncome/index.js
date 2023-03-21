import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NetIncome from "./NetIncome";

const data = [
  {
    name: "Sat",
    visited: 2400,
  },
  {
    name: "Sun",
    visited: 1398,
  },
  {
    name: "Mon",
    visited: 9800,
  },
  {
    name: "Tue",
    visited: 3908,
  },
  {
    name: "Wed",
    visited: 4800,
  },
  {
    name: "Thu",
    visited: 3800,
  },
  {
    name: "Fri",
    visited: 4300,
  },
];

const VisitsByDayAndNetIncome = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "30px 20px 20px",
          mb: "15px",
        }}
      >
        <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
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
                className="mr-15px"
              >
                <i className="ri-pie-chart-line"></i>
              </Box>

              <Box>
                <Typography variant="p" sx={{ fontSize: 13 }}>
                  Visits By Day
                </Typography>
                <Typography
                  variant="h1"
                  sx={{ fontSize: 22, fontWeight: 700, mt: "5px" }}
                >
                  1,802
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
                  dataKey="visited"
                  fill="#FFBA69"
                  background={{ fill: "#DBDFF1" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
        
        {/* NetIncome */}
        <NetIncome />
      </Card>
    </>
  );
};

export default VisitsByDayAndNetIncome;
