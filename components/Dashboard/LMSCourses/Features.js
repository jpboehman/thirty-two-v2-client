import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const FeaturesData = [
  {
    id: "1",
    title: "120",
    subTitle: "Enrolled Courses",
    image: "/images/icon1.png",
  },
  {
    id: "2",
    title: "17",
    subTitle: "Active Courses",
    image: "/images/icon2.png",
  },
  {
    id: "3",
    title: "64",
    subTitle: "Completed Courses",
    image: "/images/icon3.png",
  },
  {
    id: "4",
    title: "2.1M",
    subTitle: "Total Students",
    image: "/images/icon4.png",
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
          <Grid item xs={12} sm={6} md={6} lg={6} xl={3} key={feature.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                p: "25px",
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
                    width: "84px",
                    height: "84px",
                    borderRadius: "100%",
                  }}
                  className="mr-15px"
                >
                  <img src={feature.image} alt="Icon" />
                </Box>

                <Box>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: 28, fontWeight: 700, mb: "5px" }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: 14 }}>
                    {feature.subTitle}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Features;
