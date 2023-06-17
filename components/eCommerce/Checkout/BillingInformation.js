import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

import { generalRequest } from "http/httpService";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "navy",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "20px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
  },
};

const BillingInformation = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  // const [success, setPaymentSuccess] = useState();
  const [message, setMessage] = useState("");

  const onChangeInput = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [stripeErrorMessage, setStripeErrorMessage] = useState("");

  const handleRegister = async () => {
    setMessage("");

    try {
      const res = await generalRequest.post("/auth/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      if (res.data.message) {
        console.log(res);
        setMessage(res.data.message);
        setRegisterSuccess(true);
        console.log(res.data.message);
        return true; // Registration success
      }
    } catch (err) {
      setRegisterSuccess(false);
      setMessage(err);
      return false; // Registration failed
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe is failing");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const { data } = await generalRequest.post("/auth/stripe-payment", {
          amount: 3000,
          id,
        });

        if (data.success) {
          console.log(data);
          console.log("Successful payment");
          localStorage.setItem("idx", uuidv4());
          localStorage.setItem("ids", id);
          setPaymentSuccess(true);
          const userSuccess = await handleRegister(); // Create user account after successful payment
          if (userSuccess) {
            setTimeout(() => {
              window.location.pathname = "/pages/our-stats-explained";
            }, 2000);
          }
        }
      } catch (error) {
        console.log("Error", error);
        setStripeErrorMessage(
          `Payment failed - please double-check information and try again.`
        );
        setPaymentSuccess(false);
      }
    } else {
      console.log(error.message);
      setStripeErrorMessage(
        `Payment failed - please double-check information and try again.`
      );
      setPaymentSuccess(false);
    }
  };

  return (
    <div className="authenticationBox">
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
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Typography fontSize="15px" mb="30px">
              Already have an account?{" "}
              <Link
                href="/authentication/sign-in"
                className="primaryColor text-decoration-none"
              >
                Sign In
              </Link>
            </Typography>
            <Box
              sx={{
                background: "#fff",
                padding: "30px 20px",
                borderRadius: "10px",
                mb: "20px",
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
                    Username
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                    onChange={onChangeInput}
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
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                    onChange={onChangeInput}
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
                    onChange={onChangeInput}
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
                    Confirm Password
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="new-password"
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                    onChange={onChangeInput}
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
                    Payment Information
                  </Typography>
                  <CardElement options={CARD_OPTIONS} />
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
              Register
            </Button>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default BillingInformation;
