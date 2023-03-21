import React from 'react';
import Grid from "@mui/material/Grid";
import ProfileInfo from '@/components/ContactList/ProfileInfo';
import Features from '@/components/ContactList/Features';
import PersonalInformation from '@/components/ContactList/PersonalInformation';
import ActivityTimeline from '@/components/ContactList/ActivityTimeline';
import Overview from '@/components/ContactList/Overview';
import MyTasks from '@/components/ContactList/MyTasks';
import styles from '@/styles/PageTitle.module.css'
import Link from 'next/link';

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
          {/* ProfileInfo */}
          <ProfileInfo />

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
