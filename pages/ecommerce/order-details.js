import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import TrackOrder from "@/components/eCommerce/OrderDetails/TrackOrder";
import OrderTable from "@/components/eCommerce/OrderDetails/TrackOrder/OrderTable";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

const OrderDetails = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Order Details</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Order Details</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* TrackOrder */}
          <TrackOrder />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* OrderTable */}
          <OrderTable />
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={4}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500,
                mb: "15px",
              }}
            >
              Shipping Information
            </Typography>

            <Typography
              as="h3"
              sx={{
                fontSize: 14,
                fontWeight: 500,
                mb: "15px",
              }}
            >
              Thomas Adison
            </Typography>

            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "60px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  Address:
                </span>
                3559 Roosevelt Wilson Lane San Bernardino, CA 92405
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "60px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  Phone:
                </span>
                (123) 456-7890
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "60px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  Email:
                </span>
                contact@gmail.com
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500,
                mb: "15px",
              }}
            >
              Billing Information
            </Typography>

            <Typography
              as="h3"
              sx={{
                fontSize: 14,
                fontWeight: 500,
                mb: "15px",
              }}
            >
              Thomas Adison
            </Typography>

            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "100px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  Payment Type:
                </span>
                Credit Card
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "100px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  Provider:
                </span>
                Visa ending in 2851
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "100px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  Valid Date:
                </span>
                April 22 2019
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "100px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  CVV:
                </span>
                xxx
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500,
                mb: "15px",
              }}
            >
              Delivery Info
            </Typography>

            <Typography
              as="h3"
              sx={{
                fontSize: 14,
                fontWeight: 500,
                mb: "15px",
              }}
            >
              UPS Delivery
            </Typography>

            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "100px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  Order ID :
                </span>
                xxxx235
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "100px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  Payment Mode :
                </span>
                COD
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mt: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "100px",
                    fontWeight: "500",
                  }}
                  className='mr-10px'
                >
                  Email:
                </span>
                info@contact.com
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderDetails;
