import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function PlayerGradesOverview() {
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
          What are Player Season Grades?
        </Typography>

        <Typography>
          The Player Season Grade statistic grades a player’s season on a scale
          of 0-100. The grade is calculated through the use of traditional box
          score stats, advanced stats, and our very own EPS statistic. The main
          purpose of Player Season Grades is to take all the statistics that go
          into evaluating a player’s performance and simplify it down to one
          number. This offers an alternative way of evaluating player
          performance. Please keep in mind that the statistic doesn’t attempt to
          rate players but strictly grade their season.
        </Typography>
      </Card>
    </>
  );
}
