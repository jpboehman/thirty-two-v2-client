import React, { Component } from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class RevenueChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [65],
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
            track: {
              background: "#ECEFF7",
            },
            dataLabels: {
              name: {
                show: true,
                fontSize: '12px',
                color: '#5B5B98',
              },
              value: {
                offsetY: 3,
                color: "#00B69B",
                fontSize: "16px",
                fontWeight: "500",
              },
            },
          },
        },
        labels: ['Revenue'],
        fill: {
          opacity: 1,
          colors: ["#757FEF"],
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
          height="175"
          type="radialBar"
        />
      </>
    );
  }
}

export default RevenueChart;
