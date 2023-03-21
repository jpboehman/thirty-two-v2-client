import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AbcIcon from '@mui/icons-material/Abc';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import AdbIcon from '@mui/icons-material/Adb';
import AddIcon from '@mui/icons-material/Add';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AlbumIcon from '@mui/icons-material/Album';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

export default function MaterialIcons() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Material Icons</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Material Icons</li>
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
          Material Icons
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
              <AbcIcon style={{ fontSize: '60px' }} />
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
              <AcUnitIcon style={{ fontSize: '60px' }} />
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
              <AccessAlarmIcon style={{ fontSize: '60px' }} />
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
              <AccessAlarmsIcon style={{ fontSize: '60px' }} />
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
              <AccessTimeIcon style={{ fontSize: '60px' }} />
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
              <AccessTimeFilledIcon style={{ fontSize: '60px' }} />
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
              <AccessibilityIcon style={{ fontSize: '60px' }} />
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
              <AccessibilityNewIcon style={{ fontSize: '60px' }} />
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
              <AccessibleIcon style={{ fontSize: '60px' }} />
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
              <AccessibleForwardIcon style={{ fontSize: '60px' }} />
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
              <AccountBalanceIcon style={{ fontSize: '60px' }} />
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
              <AccountBalanceWalletIcon style={{ fontSize: '60px' }} />
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
              <AccountBoxIcon style={{ fontSize: '60px' }} />
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
              <AccountCircleIcon style={{ fontSize: '60px' }} />
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
              <AccountTreeIcon style={{ fontSize: '60px' }} />
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
              <AdUnitsIcon style={{ fontSize: '60px' }} />
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
              <AdbIcon style={{ fontSize: '60px' }} />
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
              <AddIcon style={{ fontSize: '60px' }} />
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
              <AddAPhotoIcon style={{ fontSize: '60px' }} />
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
              <AddAlarmIcon style={{ fontSize: '60px' }} />
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
              <AddAlertIcon style={{ fontSize: '60px' }} />
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
              <AddBoxIcon style={{ fontSize: '60px' }} />
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
              <AddBusinessIcon style={{ fontSize: '60px' }} />
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
              <AddCardIcon style={{ fontSize: '60px' }} />
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
              <AddCircleIcon style={{ fontSize: '60px' }} />
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
              <AddCircleOutlineIcon style={{ fontSize: '60px' }} />
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
              <AddToQueueIcon style={{ fontSize: '60px' }} />
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
              <AlbumIcon style={{ fontSize: '60px' }} />
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
              <AlignVerticalBottomIcon style={{ fontSize: '60px' }} />
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
              <AllInboxIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>
        </Grid>
 
        <Box 
          sx={{
            textAlign: 'center',
            mt: '10px'
          }}
        >
          <a href="https://mui.com/material-ui/material-icons/" target="_blank" rel="noreferrer" className="text-decoration-none">
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
