import * as React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

const SingleUserExample = () => {
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
            mb: '20px'
          }}
        >
          Single User Example
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img 
              src="/images/profile.png" 
              alt="User" 
              width="55px"
              height="55px"
              className="borRadius100"
            />

            <Box className="ml-12px">
              <Typography as="h3" fontWeight="500" fontSize="15px">
                Andrew Burns
              </Typography>

              <Typography fontSize="13px">
                Programmer
              </Typography>
            </Box>
          </Box>

          <Box>
            <Stack direction="row">
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noreferrer"
                className="ml-1"
              >
                <IconButton 
                  aria-label="facebook" 
                  size="small" 
                  color="primary"
                  style={{
                    background: '#EDEFF5'
                  }}
                >
                  <FacebookIcon 
                    fontSize="inherit" 
                  />
                </IconButton>
              </a>

              <a 
                href="https://www.twitter.com/" 
                target="_blank" 
                rel="noreferrer"
                className="ml-1"
              >
                <IconButton 
                  aria-label="twitter" 
                  size="small" 
                  color="primary"
                  style={{
                    background: '#EDEFF5'
                  }}
                >
                  <TwitterIcon 
                    fontSize="inherit" 
                  />
                </IconButton>
              </a>

              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noreferrer"
                className="ml-1"
              >
                <IconButton 
                  aria-label="LinkedInIcon" 
                  size="small" 
                  color="primary"
                  style={{
                    background: '#EDEFF5'
                  }}
                >
                  <LinkedInIcon 
                    fontSize="inherit" 
                  />
                </IconButton>
              </a>
            </Stack>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default SingleUserExample;
