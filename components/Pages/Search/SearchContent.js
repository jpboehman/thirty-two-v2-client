import * as React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Pagination from '@mui/material/Pagination';

export default function SearchContent() {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "30px",
          mb: "30px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 16,
            fontWeight: 500,
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "5px",
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          120 <span style={{ fontSize: '14px', color: '#5B5B98' }}>results found for</span> “Ipsum”
        </Typography>

        <Box>
          <Box
            sx={{
              border: '1px solid #eee',
              padding: '20px',
              borderRadius: '10px',
              mb: '10px'
            }}
            className="dark-border"
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500, 
                mb: "5px",
              }}
            >
              What is Lorem Ipsum?
            </Typography>
            <Typography sx={{fontSize: 14}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box
            sx={{
              border: '1px solid #eee',
              padding: '20px',
              borderRadius: '10px',
              mb: '10px'
            }}
            className="dark-border"
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500, 
                mb: "5px",
              }}
            >
              What is Lorem Ipsum?
            </Typography>
            <Typography sx={{fontSize: 14}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box
            sx={{
              border: '1px solid #eee',
              padding: '20px',
              borderRadius: '10px',
              mb: '10px'
            }}
            className="dark-border"
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500, 
                mb: "5px",
              }}
            >
              What is Lorem Ipsum?
            </Typography>
            <Typography sx={{fontSize: 14}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box
            sx={{
              border: '1px solid #eee',
              padding: '20px',
              borderRadius: '10px',
              mb: '10px'
            }}
            className="dark-border"
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500, 
                mb: "5px",
              }}
            >
              What is Lorem Ipsum?
            </Typography>
            <Typography sx={{fontSize: 14}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box
            sx={{
              border: '1px solid #eee',
              padding: '20px',
              borderRadius: '10px',
              mb: '10px'
            }}
            className="dark-border"
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500, 
                mb: "5px",
              }}
            >
              What is Lorem Ipsum?
            </Typography>
            <Typography sx={{fontSize: 14}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box
            sx={{
              border: '1px solid #eee',
              padding: '20px',
              borderRadius: '10px',
              mb: '10px'
            }}
            className="dark-border"
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500, 
                mb: "5px",
              }}
            >
              What is Lorem Ipsum?
            </Typography>
            <Typography sx={{fontSize: 14}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box
            sx={{
              border: '1px solid #eee',
              padding: '20px',
              borderRadius: '10px',
              mb: '10px'
            }}
            className="dark-border"
          >
            <Typography
              as="h3"
              sx={{
                fontSize: 16,
                fontWeight: 500, 
                mb: "5px",
              }}
            >
              What is Lorem Ipsum?
            </Typography>
            <Typography sx={{fontSize: 14}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
        
        {/* Pagination */}
        <Pagination 
          count={10} 
          variant="outlined" 
          shape="rounded" 
          sx={{
            mt: '20px'
          }}
        />
      </Card>
    </>
  );
}
