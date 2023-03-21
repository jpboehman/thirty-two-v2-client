import React from 'react'; 
import Grid from "@mui/material/Grid"; 
import StandardImageList from '@/components/UIElements/ImageList/StandardImageList';
import QuiltedImageList from '@/components/UIElements/ImageList/QuiltedImageList';
import WovenImageList from '@/components/UIElements/ImageList/WovenImageList';
import MasonryImageList from '@/components/UIElements/ImageList/MasonryImageList';
import ImageListWithTitleBars from '@/components/UIElements/ImageList/ImageListWithTitleBars';
import TitleBarBelowImageStandard from '@/components/UIElements/ImageList/TitleBarBelowImageStandard';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function ImageList() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Image List</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Image List</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* StandardImageList */}
          <StandardImageList />

          {/* WovenImageList */}
          <WovenImageList />

          {/* ImageListWithTitleBars */}
          <ImageListWithTitleBars />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* QuiltedImageList */}
          <QuiltedImageList />

          {/* MasonryImageList */}
          <MasonryImageList />

          {/* TitleBarBelowImageStandard */}
          <TitleBarBelowImageStandard />
        </Grid>
      </Grid>
    </>
  );
}
