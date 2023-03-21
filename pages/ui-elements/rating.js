import React from 'react';
import Grid from "@mui/material/Grid";
import Basic from '@/components/UIElements/Rating/Basic';
import RatingPrecision from '@/components/UIElements/Rating/RatingPrecision';
import HoverFeedback from '@/components/UIElements/Rating/HoverFeedback';
import Sizes from '@/components/UIElements/Rating/Sizes';
import Customization from '@/components/UIElements/Rating/Customization';
import RadioGroup from '@/components/UIElements/Rating/RadioGroup';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Rating() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Rating</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Rating</li>
        </ul>
      </div>
      
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Basic */}
          <Basic />

          {/* Customization */}
          <Customization />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* RatingPrecision */}
          <RatingPrecision />

          {/* HoverFeedback */}
          <HoverFeedback />

          {/* Sizes */}
          <Sizes />

          {/* RadioGroup */}
          <RadioGroup />
        </Grid>
      </Grid>
    </>
  );
}
