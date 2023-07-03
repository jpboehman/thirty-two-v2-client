import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function NcaaTeamsOverview() {
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
          What do these Team Stats mean?
        </Typography>

        <Typography>
          Through the use of our EPS statistic, we are able to grade a player's
          performance in a game. These grades are a unique way to understand a
          player's holistic performance within a specific game
        </Typography>
      </Card>
    </>
  );
}
