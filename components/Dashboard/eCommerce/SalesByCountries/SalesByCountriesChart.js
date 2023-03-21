import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class SalesByCountriesChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [75, 40, 65, 80],
      options: {
        labels: ["Canada", "Russia", "Greenland", "USA"],
        colors: ["#757FEF", "#2DB6F5", "#EE368C", "#00B69B"],
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
          height="320"
          type="pie"
        />
      </>
    );
  }
}

export default SalesByCountriesChart;
