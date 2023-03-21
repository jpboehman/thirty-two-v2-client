import React from 'react';
import Grid from "@mui/material/Grid";
import ComboBox from '@/components/UIElements/Autocomplete/ComboBox';
import CountrySelect from '@/components/UIElements/Autocomplete/CountrySelect';
import CustomizedHook from '@/components/UIElements/Autocomplete/CustomizedHook';
import LimitTags from '@/components/UIElements/Autocomplete/LimitTags';
import CustomizeTextareaComponent from '@/components/UIElements/Autocomplete/CustomizeTextareaComponent';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Autocomplete() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Autocomplete</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Autocomplete</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* ComboBox */}
          <ComboBox />

          {/* CustomizedHook */}
          <CustomizedHook />

          {/* CustomizeTextareaComponent */}
          <CustomizeTextareaComponent />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* CountrySelect */}
          <CountrySelect />

          {/* LimitTags */}
          <LimitTags />
        </Grid>
      </Grid>
    </>
  );
}
