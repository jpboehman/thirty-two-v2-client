import React, { Component } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class RadarMultipleSeries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: "Series 2",
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: "Series 3",
          data: [44, 76, 78, 13, 43, 10],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "radar",
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1,
          },
        },
        title: {
          text: "Radar Chart - Multi Series",
        },
        stroke: {
          width: 2,
        },
        fill: {
          opacity: 0.1,
        },
        markers: {
          size: 0,
        },
        xaxis: {
          categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
        },
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
            Radar Multiple Series
          </Typography>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radar"
            height={350}
          />
        </Card>
      </>
    );
  }
}

export default RadarMultipleSeries;
