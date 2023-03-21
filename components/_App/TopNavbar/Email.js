import * as React from "react";
import styles from "@/components/_App/TopNavbar/Email.module.css";
import {
  IconButton,
  Button,
  Typography,
  Tooltip,
  Menu,
  Link,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Email = () => {
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
      <Tooltip title="Emails">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ 
            backgroundColor: '#f5f5f5',
            width: '40px',
            height: '40px',
            p: 0
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          className="ml-2 for-dark-email"
        >
          <MailOutlineIcon color="action" />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            padding: "5px 20px 5px",
            borderRadius: "10px",
            boxShadow: "0px 10px 35px rgba(50, 110, 189, 0.2)",
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
        <div className={styles.header}>
          <Typography variant="h4">Emails</Typography>
          <Button variant="text">clear all</Button>
        </div>

        <div className={styles.notification}>
          <div className={styles.notificationList}>
            <div className={styles.notificationListContent}>
              <img
                src="/images/user2.png"
                alt="User"
                width={35}
                height={35}
                className="borRadius100"
              />
              <Typography component="div">
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "#5B5B98",
                    fontWeight: "500",
                  }}
                  className="ml-1"
                >
                  Invoices have been paid
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#8a8aab",
                  }}
                  className="ml-1"
                >
                  Lorem ipsum dolor sit amet, consectetur...
                </Typography>
              </Typography>
            </div>

            <Typography sx={{ fontSize: "12px", color: "#A9A9C8", mt: 1 }}>
              1 min ago
            </Typography>
          </div>

          <div className={styles.notificationList}>
            <div className={styles.notificationListContent}>
              <img
                src="/images/user3.png"
                alt="User"
                width={35}
                height={35}
                className="borRadius100"
              />
              <Typography component="div">
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "#5B5B98",
                    fontWeight: "500",
                  }}
                  className="ml-1"
                >
                  Allow users to like products
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#8a8aab",
                  }}
                  className="ml-1"
                >
                  Sed ut perspiciatis unde omnis iste natus...
                </Typography>
              </Typography>
            </div>

            <Typography sx={{ fontSize: "12px", color: "#A9A9C8", mt: 1 }}>
              2 min ago
            </Typography>
          </div>

          <div className={styles.notificationList}>
            <div className={styles.notificationListContent}>
              <img
                src="/images/user4.png"
                alt="User"
                width={35}
                height={35}
                className="borRadius100"
              />
              <Typography component="div">
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "#5B5B98",
                    fontWeight: "500",
                  }}
                  className="ml-1"
                >
                  Sales report
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#8a8aab",
                  }}
                  className="ml-1"
                >
                  At vero eos et accusamus et iusto odio...
                </Typography>
              </Typography>
            </div>

            <Typography sx={{ fontSize: "12px", color: "#A9A9C8", mt: 1 }}>
              3 min ago
            </Typography>
          </div>

          <Typography component="div" textAlign="center">
            <Link
              href="/email/inbox/"
              underline="none"
              sx={{
                fontSize: "13px",
                color: "#757FEF",
                fontWeight: "500",
                mt: "10px",
                display: "inline-block",
              }}
            >
              View All{" "}
              <span className={styles.rightArrow}>
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </Link>
          </Typography>
        </div>
      </Menu>
    </>
  );
};

export default Email;
