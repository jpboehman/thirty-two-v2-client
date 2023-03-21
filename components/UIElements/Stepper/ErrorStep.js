import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'; 

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']; 

export default function ErrorStep() {
  const isStepFailed = (step) => {
    return step === 1;
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
          Error Step
        </Typography>

        <Box sx={{ width: '100%' }} className="rtl-step-label">
          <Stepper activeStep={1}>
            {steps.map((label, index) => {
              const labelProps = {};
              if (isStepFailed(index)) {
                labelProps.optional = (
                  <Typography variant="caption" color="error">
                    Alert message
                  </Typography>
                );

                labelProps.error = true;
              }

              return (
                <Step key={label}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </Card>
    </>
  );
}
