import React from 'react';
import Grid from "@mui/material/Grid"; 
import BasicList from '@/components/UIElements/List/BasicList';
import NestedList from '@/components/UIElements/List/NestedList';
import FolderList from '@/components/UIElements/List/FolderList';
import ListControls from '@/components/UIElements/List/ListControls';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function List() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>List</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>List</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicList */}
          <BasicList />

          {/* FolderList */}
          <FolderList />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* NestedList */}
          <NestedList />

          {/* ListControls */}
          <ListControls />
        </Grid>
      </Grid>
    </>
  );
}
