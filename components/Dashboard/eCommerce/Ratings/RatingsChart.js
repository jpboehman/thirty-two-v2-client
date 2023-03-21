import React, { Component } from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class RatingsChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          width: 300,
        },
        colors: ["#757FEF", "#00B69B", "#2DB6F5", "#EE368C", "#FFBC2B"],
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          show: false,
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }

  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          height={150}
          type="donut"
        />
      </>
    );
  }
}

export default RatingsChart;
