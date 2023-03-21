import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "@/components/Authentication/Authentication.module.css";

const LockScreenForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <div className="authenticationBox">
        <Box
          component="main"
          sx={{
            maxWidth: "510px",
            ml: "auto",
            mr: "auto",
            padding: "80px 0 100px",
          }}
        >
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <Box component="form" noValidate onSubmit={handleSubmit}>
                <div className={styles.profileBox}>
                  <div className={styles.header}>
                    <div className={styles.headerContent}>
                      <h1>Welcome to admash Dashboard!</h1>
                      <p>
                        Hello Andrew Burns, enter your password to unlock the
                        screen !
                      </p>
                    </div>
                    <img
                      src="/images/working-on-table.png"
                      alt="Working on table"
                    />
                  </div>
                </div>

                <Box
                  sx={{
                    background: "#fff",
                    padding: "30px 20px",
                    mb: "20px",
                  }}
                  className="bg-black"
                >
                  <div className={styles.profileInfo}>
                    <img src="/images/profile.png" alt="Profile" />
                    <h3>Andrew Burns</h3>
                  </div>

                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                      >
                        Password
                      </Typography>

                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "16px",
                          padding: "12px 10px",
                          color: "#fff !important",
                        }}
                      >
                        Unlock
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default LockScreenForm;
