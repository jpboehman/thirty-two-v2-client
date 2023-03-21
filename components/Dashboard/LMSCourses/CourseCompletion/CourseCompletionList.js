import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class CourseCompletionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [25],
      series2: [50],
      series3: [30],
      series4: [50],
      options: {
        chart: {
          offsetX: -8,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
            track: {
              background: "#A9C8FB",
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: 3,
                color: "#757FEF",
                fontSize: "13px",
                fontWeight: "500",
              },
            },
          },
        },
        fill: {
          colors: ["#757FEF"],
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <>
        {/* Course completion 1 */}
        <Box
          sx={{
            background: "#FAFAFA",
            borderRadius: "15px",
            padding: "5px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "15px",
          }}
          className="dark-BG-101010"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box className="mr-1">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                height={110}
                width={70}
              />
            </Box>
            <Box>
              <Typography as="h3" fontSize="14px" fontWeight="500">
                Data With Python
              </Typography>
              <Typography fontSize="13px" color="#A9A9C8">
                5 Lessons
              </Typography>
            </Box>
          </Box>

          <Box color="#A9A9C8" fontSize="25px">
            <Link href="#" underline="none">
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </Box>
        </Box>

        {/* Course completion 2 */}
        <Box
          sx={{
            background: "#FAFAFA",
            borderRadius: "15px",
            padding: "5px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "15px",
          }}
          className="dark-BG-101010"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Chart
                options={this.state.options}
                series={this.state.series2}
                type="radialBar"
                height={110}
                width={70}
              />
            </Box>
            <Box>
              <Typography as="h3" fontSize="14px" fontWeight="500">
                Code Foundation
              </Typography>
              <Typography fontSize="13px" color="#A9A9C8">
                15 Lessons
              </Typography>
            </Box>
          </Box>

          <Box color="#A9A9C8" fontSize="25px">
            <Link href="#" underline="none">
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </Box>
        </Box>

        {/* Course completion 3 */}
        <Box
          sx={{
            background: "#FAFAFA",
            borderRadius: "15px",
            padding: "5px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "15px",
          }}
          className="dark-BG-101010"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Chart
                options={this.state.options}
                series={this.state.series3}
                type="radialBar"
                height={110}
                width={70}
              />
            </Box>
            <Box>
              <Typography as="h3" fontSize="14px" fontWeight="500">
                Styling With CSS
              </Typography>
              <Typography fontSize="13px" color="#A9A9C8">
                13 Lessons
              </Typography>
            </Box>
          </Box>

          <Box color="#A9A9C8" fontSize="25px">
            <Link href="#" underline="none">
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </Box>
        </Box>

        {/* Course completion 4 */}
        <Box
          sx={{
            background: "#FAFAFA",
            borderRadius: "15px",
            padding: "5px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "15px",
          }}
          className="dark-BG-101010"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Chart
                options={this.state.options}
                series={this.state.series4}
                type="radialBar"
                height={110}
                width={70}
              />
            </Box>
            <Box>
              <Typography as="h3" fontSize="14px" fontWeight="500">
                Code Learn
              </Typography>
              <Typography fontSize="13px" color="#A9A9C8">
                15 Lessons
              </Typography>
            </Box>
          </Box>

          <Box color="#A9A9C8" fontSize="25px">
            <Link href="#" underline="none">
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </Box>
        </Box>
      </>
    );
  }
}

export default CourseCompletionList;
