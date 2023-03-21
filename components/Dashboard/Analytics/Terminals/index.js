import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import styles from "@/components/Dashboard/Analytics/Terminals/Terminals.module.css";

const Terminals = () => {
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
        <Box
          sx={{
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
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
            Terminals
          </Typography>
        </Box>

        <div className={styles.terminalsBox}>
          <div className={styles.monthlyEarning}>
            <h3>$27632</h3>
            <p>Monthly Earning</p>
          </div>
          
          <div className={styles.usersEarning}>
            <h3>82.9k</h3>
            <p>Users</p>
          </div>

          <div className={styles.inactiveEarning}>
            <h3>0.9k</h3>
            <p>Inactive</p>
          </div>

          <ul>
            <li>Monthly Earning</li>
            <li>Users</li>
            <li>Inactive</li>
          </ul>
        </div>
      </Card>
    </>
  );
};

export default Terminals;
