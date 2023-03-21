import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Profile() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            borderBottom: '1px solid #eee',
            paddingBottom: '10px'
          }}
          className="for-dark-bottom-border"
        >
          <Typography component="h1" fontWeight="500" fontSize="18px">
            Profile
          </Typography>

          <Typography fontSize="13px">
            Update your photo and personal details here.
          </Typography>
        </Box>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
              >
                First Name
              </Typography>
              <TextField
                autoComplete="given-name"
                name="firstName"
                fullWidth
                id="firstName" 
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
              >
                Last Name
              </Typography>

              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                autoComplete="family-name"
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
                Email Address
              </Typography>

              <TextField
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
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
                Upload Image
              </Typography>
              
              <TextField
                required
                fullWidth
                name="file"
                type="file"
                id="file"
                autoComplete="file"
              />

              <Box mt={1}>
                <img 
                  src="/images/user1.png" 
                  alt="profile" 
                  className="borRadius100"
                  width="50px"
                  height="50px"
                />
              </Box>
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "14px",
              padding: "12px 30px",
              color: "#fff !important"
            }}
          >
            Update
          </Button>
        </Box>
      </Box> 
    </> 
  );
}