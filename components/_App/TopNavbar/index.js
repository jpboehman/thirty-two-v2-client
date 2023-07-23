import * as React from "react";
import { AppBar, Toolbar, IconButton, Stack, Typography } from "@mui/material";
import SearchForm from "./SearchForm";
import Email from "./Email";
import Notification from "./Notification";
import Profile from "./Profile";
import Tooltip from "@mui/material/Tooltip";
import CurrentDate from "./CurrentDate";

const TopNavbar = () => {
  return (
    <>
      <topnavbardark>
        <AppBar
          color="inherit"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
            py: "6px",
            mb: "30px",
            position: "sticky",
          }}
          className="top-navbar-for-dark"
        >
          <Toolbar>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <img
                src="/images/32_Analytics_logo.jpg"
                alt="Analytics logo"
                style={{ width: "auto", height: "80px" }}
              />
              <Typography component="div"></Typography>
            </div>
            <Stack direction="row" spacing={2}></Stack>
          </Toolbar>
        </AppBar>
      </topnavbardark>
    </>
  );
};

export default TopNavbar;
