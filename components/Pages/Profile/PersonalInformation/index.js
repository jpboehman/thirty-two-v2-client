import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";

const personalInfo = [
  {
    title: 'Full Name :',
    text: 'Andrew Burns',
  },
  {
    title: 'Mobile :',
    text: '(123) 123 1234',
  },
  {
    title: 'Email :',
    text: 'andrewburns@gmail.com',
  },
  {
    title: 'Location : ',
    text: 'USA',
  },
  {
    title: 'Experience : ',
    text: 'Back end Developer',
  },
]

const PersonalInformation = () => {
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
        <Box
          sx={{
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Personal Information
          </Typography>
        </Box>
        
        <Box>
          <Typography 
            as='h4' 
            fontWeight='500' 
            fontSize='15px' 
            mb={1}
          >
            About Me:
          </Typography>

          <Typography mb={1}>Hi I'm Andrew Burns,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</Typography>
          
          {personalInfo.map((info) => (
            <Box
              sx={{
                display: 'flex',
                borderBottom: '1px solid #F7FAFF',
                p: '10px 0',
              }}
              key={info.title}
              className="for-dark-bottom-border"
            >
              <Typography 
                as='h4' 
                fontWeight='500' 
                fontSize='14px' 
                width='100px'
              >
                {info.title}
              </Typography>

              <Typography>{info.text}</Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default PersonalInformation;
