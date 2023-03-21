import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Remixicon() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Remixicon</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Remixicon</li>
        </ul>
      </div>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "40px 35px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "5px",  
            mb: "15px",
          }}
          className="for-dark-bottom-border"
        >
          Remixicon
        </Typography>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 2 }}
        >
          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-home-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-mail-open-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-mail-download-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-inbox-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-at-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-pie-chart-box-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>
 
          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-pie-chart-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-briefcase-4-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-briefcase-5-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-projector-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-registered-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-stack-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-stack-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-window-2-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-creative-commons-nd-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>
 
          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-chat-4-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-chat-quote-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-pen-nib-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>
 
          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-contrast-drop-2-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-t-box-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-focus-2-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-anticlockwise-2-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-layout-3-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-layout-top-2-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-layout-left-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-code-box-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-hard-drive-2-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-sim-card-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-dual-sim-1-fill" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
              className="dark-border"
            >
              <i className="ri-cast-line" style={{ fontSize: '25px' }}></i>
            </Box>
          </Grid>
        </Grid>
 
        <Box 
          sx={{
            textAlign: 'center',
            mt: '10px'
          }}
        >
          <a href="https://remixicon.com/" target="_blank" rel="noreferrer" className="text-decoration-none">
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                textTransform: "capitalize",
                borderRadius: "8px",
                fontWeight: "500",
                fontSize: "15px",
                padding: "12px 30px",
                color: "#fff !important",
              }}
            >
              View All Icons
            </Button>
          </a>
        </Box>
      </Card>
    </>
  );
}
