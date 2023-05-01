import * as React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import dynamic from "next/dynamic";
// const RichTextEditor = dynamic(() => import('@mantine/rte'), {
//   ssr: false,
// })

const BillingInformation = () => {
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
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            background: "#fff",
            padding: "30px 20px",
            borderRadius: "8px",
            mb: "15px",
          }}
          className="card-dark-bg"
        >
          <Typography as="h4" fontWeight="500" fontSize="18px" mb="10px">
            Billing Information
          </Typography>

          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item xs={12} md={12} lg={6}>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography
                  as="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  First Name
                </Typography>

                <TextField
                  autoComplete="first-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Enter name"
                  autoFocus
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography
                  as="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  Last Name
                </Typography>

                <TextField
                  autoComplete="last-name"
                  name="lastName"
                  required
                  fullWidth
                  id="LastName"
                  label="Enter name"
                  autoFocus
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography
                  as="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  Email Address
                </Typography>

                <TextField
                  autoComplete="email-address"
                  name="emailAddress"
                  required
                  fullWidth
                  id="emailAddress"
                  label="Enter email address"
                  autoFocus
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                  color: "#fff !important",
                }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default BillingInformation;
