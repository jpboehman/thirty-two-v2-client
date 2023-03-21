import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import IssuesSummaryChart from "./IssuesSummaryChart";

const IssuesSummary = () => {
  return (
    <>
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
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Issues Summary
          </Typography>
        </Box>
        
        {/* IssuesSummaryChart */}
        <IssuesSummaryChart />
      </Card>
    </>
  );
};

export default IssuesSummary;
