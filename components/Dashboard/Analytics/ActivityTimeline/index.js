import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "@/components/Dashboard/Analytics/ActivityTimeline/ActivityTimeline.module.css";

const ActivityTimelineData = [
  {
    id: "1",
    title: "8 Invoices have been paid",
    subTitle: "Invoices have been paid to the company.",
    icon: "/images/pdf-icon.png",
    date: "11:47 PM Wednesday",
  },
  {
    id: "2",
    title: "8 Invoices have been paid",
    subTitle: "Create a new project for client Johnson John",
    icon: "/images/man.png",
    date: "April, 18",
  },
  {
    id: "3",
    title: "Added new style collection",
    subTitle: "Product uploaded By Nesta Technologies",
    icon: "/images/small-product-img.png",
    date: "02:14 PM Today",
  },
  {
    id: "4",
    title: "Brust opened new showcase",
    subTitle: "Product uploaded By Nesta Technologies",
    icon: "/images/small-product-img2.png",
    date: "5 Min Ago",
  },
];

const ActivityTimeline = () => {
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
            mb: "15px",
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
            Activity Timeline
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
            <MenuItem>Last 15 Days</MenuItem>
            <MenuItem>Last Month</MenuItem>
            <MenuItem>Last Year</MenuItem>
          </Menu>
        </Box>

        <div className={styles.timelineList}>
          {ActivityTimelineData.slice(0, 4).map((timeline) => (
            <div className={styles.tList} key={timeline.id}>
              <h4>{timeline.title}</h4>
              <div className={styles.content}>
                <img src={timeline.icon} alt="Icon" />
                <h5>{timeline.subTitle}</h5>
              </div>
              <p className={styles.date}>{timeline.date}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default ActivityTimeline;
