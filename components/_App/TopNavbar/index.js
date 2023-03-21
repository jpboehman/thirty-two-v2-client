import * as React from "react";
import { AppBar, Toolbar, IconButton, Stack, Typography } from "@mui/material";
import SearchForm from "./SearchForm";
import Email from "./Email";
import Notification from "./Notification";
import Profile from "./Profile";
import Tooltip from "@mui/material/Tooltip";
import CurrentDate from "./CurrentDate";

const TopNavbar = ({ toogleActive }) => {
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
            <Tooltip title="Hide/Show" arrow>
              <IconButton
                size="sm"
                edge="start"
                color="inherit"
                onClick={toogleActive}
              >
                <i className="ri-align-left"></i>
              </IconButton>
            </Tooltip>

            {/* Search form */}
            <SearchForm />

            <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

            <Stack direction="row" spacing={2}>
              {/* CurrentDate */}
              <CurrentDate />

              {/* Notification */}
              <Email />

              {/* Notification */}
              <Notification />

              {/* Profile */}
              <Profile />
            </Stack>
          </Toolbar>
        </AppBar>
      </topnavbardark>
    </>
  );
};

export default TopNavbar;
