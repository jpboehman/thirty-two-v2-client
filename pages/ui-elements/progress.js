import React from 'react'; 
import Grid from "@mui/material/Grid";
import Circular from '@/components/UIElements/Progress/Circular';
import CircularDeterminate from '@/components/UIElements/Progress/CircularDeterminate';
import InteractiveIntegration from '@/components/UIElements/Progress/InteractiveIntegration';
import CircularWithLabel from '@/components/UIElements/Progress/CircularWithLabel';
import LinearIndeterminate from '@/components/UIElements/Progress/LinearIndeterminate';
import Customization from '@/components/UIElements/Progress/Customization';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Progress() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Progress</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Progress</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Circular */}
          <Circular />

          {/* InteractiveIntegration */}
          <InteractiveIntegration />

          {/* LinearIndeterminate */}
          <LinearIndeterminate />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* CircularDeterminate */}
          <CircularDeterminate />

          {/* CircularWithLabel */}
          <CircularWithLabel />

          {/* Customization */}
          <Customization />
        </Grid>
      </Grid>
    </>
  );
}
