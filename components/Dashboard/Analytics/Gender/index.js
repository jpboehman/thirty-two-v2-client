import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import styles from "@/components/Dashboard/Analytics/Gender/Gender.module.css";

class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [50],
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
            track: {
              background: "rgba(0, 182, 155, 0.5)",
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: 4,
                color: "#00B69B",
                fontSize: "16px",
                fontWeight: "500",
              },
            },
          },
        },
        fill: {
          colors: ["#00B69B"],
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
              Gender
            </Typography>
          </Box>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
          />

          <>
            <div className={styles.infoList}>
              <p>Male</p>
              <h5>45,347</h5>
              <div className={styles.rightContent}>
                <p>
                  <i className="ri-bar-chart-fill"></i> 70%
                </p>
              </div>
            </div>

            <div className={styles.infoList}>
              <p>Female</p>
              <h5>20,738</h5>
              <div className={styles.rightContent}>
                <p>
                  <i className="ri-bar-chart-fill"></i> 30%
                </p>
              </div>
            </div>
          </>
        </Card>
      </>
    );
  }
}

export default Gender;
