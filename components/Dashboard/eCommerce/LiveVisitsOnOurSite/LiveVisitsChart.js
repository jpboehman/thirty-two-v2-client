import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class LiveVisitsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [72, 56],
      options: {
        chart: {
          type: "donut",
        },
        labels: ["Domestic", "International"],
        colors: ["#757FEF", "#EE368C"],
        tooltip: {
          y: {
            formatter: function (val) {
              return "" + val + "%";
            },
          },
        },
        legend: {
          offsetY: 2,
          position: "bottom",
          horizontalAlign: "center",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
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
        <Chart
          options={this.state.options}
          series={this.state.series}
          height="315"
          type="donut"
        />
      </>
    );
  }
}

export default LiveVisitsChart;
