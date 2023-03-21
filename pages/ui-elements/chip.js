import React from 'react';
import Grid from "@mui/material/Grid"; 
import Basic from '@/components/UIElements/Chip/Basic';
import ChipActions from '@/components/UIElements/Chip/ChipActions';
import Deletable from '@/components/UIElements/Chip/Deletable';
import ClickableAndDeletable from '@/components/UIElements/Chip/ClickableAndDeletable';
import ClickableLink from '@/components/UIElements/Chip/ClickableLink';
import CustomDeleteIcon from '@/components/UIElements/Chip/CustomDeleteIcon';
import ChipAdornments from '@/components/UIElements/Chip/ChipAdornments';
import IconChip from '@/components/UIElements/Chip/IconChip';
import ColorChip from '@/components/UIElements/Chip/ColorChip';
import SizesChip from '@/components/UIElements/Chip/SizesChip';
import ChipArray from '@/components/UIElements/Chip/ChipArray';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Chip() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Chip</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Chip</li>
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

          {/* Deletable */}
          <Deletable />
          
          {/* ClickableLink */}
          <ClickableLink />

          {/* ChipAdornments */}
          <ChipAdornments />

          {/* ColorChip */}
          <ColorChip />

        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* ChipActions */}
          <ChipActions />

          {/* ClickableAndDeletable */}
          <ClickableAndDeletable />

          {/* CustomDeleteIcon */}
          <CustomDeleteIcon />

          {/* IconChip */}
          <IconChip />

          {/* SizesChip */}
          <SizesChip />

          {/* ChipArray */}
          <ChipArray />
        </Grid>
      </Grid>
    </>
  );
}
