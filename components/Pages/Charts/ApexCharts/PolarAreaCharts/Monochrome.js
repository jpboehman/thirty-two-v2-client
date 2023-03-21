import React, { Component } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class Monochrome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [42, 47, 52, 58, 65],
      options: {
        labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
        fill: {
          opacity: 1,
        },
        stroke: {
          width: 1,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 0.6,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
       
            },
          },
        ],
      },
    };
  }

  render() {
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
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              borderBottom: "1px solid #EEF0F7",
              paddingBottom: "5px",
              mb: "15px",
            }}
            className="for-dark-bottom-border"
          >
            Monochrome
          </Typography>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="polarArea"
          />
        </Card>
      </>
    );
  }
}

export default Monochrome;
