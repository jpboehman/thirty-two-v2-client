import React from 'react';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Support() {
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
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Support</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Support</li>
        </ul>
      </div>

      <Box
        component="main"
        sx={{
          maxWidth: "510px",
          ml: "auto",
          mr: "auto",
          padding: "50px 0 100px",
        }}
      >
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Box>
            <Typography as="h1" fontSize="28px" fontWeight="700" mb="5px">
              Contact with Us
            </Typography>

            <Typography fontSize="14px" mb="30px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
 
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  background: "#fff",
                  padding: "30px 20px",
                  borderRadius: "10px",
                }}
                className="bg-black"
              >
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
                      Name
                    </Typography>
                    <TextField
                      autoComplete="name"
                      name="name"
                      fullWidth
                      id="name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

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
                      Email
                    </Typography>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      autoComplete="email"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
 
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
                      Subject
                    </Typography>
                    <TextField
                      fullWidth
                      id="subject"
                      name="subject"
                      autoComplete="subject"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
 
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
                      Message
                    </Typography>
                    
                    <TextareaAutosize
                      minRows={5}
                      style={{ 
                        width: '100%',
                        background: '#FFFFFF',
                        color: '#5B5B98',
                        border: '1px solid rgb(193 193 193)',
                        borderRadius: '10px',
                        padding: '16.5px 14px'
                      }}
                      className="dark-textarea"
                    />
                  </Grid>
                </Grid>
              </Box>
 
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "15px",
                  padding: "12px 10px",
                  color: "#fff !important",
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
