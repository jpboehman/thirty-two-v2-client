import React from 'react'; 
import Grid from "@mui/material/Grid";    
import BasicPagination from '@/components/UIElements/Pagination/BasicPagination';
import OutlinedPagination from '@/components/UIElements/Pagination/OutlinedPagination';
import RoundedPagination from '@/components/UIElements/Pagination/RoundedPagination';
import PaginationSize from '@/components/UIElements/Pagination/PaginationSize';
import CustomIcons from '@/components/UIElements/Pagination/CustomIcons';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Pagination() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Pagination</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Pagination</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicPagination */}
          <BasicPagination />

          {/* RoundedPagination */}
          <RoundedPagination />

          {/* CustomIcons */}
          <CustomIcons />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* OutlinedPagination */}
          <OutlinedPagination />

          {/* PaginationSize */}
          <PaginationSize />
        </Grid>
      </Grid>
    </>
  );
}
