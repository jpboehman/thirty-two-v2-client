import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import styles from "@/components/Dashboard/Analytics/NewReturning/NewReturning.module.css";

class NewReturning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [60],
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
            track: {
              background: "rgba(117, 127, 239, 0.5)",
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: 4,
                color: "#757FEF",
                fontSize: "16px",
                fontWeight: "500",
              },
            },
          },
        },
        fill: {
          colors: ["#757FEF"],
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
            p: "25px 20px",
            mb: "15px",
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #EEF0F7",
              paddingBottom: "10px",
            }}
            className="for-dark-bottom-border"
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              New vs. Returning
            </Typography>
          </Box>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
          />

          <>
            <div className={styles.infoList}>
              <p>New</p>
              <h5>36,868</h5>
              <div className={styles.rightContent}>
                <p>
                  <i className="ri-bar-chart-fill"></i> 75%
                </p>
              </div>
            </div>

            <div className={styles.infoList}>
              <p>Returning</p>
              <h5>9,217</h5>
              <div className={styles.rightContent}>
                <p>
                  <i className="ri-bar-chart-fill"></i> 25%
                </p>
              </div>
            </div>
          </>
        </Card>
      </>
    );
  }
}

export default NewReturning;
