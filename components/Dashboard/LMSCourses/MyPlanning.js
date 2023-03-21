import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MyPlanningData = [
  {
    id: "1",
    image: "/images/3d1.png",
    title: "Animation Learning",
    dateTime: "Dec 14, 08:30 PM",
  },
  {
    id: "2",
    image: "/images/3d2.png",
    title: "UI/UX Research",
    dateTime: "Dec 15, 09:30 PM",
  },
  {
    id: "3",
    image: "/images/3d3.png",
    title: "Machine Learning",
    dateTime: "Dec 16, 10:30 PM",
  },
  {
    id: "4",
    image: "/images/3d4.png",
    title: "Web Development",
    dateTime: "Dec 17, 11:30 PM",
  },
];

const MyPlanning = () => {
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
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            My Planning
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

        {MyPlanningData.map((plan) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F7F7FC",
              borderRadius: '10px',
              p: "25px 15px",
              mt: "15px"
            }}
            key={plan.id}
            className="dark-BG-101010"
          >
            <img
              src={plan.image}
              alt="Image"
              width="40px"
              height="40px"
              className="borderRadius10"
            />

            <Box className="ml-1">
              <Typography as="h4" fontWeight={500} fontSize="13px">
                {plan.title}
              </Typography>
              <Typography color="#A9A9C8;" fontSize="12px">
                {plan.dateTime}
              </Typography>
            </Box>
          </Box>
        ))}
      </Card>
    </>
  );
};

export default MyPlanning;
