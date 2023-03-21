import React from 'react';
import Grid from "@mui/material/Grid";  
import BasicModal from '@/components/UIElements/Modal/BasicModal';
import NestedModal from '@/components/UIElements/Modal/NestedModal';
import Transitions from '@/components/UIElements/Modal/Transitions';
import SimpleDialog from '@/components/UIElements/Modal/SimpleDialog';
import TransitionsDialog from '@/components/UIElements/Modal/TransitionsDialog';
import CustomizationDialog from '@/components/UIElements/Modal/CustomizationDialog';
import FullScreenDialogs from '@/components/UIElements/Modal/FullScreenDialogs';
import ScrollingLongContent from '@/components/UIElements/Modal/ScrollingLongContent';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Modal() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Modal</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Modal</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicModal */}
          <BasicModal />

          {/* Transitions */}
          <Transitions />

          {/* TransitionsDialog */}
          <TransitionsDialog />

          {/* FullScreenDialogs */}
          <FullScreenDialogs />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* NestedModal */}
          <NestedModal />

          {/* SimpleDialog */}
          <SimpleDialog />

          {/* CustomizationDialog */}
          <CustomizationDialog />

          {/* ScrollingLongContent */}
          <ScrollingLongContent />
        </Grid>
      </Grid>
    </>
  );
}
