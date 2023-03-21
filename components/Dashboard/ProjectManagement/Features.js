import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const FeaturesData = [
  {
    id: "1",
    subTitle: "Due Tasks",
    title: "41",
    iconName: "ri-pie-chart-2-line",
    badgeProgress: "5.80%",
    badgeClass: "successBadge",
    badgeIcon: "ri-arrow-up-s-fill",
    growthText: "Completed: 13 Projects this month",
  },
  {
    id: "2",
    subTitle: "Active Projects",
    title: "65",
    iconName: "ri-briefcase-line",
    badgeProgress: "1.04%",
    badgeClass: "dangerBadge",
    badgeIcon: "ri-arrow-down-s-fill",
    growthText: "Projects this month",
  },
  {
    id: "3",
    subTitle: "Total Hours",
    title: "599",
    iconName: "ri-time-line",
    badgeProgress: "5.80%",
    badgeClass: "successBadge",
    badgeIcon: "ri-arrow-up-s-fill",
    growthText: "Projects this month",
  },
  {
    id: "4",
    subTitle: "Total Projects",
    title: "24k",
    iconName: "ri-shield-check-line",
    badgeProgress: "7.80%",
    badgeClass: "successBadge",
    badgeIcon: "ri-arrow-up-s-fill",
    growthText: "Completed: 13 Projects this month",
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
                p: "20px 15px",
                mb: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
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
                      lineHeight: "58px",
                      background: "#757FEF",
                      color: "#fff",
                      fontSize: "30px",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                    className="mr-10px"
                  >
                    <i className={feature.iconName}></i>
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: "13px" }}>
                      {feature.subTitle}
                    </Typography>
                    <Typography
                      variant="h1"
                      sx={{ fontSize: 25, fontWeight: 700, marginTop: '4px' }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <span
                    className={feature.badgeClass}
                    style={{ fontSize: "13px", fontWeight: "500" }}
                  >
                    {feature.badgeProgress}
                    <i
                      className={feature.badgeIcon}
                      style={{
                        fontSize: "13px",
                        position: "relative",
                        top: "2px",
                        lineHeight: "1",
                      }}
                    ></i>
                  </span>
                </Box>
              </Box>

              <Box mt={2}>
                <Typography
                  sx={{
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className="successColor mr-5px">{feature.icon}</span>
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
