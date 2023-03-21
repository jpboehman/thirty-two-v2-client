import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      // borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
];

const data = {
  labels,
  datasets: [
    {
      label: "Achivement",
      data: [90, 80, 85, 70, 60, 50, 40, 60,],
      borderColor: "#F765A3",
      backgroundColor: "#FFA5CB",
    },
    {
      label: "Learning Path",
      data: [80, 70, 75, 65, 55, 45, 35, 55,],
      borderColor: "#A155B9",
      backgroundColor: "#E697FF",
    },
    {
      label: "IQ Test Score",
      data: [70, 60, 70, 60, 50, 40, 30, 50,],
      borderColor: "#757FEF",
      backgroundColor: "#2DB6F5",
    },
  ],
};

const ExperienceIQ = () => {
  // Dropdown
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
          p: "25px",
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
            mb: "10px",
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
            Experience IQ
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
            <MenuItem sx={{ fontSize: '14px' }}>Last 15 Days</MenuItem>
            <MenuItem sx={{ fontSize: '14px' }}>Last Month</MenuItem>
            <MenuItem sx={{ fontSize: '14px' }}>Last Year</MenuItem>
          </Menu>
        </Box>

        <Bar options={options} data={data} height={340} />
      </Card>
    </>
  );
};

export default ExperienceIQ;
