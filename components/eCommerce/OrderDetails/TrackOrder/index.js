import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import styles from "@/components/eCommerce/OrderDetails/TrackOrder/TrackOrder.module.css";

const ActivityTimelineData = [
  {
    id: "1",
    title: "Order Placed",
    date: "April 21 2019 07:22 AM",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: "2",
    title: "Packed",
    date: "April 22 2019 12:16 AM",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: "3",
    title: "Shipped",
    date: "April 22 2019 05:16 PM",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: "4",
    title: "Delivered",
    date: "Estimated Delivery Within 3 Days",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
];

const TrackOrder = () => {
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
        <Typography
          as="h3"
          sx={{
            fontSize: 16,
            fontWeight: 500,
            mb: "20px",
          }}
        >
          Track Order
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: "20px"
          }}
        >
          <Box>
            <Typography
              as="h3"
              sx={{
                fontSize: 14,
                fontWeight: 500,
                mb: "5px",
              }}
            >
              Order ID:
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              #VL2667
            </Typography>
          </Box>

          <Box>
            <Typography
              as="h3"
              sx={{
                fontSize: 14,
                fontWeight: 500,
                mb: "5px",
              }}
            >
              Tracking ID:
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              1004152012012
            </Typography>
          </Box>
        </Box>
      
        <div className={styles.timelineList}>
          {ActivityTimelineData.slice(0, 4).map((timeline) => (
            <div className={styles.tList} key={timeline.id}>
              <h4>{timeline.title}</h4>
              <p className={styles.date}>{timeline.date}</p>
              <p className={styles.text}>
                {timeline.text}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default TrackOrder;
