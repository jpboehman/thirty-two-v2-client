import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Badge from '@mui/material/Badge';
import styles from "@/components/Dashboard/LMSCourses/Messages/Messages.module.css";

const MessagesData = [
  {
    id: "1",
    name: "Johen Mandel",
    text: "Hi, i want make enquiries...",
    image: "/images/user15.png",
    badgeBgColor: "#5570F1",
    newTag: "New",
    number: "1",
    time: "12:55 AM"
  },
  {
    id: "2",
    name: "Thomas Albart",
    text: "Hi, i want make enquiries...",
    image: "/images/user16.png",
    badgeBgColor: "#5570F1",
    newTag: "New",
    number: "2",
    time: "6:55 AM"
  },
  {
    id: "3",
    name: "Maical Doe",
    text: "Hi, i want make enquiries...",
    image: "/images/user17.png",
    badgeBgColor: "#5570F1",
    newTag: "New",
    number: "3",
    time: "8:00 AM"
  },
];

const Messages = () => {
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
          p: "20px",
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
              fontSize: 17,
              fontWeight: 500,
            }}
          >
            Messages
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

        <Box>
          {MessagesData.slice(0, 3).map((message) => (
            <div className={styles.messagesList} key={message.id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative"
                    }}
                  >
                    <div>
                      <img
                        src={message.image}
                        alt="User"
                        width="45"
                        height="45"
                        className="borderRadius10"
                      />
                    </div>
                    <Badge
                      style={{ backgroundColor: `${message.badgeBgColor}` }}
                      sx={{
                        width: '13px',
                        height: '13px',
                        position: 'absolute',
                        borderRadius: '100%',
                        border: '2px solid #fff',
                        top: '0',
                        right: '-5px'
                      }}
                    ></Badge>
                  </Box>

                  <Box className="ml-1">
                    <Typography as="h4" fontSize="13px" fontWeight="500" mb="5px">
                      {message.name}
                    </Typography>
                    <Typography fontSize="12px">
                      {message.text}
                    </Typography>
                  </Box>
                </Box>

                <Box textAlign="right">
                  <Typography component="div">
                    <Typography
                      component="span"
                      sx={{
                        background: "#FEF5EA",
                        color: "#260944",
                        borderRadius: "8px",
                        fontSize: "10px",
                        padding: "2px 7px",
                        display: "inline-block",
                      }}
                      className="mr-10px"
                    >
                      {message.newTag}
                    </Typography>

                    <Typography
                      component="span"
                      sx={{
                        background: "#FFCC91",
                        color: "#260944",
                        borderRadius: "8px",
                        fontSize: "10px",
                        width: "20px",
                        height: "20px",
                        display: "inline-block",
                        lineHeight: "20px",
                        textAlign: "center",
                        borderRadius: "100px",
                      }}
                    >
                      {message.number}
                    </Typography>
                  </Typography>

                  <Typography
                    sx={{
                      color: "#A9A9C8",
                      fontSize: "11px",
                      marginTop: "5px",
                    }}
                  >
                    {message.time}
                  </Typography>
                </Box>
              </Box>
            </div>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default Messages;
