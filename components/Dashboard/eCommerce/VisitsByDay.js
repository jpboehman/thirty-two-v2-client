import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const VisitsByDay = () => {
  const series = [
    {
      name: "Visits This Weak",
      data: [80, 50, 30, 40, 100, 20, 50],
    },
    {
      name: "Visits Last Weak",
      data: [20, 30, 40, 80, 20, 80, 100],
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
    colors: ["#2DB6F5", "#E289F2"],
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wendsday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
            Visits by Day
          </Typography>

          <Typography
            as="p"
            sx={{
              fontSize: 14,
            }}
          >
            Total 248.5k Visits
          </Typography>
        </Box>

        <Chart options={options} series={series} type="radar" height={520} />
      </Card>
    </>
  );
};

export default VisitsByDay;
