import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class TasksPerformanceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [76, 67, 61, 90],
      options: {
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "25%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ["#757FEF", "#9EA5F4", "#C8CCF9", "#F1F2FD"],
        labels: ["Completed", "Active", "Assigned", "Pending"],
        legend: {
          show: true,
          floating: true,
          fontSize: "14px",
          position: "left",
          offsetY: 0,
          labels: {
            color: "#5B5B98"
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
              chart: {
                height: 270
              },
            },
          },
        ],
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={355}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            mt: "22px",
          }}
        >
          <Box>
            <Typography color="#A9A9C8" mb={1}>
              Target
            </Typography>
            <Typography fontWeight="500" fontSize="20px" as="h4">
              <ArrowDownwardIcon
                color="danger"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              30k
            </Typography>
          </Box>

          <Box>
            <Typography color="#A9A9C8" mb={1}>
              Last Week
            </Typography>
            <Typography fontWeight="500" fontSize="20px" as="h4">
              <ArrowUpwardIcon
                color="success"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              40k
            </Typography>
          </Box>

          <Box>
            <Typography color="#A9A9C8" mb={1}>
              Last Month
            </Typography>
            <Typography fontWeight="500" fontSize="20px" as="h4">
              <ArrowUpwardIcon
                color="success"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              60k
            </Typography>
          </Box>
        </Box>
      </>
    );
  }
}

export default TasksPerformanceChart;
