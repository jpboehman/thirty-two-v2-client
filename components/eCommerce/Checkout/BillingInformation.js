import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { generalRequest } from "http/httpService";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

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
  const [success, setSuccess] = useState(false);
  const [lastname, setLastname] = useState(false);
  const [email, setEmail] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [stripeErrorMessage, setStripeErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      console.log("stripe is failing");
      // Stripe.js has not yet loaded.
      // Makeing sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    console.log(`stripeLoad error: ${JSON.stringify(error)}`);

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
          setSuccess(true);
          setTimeout(() => {
            window.location.pathname = "/pages/our-stats-explained";
          }, 10000);
        }
      } catch (error) {
        console.log("Error", error);
        setStripeErrorMessage(
          `Payment failed - please double-check information and try again.`
        );
        setSuccess(false);
      }
    } else {
      console.log(error.message);
      setStripeErrorMessage(
        `Payment failed - please double-check information and try again.`
      );
    }
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
            spacing={3}
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
                  Payment Information
                </Typography>

                <CardElement options={CARD_OPTIONS} />
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
