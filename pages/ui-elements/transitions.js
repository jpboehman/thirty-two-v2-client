import React from 'react';
import Grid from "@mui/material/Grid";   
import CollapseTransitions from '@/components/UIElements/Transitions/CollapseTransitions';
import FadeTransitions from '@/components/UIElements/Transitions/FadeTransitions';
import GrowTransitions from '@/components/UIElements/Transitions/GrowTransitions';
import SlideTransitions from '@/components/UIElements/Transitions/SlideTransitions';
import SlideRelativeToAContainer from '@/components/UIElements/Transitions/SlideRelativeToAContainer';
import ZoomTransitions from '@/components/UIElements/Transitions/ZoomTransitions';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Transitions() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Transitions</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Transitions</li>
        </ul>
      </div>
      
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* CollapseTransitions */}
          <CollapseTransitions />

          {/* SlideTransitions */}
          <SlideTransitions />

          {/* SlideRelativeToAContainer */}
          <SlideRelativeToAContainer />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* FadeTransitions */}
          <FadeTransitions />

          {/* GrowTransitions */}
          <GrowTransitions />

          {/* ZoomTransitions */}
          <ZoomTransitions />
        </Grid>
      </Grid>
    </>
  );
}
