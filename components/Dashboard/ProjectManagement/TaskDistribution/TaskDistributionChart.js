import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class TaskDistributionChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [14, 23, 21, 17],
      options: {
        labels: ['API', 'Frontend', 'Backend', 'Design'],
        colors: ["#B8C8DB", "#A1AADB", "#BA68C8", "#8E72C8"],
        fill: {
          opacity: 0.9,
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
          height="390"
          type="polarArea"
        />
      </>
    );
  }
}

export default TaskDistributionChart;
