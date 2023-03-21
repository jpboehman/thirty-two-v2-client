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
    title: "$25,890",
    subTitle: "Total Sales",
    image: "/images/graph-icon.png",
    icon: <TrendingUpIcon />,
    growthText: "1.3% Up from past week",
    color: "successColor",
  },
  {
    id: "2",
    title: "$25,890",
    subTitle: "Total Orders",
    image: "/images/work-icon.png",
    icon: <TrendingUpIcon />,
    growthText: "1.5% Up from past week",
    color: "successColor",
  },
  {
    id: "3",
    title: "183.35M",
    subTitle: "Total Customers",
    image: "/images/users-icon.png",
    icon: <TrendingDownIcon />,
    growthText: "1.6% Up from past week",
    color: "dangerColor",
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
                p: "25px 20px",
                mb: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "15px",
                }}
              >
                <Box>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: 25, fontWeight: 700, mb: "5px" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="p" fontSize={14}>
                    {feature.subTitle}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "62px",
                    height: "62px",
                    lineHeight: "85px",
                    background: "rgba(85, 112, 241, 0.12)",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <img src={feature.image} alt="Graph" />
                </Box>
              </Box>

              <Box>
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
