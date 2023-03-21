import React from 'react';
import Grid from "@mui/material/Grid";
import Features from '@/components/Pages/Profile/Features';
import PersonalInformation from '@/components/Pages/Profile/PersonalInformation';
import ActivityTimeline from '@/components/Pages/Profile/ActivityTimeline';
import Overview from '@/components/Pages/Profile/Overview';
import MyTasks from '@/components/Pages/Profile/MyTasks';
import ProfileContent from '@/components/Pages/Profile/ProfileContent';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Profile() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Profile</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Profile</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* ProfileContent */}
          <ProfileContent />

          {/* Personal Information */}
          <PersonalInformation />

          {/* ActivityTimeline */}
          <ActivityTimeline />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* Features */}
          <Features />

          {/* Overview */}
          <Overview />

          {/* MyTasks */}
          <MyTasks />
        </Grid>
      </Grid>
    </>
  );
}
