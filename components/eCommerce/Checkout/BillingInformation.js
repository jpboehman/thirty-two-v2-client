import * as React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const BillingInformation = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // Select dropdown
  const [countrySelect, setCountrySelect] = React.useState('');
  const handleChange = (event) => {
    setCountrySelect(event.target.value);
  };

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            background: "#fff",
            padding: "30px 20px",
            borderRadius: "8px",
            mb: "15px"
          }}
          className="card-dark-bg"
        >
          <Typography as="h4" fontWeight="500" fontSize="18px" mb="10px">
            Billing Information
          </Typography>

          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
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
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
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
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
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
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Phone
              </Typography>

              <TextField
                autoComplete="phone"
                name="phone"
                required
                fullWidth
                id="phone"
                label="Enter phone number"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Address
              </Typography>

              <TextField
                autoComplete="address"
                name="address"
                required
                fullWidth
                id="address"
                label="Your location"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Country
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={countrySelect}
                  label="Country"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>USA</MenuItem>
                  <MenuItem value={20}>Canada</MenuItem>
                  <MenuItem value={30}>Australia</MenuItem>
                  <MenuItem value={30}>UK</MenuItem>
                </Select>
              </FormControl>
            </Grid>
     
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Town/City
              </Typography>


              <TextField
                autoComplete="town-city"
                name="townCity"
                required
                fullWidth
                id="townCity"
                label="Town/city" 
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                State
              </Typography>

              <TextField
                autoComplete="state"
                name="state"
                required
                fullWidth
                id="state"
                label="State" 
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Zip Code
              </Typography>

              <TextField
                autoComplete="zip-code"
                name="zipCode"
                required
                fullWidth
                id="zipCode"
                label="Enter Zip Code"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Order Notes : 
              </Typography>
  
              <RichTextEditor
                id="rte"
                controls={[
                  ['bold', 'italic', 'underline', 'link', 'image'],
                  ['unorderedList', 'h1', 'h2', 'h3'],
                  ['sup', 'sub'],
                  ['alignLeft', 'alignCenter', 'alignRight'],
                ]}
              />
            </Grid>
  
            <Grid item xs={12} textAlign="end">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                  color: "#fff !important"
                }}
              >
                Procced To Shipping
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default BillingInformation;