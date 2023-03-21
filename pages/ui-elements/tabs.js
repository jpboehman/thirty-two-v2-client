import React from 'react';
import Grid from "@mui/material/Grid";  
import BasicTabs from '@/components/UIElements/Tabs/BasicTabs';
import ExperimentalAPI from '@/components/UIElements/Tabs/ExperimentalAPI';
import VerticalTabs from '@/components/UIElements/Tabs/VerticalTabs';
import IconTabs from '@/components/UIElements/Tabs/IconTabs';
import IconPosition from '@/components/UIElements/Tabs/IconPosition';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Tabs() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Tabs</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Tabs</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicTabs */}
          <BasicTabs />

          {/* FixedTabs */}
          <VerticalTabs />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* ExperimentalAPI */}
          <ExperimentalAPI />

          {/* IconTabs */}
          <IconTabs />

          {/* IconPosition */}
          <IconPosition />
        </Grid>
      </Grid>
    </>
  );
}
