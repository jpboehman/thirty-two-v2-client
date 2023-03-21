import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';

export default function BasicWithIcons() {

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
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: '10px'
          }}
        >
          Basic With Icons
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Box sx={{mb: "10px"}}>
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <AccountCircle 
                    sx={{ color: 'action.active', my: 0.5 }} 
                    className="mr-1 whiteColor"
                  />
                  <TextField 
                    id="name" 
                    label="Name" 
                    variant="standard" 
                    fullWidth
                    className="with-icons-input"
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <MailOutlineIcon 
                    sx={{ color: 'action.active', my: 0.5 }} 
                    className="mr-1 whiteColor"
                  />
                  <TextField 
                    id="email" 
                    label="Email Address" 
                    variant="standard" 
                    fullWidth
                    className="with-icons-input"
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <LockIcon 
                    sx={{ color: 'action.active', my: 0.5 }} 
                    className="mr-1 whiteColor"
                  />
                  <TextField 
                    id="password" 
                    label="Password" 
                    variant="standard" 
                    fullWidth
                    className="with-icons-input"
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <LockIcon 
                    sx={{ color: 'action.active', my: 0.5 }} 
                    className="mr-1 whiteColor"
                  />
                  <TextField 
                    id="confirmPassword" 
                    label="Confirm Password" 
                    variant="standard" 
                    fullWidth
                    className="with-icons-input"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "16px",
              padding: "12px 10px",
              color: "#fff !important",
            }}
          >
            Get Started
          </Button>

          <Typography fontSize="14px" mt="20px" align="center">
            Already have an account?{" "}
            <Link
              href="#"
              className="primaryColor text-decoration-none"
            >
             Sign In
            </Link>
          </Typography>
        </Box>
      </Card>
    </>
  );
}
