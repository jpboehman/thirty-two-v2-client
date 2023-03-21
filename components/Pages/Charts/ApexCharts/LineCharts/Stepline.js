import React, { Component } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class Stepline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
      ],
      options: {
        stroke: {
          curve: "stepline",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Stepline Chart",
          align: "left",
        },
        markers: {
          hover: {
            sizeOffset: 4,
          },
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
            Zoomable Timeseries
          </Typography>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          />
        </Card>
      </>
    );
  }
}

export default Stepline;
