import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import styles from "@/components/Dashboard/Analytics/Profile/ImpressionShare.module.css"

class ImpressionShare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [45],
      options: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -110,
            endAngle: 110,
            track: {
              background: "#e7e7e7",
              strokeWidth: "90%",
              margin: 5,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "15px",
                fontWeight: "500",
                color: '#5B5B98'
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        fill: {
          colors: ["#00B69B"],
        },
        labels: ["Average Results"],
      },
    };
  }

  render() {
    return (
      <>
        <div className={styles.chartBox}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={100}
            // width={150}
          />
          <h4>Excellent</h4>
          <h3>Impression Share</h3>
        </div>
      </>
    );
  }
}

export default ImpressionShare;
