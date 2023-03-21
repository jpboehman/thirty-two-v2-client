import React from 'react';
import Grid from "@mui/material/Grid";
import SingleUserExample from '@/components/UIElements/Avatar/SingleUserExample';
import GroupUserExample from '@/components/UIElements/Avatar/GroupUserExample';
import ImageAvatars from '@/components/UIElements/Avatar/ImageAvatars';
import LetterAvatars from '@/components/UIElements/Avatar/LetterAvatars';
import SizesAvatars from '@/components/UIElements/Avatar/SizesAvatars';
import IconAvatars from '@/components/UIElements/Avatar/IconAvatars';
import Grouped from '@/components/UIElements/Avatar/Grouped';
import TotalAvatars from '@/components/UIElements/Avatar/TotalAvatars';
import WithBadge from '@/components/UIElements/Avatar/WithBadge';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Avatar() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Avatar</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Avatar</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* SingleUserExample */}
          <SingleUserExample />

          {/* ImageAvatars */}
          <ImageAvatars />

          {/* SizesAvatars */}
          <SizesAvatars />

          {/* Grouped */}
          <Grouped />

          {/* WithBadge */}
          <WithBadge />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* GroupUserExample */}
          <GroupUserExample />

          {/* LetterAvatars */}
          <LetterAvatars />

          {/* IconAvatars */}
          <IconAvatars />

          {/* TotalAvatars */}
          <TotalAvatars />  
        </Grid>
      </Grid>
    </>
  );
}
