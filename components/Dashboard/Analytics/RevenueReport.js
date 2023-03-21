import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RevenueReport = () => {
  const series = [
    {
      name: "Earning",
      data: [80, 50, 30, 40, 100, 20, 35, 75, 45, 55, 65, 85,],
    },
    {
      name: "Expenses",
      data: [20, 30, 40, 80, 20, 80, 15, 32, 70, 38, 60, 76,],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ["#757FEF", "#FF8A65"],
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: [
        "January",
        "Fubruary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
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
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
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
            Revenue Report
          </Typography>
        </Box>

        <Chart options={options} series={series} type="radar" height={522} />
      </Card>
    </>
  );
};

export default RevenueReport;
