import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import styles from "@/components/Dashboard/Analytics/VisitorsAge/VisitorsAge.module.css";

class VisitorsAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [40],
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
            track: {
              background: "rgba(247, 101, 163, 0.5)",
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: 4,
                color: "#F765A3",
                fontSize: "16px",
                fontWeight: "500",
              },
            },
          },
        },
        fill: {
          colors: ["#F765A3"],
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
              Visitors Age
            </Typography>
          </Box>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
          />

          <>
            <div className={styles.infoList}>
              <p>Under 30</p>
              <h5>16,868</h5>
              <div className={styles.rightContent}>
                <p>
                  <i className="ri-bar-chart-fill"></i> 32%
                </p>
              </div>
            </div>

            <div className={styles.infoList}>
              <p>Over 30</p>
              <h5>31,868</h5>
              <div className={styles.rightContent}>
                <p>
                  <i className="ri-bar-chart-fill"></i> 68%
                </p>
              </div>
            </div>
          </>
        </Card>
      </>
    );
  }
}

export default VisitorsAge;
