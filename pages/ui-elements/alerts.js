import React from 'react';
import Grid from "@mui/material/Grid";
import BasicAlerts from '@/components/UIElements/Alerts/BasicAlerts';
import DescriptionAlerts from '@/components/UIElements/Alerts/DescriptionAlerts';
import Actions from '@/components/UIElements/Alerts/Actions';
import Transition from '@/components/UIElements/Alerts/Transition';
import Icons from '@/components/UIElements/Alerts/Icons';
import Variants from '@/components/UIElements/Alerts/Variants';
import Filled from '@/components/UIElements/Alerts/Filled';
import Color from '@/components/UIElements/Alerts/Color';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Alerts() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Alerts</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Alerts</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicAlerts */}
          <BasicAlerts />

          {/* DescriptionAlerts */}
          <DescriptionAlerts />

          {/* Variants */}
          <Variants />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Actions */}
          <Actions /> 

          {/* Transition */}
          <Transition /> 

          {/* Icons */}
          <Icons />

          {/* Filled */}
          <Filled />

          {/* Color */}
          <Color />
        </Grid>
      </Grid>
    </>
  );
}
