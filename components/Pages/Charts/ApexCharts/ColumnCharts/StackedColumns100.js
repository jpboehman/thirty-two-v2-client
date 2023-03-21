import React, { Component } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class StackedColumns100 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43, 21, 49],
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27, 33, 12],
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14, 15, 13],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        xaxis: {
          categories: [
            "2011 Q1",
            "2011 Q2",
            "2011 Q3",
            "2011 Q4",
            "2012 Q1",
            "2012 Q2",
            "2012 Q3",
            "2012 Q4",
          ],
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "right",
          offsetX: 0,
          offsetY: 50,
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
            Stacked Columns 100
          </Typography>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </Card>
      </>
    );
  }
}

export default StackedColumns100;
