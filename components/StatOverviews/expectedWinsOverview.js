import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function ExpectedWinsOverview() {
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
          What are Expected Wins?
        </Typography>

        <Typography>
          Through the use of our EPS statistic, we are able to project a NBA
          Men’s Basketball team’s win percentage which then allows us to project
          how many wins a team is expected to have. These projections are a
          unique way to understand whether a team has played better or worse
          than their record indicates.
        </Typography>
      </Card>
    </>
  );
}
