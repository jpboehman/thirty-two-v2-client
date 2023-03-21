import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import styles from "@/components/Pages/Pricing/PricingPlanStyle2.module.css";

const priceInfo = [
  {
    id: 1,
    title: "Basic Plan",
    subTitle:
      "Perfect for an individual or a small team starting to get bigger",
    price: "50",
    duration: "per month",
    priceLists: [
      {
        title: "100 Responses a Month",
      },
      {
        title: "Unlimited Forms and Surveys",
      },
      {
        title: "Unlimited Fields",
      },
      {
        title: "Basic Form Creation Tools",
      },
      {
        title: "Up to 2 Subdomains",
      },
    ],
  },
  {
    id: 2,
    title: "Professional Plan",
    subTitle:
      "Perfect for an individual or a small team starting to get bigger",
    price: "50",
    duration: "per month",
    priceLists: [
      {
        title: "120 Responses a Month",
      },
      {
        title: "Unlimited Forms and Surveys",
      },
      {
        title: "Unlimited Fields",
      },
      {
        title: "Basic Form Creation Tools",
      },
      {
        title: "Up to 5 Subdomains",
      },
    ],
  },
  {
    id: 3,
    title: "Enterprise Plan",
    subTitle:
      "Perfect for an individual or a small team starting to get bigger",
    price: "150",
    duration: "per month",
    priceLists: [
      {
        title: "150 Responses a Month",
      },
      {
        title: "Unlimited Forms and Surveys",
      },
      {
        title: "Unlimited Fields",
      },
      {
        title: "Basic Form Creation Tools",
      },
      {
        title: "Up to 10 Subdomains",
      },
    ],
  },
];

const PricingPlanStyle2 = () => {
  return (
    <>
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 500,
          mt: "20px",
          mb: "20px",
          borderBottom: "1px solid #eee",
          paddingBottom: "10px",
        }}
        className="for-dark-bottom-border"
      >
        Pricing Plans - 2
      </Typography>

      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {priceInfo.map((info) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={info.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                p: "40px 25px",
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

              <Box align="center" mb={4}>
                <Link href="#" className="text-decoration-none">
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "30px",
                      fontSize: "14px",
                      p: "12px 20px",
                      color: "#fff !important",
                    }}
                  >
                    Get Started
                  </Button>
                </Link>
              </Box>

              <ul className={styles.priceList}>
                {info.priceLists.map((list) => (
                  <li key={list.title}>
                    <i className="ri-check-line"></i> {list.title}
                  </li>
                ))}
              </ul>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PricingPlanStyle2;
