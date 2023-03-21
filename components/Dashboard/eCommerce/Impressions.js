import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Impressions = () => {
  return (
    <>
      <Box
        sx={{
          background: "#8676FF",
          borderRadius: "10px",
          padding: "20px 25px",
          mb: '15px'
        }}
        className="for-dark-impressions"
      >
        <Typography color="#fff" fontSize="13px" mb="5px">
          Impressions
        </Typography>

        <Typography
          as="h2"
          sx={{ color: "#fff", fontSize: 26, fontWeight: 700, mb: "5px" }}
        >
          $12,875{" "}
          <Typography 
            component="span" 
            fontSize="14px"
            className="successColor"
          >
            <i className="ri-arrow-up-s-fill"></i> 10%
          </Typography>
        </Typography>

        <Typography color="#fff" fontSize="13px">
          Compared to $21,490 last year
        </Typography>
      </Box>
    </>
  );
};

export default Impressions;
