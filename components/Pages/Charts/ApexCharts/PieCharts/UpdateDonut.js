import React, { Component } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class UpdateDonut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 33],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230,
        },
      },
    };
  }

  appendData() {
    var arr = this.state.series.slice();
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

    this.setState({
      series: arr,
    });
  }

  removeData() {
    if (this.state.series.length === 1) return;

    var arr = this.state.series.slice();
    arr.pop();

    this.setState({
      series: arr,
    });
  }

  randomize() {
    this.setState({
      series: this.state.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      }),
    });
  }

  reset() {
    this.setState({
      series: [44, 55, 13, 33],
    });
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
            Update Donut
          </Typography>

          <div>
            <div class="chart-wrap">
              <div id="chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="donut"
                  width={380}
                />
              </div>
            </div>

            <div class="actions">
              <button onClick={() => this.appendData()}>+ ADD</button>
              &nbsp;
              <button onClick={() => this.removeData()}>- REMOVE</button>
              &nbsp;
              <button onClick={() => this.randomize()}>RANDOMIZE</button>
              &nbsp;
              <button onClick={() => this.reset()}>RESET</button>
            </div>
          </div>
        </Card>
      </>
    );
  }
}

export default UpdateDonut;
