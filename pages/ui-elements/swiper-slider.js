import React from 'react';
import Grid from "@mui/material/Grid";
import Default from '@/components/UIElements/SwiperSlider/Default';
import NavigationSlider from '@/components/UIElements/SwiperSlider/NavigationSlider';
import PaginationSlider from '@/components/UIElements/SwiperSlider/PaginationSlider';
import PaginationDynamic from '@/components/UIElements/SwiperSlider/PaginationDynamic';
import PaginationProgress from '@/components/UIElements/SwiperSlider/PaginationProgress';
import AutoplaySlider from '@/components/UIElements/SwiperSlider/AutoplaySlider';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function SwiperSlider() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Swiper Slider</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Swiper Slider</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={6} lg={6} xl={4}>
          {/* Default */}
          <Default />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={4}>
          {/* PaginationDynamic */}
          <PaginationDynamic />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={4}>
          {/* NavigationSlider */}
          <NavigationSlider />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={4}>
          {/* PaginationProgress */}
          <PaginationProgress />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={4}>
          {/* PaginationSlider */}
          <PaginationSlider />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={4}>
          {/* AutoplaySlider */}
          <AutoplaySlider />
        </Grid>
      </Grid>
    </>
  );
}
