import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import styles from "@/components/Pages/Pricing/PricingPlanStyle1.module.css";

const priceInfo = [
  {
    id: 1,
    title: "Basic Plan",
    subTitle: "A simple start for everyone",
    icon: "ri-shield-check-fill",
    price: "50",
    duration: "per month",
    priceLists: [
      {
        title: "Free Live Support",
      },
      {
        title: "30GB Disk Space",
      },
      {
        title: "Scalable Bandwith",
      },
      {
        title: "Free Setup",
      },
    ],
  },
  {
    id: 2,
    title: "Professional Plan",
    subTitle: "A simple start for everyone",
    icon: "ri-pie-chart-2-line",
    price: "50",
    duration: "per month",
    priceLists: [
      {
        title: "Free Live Support",
      },
      {
        title: "35GB Disk Space",
      },
      {
        title: "Scalable Bandwith",
      },
      {
        title: "Free Setup",
      },
    ],
  },
  {
    id: 3,
    title: "Enterprise Plan",
    subTitle: "A simple start for everyone",
    icon: "ri-briefcase-line",
    price: "150",
    duration: "per month",
    priceLists: [
      {
        title: "Free Live Support",
      },
      {
        title: "40GB Disk Space",
      },
      {
        title: "Scalable Bandwith",
      },
      {
        title: "Free Setup",
      },
    ],
  },
  {
    id: 4,
    title: "Unlimited Plan",
    subTitle: "A simple start for everyone",
    icon: "ri-star-half-line",
    price: "200",
    duration: "per month",
    priceLists: [
      {
        title: "Free Live Support",
      },
      {
        title: "50GB Disk Space",
      },
      {
        title: "Scalable Bandwith",
      },
      {
        title: "Free Setup",
      },
    ],
  },
];

const PricingPlanStyle1 = () => {
  return (
    <>
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 500,
          mb: "20px",
          borderBottom: "1px solid #eee",
          paddingBottom: "10px",
        }}
        className="for-dark-bottom-border"
      >
        Pricing Plans - 1
      </Typography>

      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {priceInfo.map((info) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={info.id}>
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
                  justifyContent: "space-between",
                  mb: "20px",
                }}
              >
                <Box>
                  <Typography
                    as="h3"
                    sx={{
                      fontSize: 18,
                      fontWeight: 500,
                      mb: "5px",
                    }}
                  >
                    {info.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                    }}
                  >
                    {info.subTitle}
                  </Typography>
                </Box>

                <div className={styles.icon}>
                  <i className={info.icon}></i>
                </div>
              </Box>

              <Typography
                as="h3"
                sx={{
                  fontSize: 32,
                  fontWeight: 700,
                  mb: "20px",
                }}
              >
                ${info.price}/{" "}
                <span style={{ fontSize: "12px" }}>{info.duration}</span>
              </Typography>

              <Box align="center" mb={3}>
                <Link href="#" className="text-decoration-none">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      fontSize: "14px",
                      p: "10px 25px",
                      color: "#fff !important",
                    }}
                  >
                    Sign Up Now
                  </Button>
                </Link>
              </Box>

              <ul className={styles.priceList}>
                {info.priceLists.map((list) => (
                  <li key={list.title}>{list.title}</li>
                ))}
              </ul>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PricingPlanStyle1;
