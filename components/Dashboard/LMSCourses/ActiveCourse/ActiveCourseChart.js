import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class ActiveCourseChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [72, 56, 50],
      options: {
        chart: {
          type: "donut",
        },
        legend: {
          offsetY: 2,
          position: "bottom",
          horizontalAlign: "center",
        },
        labels: ["Courses Done", "On Progress", "To Do"],
        colors: ["#757FEF", "#EE368C", "#00B69B"],
        tooltip: {
          y: {
            formatter: function (val) {
              return "" + val + "%";
            },
          },
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
          height="350"
          type="donut"
        />
      </>
    );
  }
}

export default ActiveCourseChart;
