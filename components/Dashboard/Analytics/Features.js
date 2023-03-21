import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const FeaturesData = [
  {
    id: "1",
    subTitle: "Enrolled Courses",
    title: "24k",
    image: "/images/users-icon.png",
    icon: <TrendingUpIcon />,
    growthText: "9.5% new session",
    color: "successColor",
  },
  {
    id: "2",
    subTitle: "Active Courses",
    title: "17",
    image: "/images/graph-icon.png",
    icon: <TrendingDownIcon />,
    growthText: "7.5% vs. previous month",
    color: "dangerColor",
  },
  {
    id: "3",
    subTitle: "Completed Courses",
    title: "64",
    image: "/images/work-icon.png",
    icon: <TrendingUpIcon />,
    growthText: "3.5% bounce rate",
    color: "successColor",
  },
];

const Features = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {FeaturesData.map((feature) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={feature.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                p: "30px 20px 20px",
                mb: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "58px",
                    height: "58px",
                    lineHeight: "85px",
                    background: "rgba(85, 112, 241, 0.12)",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                  className="mr-15px"
                >
                  <img src={feature.image} alt="Icon" />
                </Box>

                <Box>
                  <Typography variant="p" sx={{ fontSize: "13px", mb: "5px" }}>
                    {feature.subTitle}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: 28, fontWeight: 700 }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
              </Box>

              <Box mt={2}>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className={`mr-5px ${feature.color}`}>
                    {feature.icon}
                  </span>
                  {feature.growthText}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Features;
