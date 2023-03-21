import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "@/components/Dashboard/eCommerce/NewCustomers/NewCustomers.module.css"

const NewCustomersData = [
  {
    id: "1",
    image: "/images/user2.png",
    name: "Jordan Stevenson",
    userName: "@jstevenson5c",
    price: "$289.50",
    order: "15 Orders",
  },
  {
    id: "2",
    image: "/images/user3.png",
    name: "Lydia Reese",
    userName: "@lreese3b",
    price: "$289.50",
    order: "15 Orders",
  },
  {
    id: "3",
    image: "/images/user4.png",
    name: "Easin Arafat",
    userName: "@jstevenson5c",
    price: "$289.50",
    order: "15 Orders",
  },
  {
    id: "4",
    image: "/images/user5.png",
    name: "Easin Arafat",
    userName: "@jstevenson5c",
    price: "$289.50",
    order: "15 Orders",
  }
];

const NewCustomers = () => {
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
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            New Customers
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
          {NewCustomersData.slice(0, 4).map((customer) => (
            <div className={styles.newCustomerList} key={customer.id}>
              <div className={styles.leftContent}>
                <img src={customer.image} alt="user" />
                <div>
                  <h3>{customer.name}</h3>
                  <p>{customer.userName}</p>
                </div>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.price}>
                  {customer.price}
                </div>
                <div className={styles.order}>
                  {customer.order}
                </div>
              </div>
            </div>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default NewCustomers;
