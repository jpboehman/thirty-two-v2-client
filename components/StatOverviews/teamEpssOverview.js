import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function TeamEpssOverview() {
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
        <Box mb="15px"></Box>

        <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
          How accurate is EPSS?
        </Typography>

        <Typography>
          For the NBA, there is a strong, positive correlation (0.93) between
          EPSS and win percentage. For the NCAA, there is a strong, positive
          correlation (0.89) between EPSS and win percentage. As shown in the
          graph below and through our understanding of the correlation in both
          the NBA and NCAA, EPSS and win percentage are both strongly related.
          The higher the EPSS, the higher the win percentage. The lower the
          EPSS, the lower the win percentage.
        </Typography>
      </Card>
    </>
  );
}
