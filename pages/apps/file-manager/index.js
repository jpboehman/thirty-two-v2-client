import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import Grid from "@mui/material/Grid";
import LeftSidebar from '@/components/Apps/FileManager/LeftSidebar';
import MyDrive from '@/components/Apps/FileManager/MyDrive';
import RecentFiles from '@/components/Apps/FileManager/RecentFiles';
import Files from '@/components/Apps/FileManager/Files';

export default function FileManager() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>File Manager</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            File Manager
          </li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          {/* LeftSidebar */}
          <LeftSidebar />
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
          {/* MyDrive */}
          <MyDrive />

          {/* RecentFiles */}
          <RecentFiles />

          {/* Files */}
          <Files />
        </Grid>
      </Grid>
    </>
  );
}
