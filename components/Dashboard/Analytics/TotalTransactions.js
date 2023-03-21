import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TotalTransactions = () => {
  // Chart
  const series = [
    {
      name: 'This Week',
      data: [30, 35, 40, 50, 55, 60, 65]
    },
    {
      name: 'Last Week',
      data: [65, 60, 55, 50, 40, 35, 30]
    },
    {
      name: 'Performance',
      data: [30, 35, 40, 50, 55, 60, 65]
    },
    {
      name: 'Cost',
      data: [65, 60, 55, 50, 40, 35, 30]
    }
  ];

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false
      },
    },
    colors: ["#1CCAB8", "#FFBC2B", "#818093", "#EE368C"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
        '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT'
      ],
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: 'bottom',
      offsetY: 8,
      fontSize: '11px',
    },
    fill: {
      opacity: 1
    },
    grid: {
      borderColor: '#F7FAFF',
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "k";
        },
      },
    },
  }

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 0 15px",
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
              p: "0 20px 0",
            }}
          >
            Total Transactions
          </Typography>
        </Box>
        
        <Chart options={options} series={series} type="bar" height={325} />
      </Card>
    </>
  );
};

export default TotalTransactions;
