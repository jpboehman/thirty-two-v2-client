import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RevenueChart from "./RevenueChart";
import styles from "@/components/Dashboard/Analytics/TotalRevenue/TotalRevenueList.module.css";

const TotalRevenue = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
            Total Revenue
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem sx={{ fontSize: "14px" }}>Last 15 Days</MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>Last Month</MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>Last Year</MenuItem>
          </Menu>
        </Box>

        {/* RevenueChart */}
        <RevenueChart />

        <>
          <div className={styles.totalRevenueList}>
            <p>Avg. Session</p>
            <div className={styles.rightContent}>
              <h5>972</h5>
              <p>
                <i className="ri-arrow-right-up-line successColor"></i> 49%
              </p>
            </div>
          </div>

          <div className={styles.totalRevenueList}>
            <p>Conversion Rate</p>
            <div className={styles.rightContent}>
              <h5>102</h5>
              <p>
                <i className="ri-arrow-right-up-line successColor"></i> 18%
              </p>
            </div>
          </div>

          <div className={styles.totalRevenueList}>
            <p>Avg. Duration</p>
            <div className={styles.rightContent}>
              <h5>3m</h5>
              <p>
                <i className="ri-arrow-right-up-line successColor"></i> 42%
              </p>
            </div>
          </div>

          <div className={styles.totalRevenueList}>
            <p>Weekly Earning</p>
            <div className={styles.rightContent}>
              <h5>$972</h5>
              <p>
                <i className="ri-arrow-right-down-line dangerColor"></i> 28%
              </p>
            </div>
          </div>

          <div className={styles.totalRevenueList}>
            <p>Monthly Revenue</p>
            <div className={styles.rightContent}>
              <h5>50k</h5>
              <p>
                <i className="ri-arrow-right-up-line successColor"></i> 70%
              </p>
            </div>
          </div>
        </>
      </Card>
    </>
  );
};

export default TotalRevenue;
