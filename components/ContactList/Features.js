import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const FeaturesData = [
  {
    id: "1",
    subTitle: "Completed Projects",
    title: "24k",
    image: "/images/users-icon.png",
  },
  {
    id: "2",
    subTitle: "Pending Projects",
    title: "17",
    image: "/images/graph-icon.png",
  },
  {
    id: "3",
    subTitle: "Total Revenue",
    title: "16.2M",
    image: "/images/work-icon.png",
  }
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
                  className='mr-15px'
                >
                  <img src={feature.image} alt="Icon" />
                </Box>

                <Box>
                  <Typography variant="p" sx={{ fontSize: '13px', mb: "5px" }}>
                    {feature.subTitle}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: 28, fontWeight: 700, }}
                  >
                    {feature.title}
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
