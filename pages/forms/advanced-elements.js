import React from 'react';
import Grid from "@mui/material/Grid";     
import DefaultSelect from '@/components/Forms/AdvancedElements/DefaultSelect';
import MultiSelect from '@/components/Forms/AdvancedElements/MultiSelect';
import MultipleSelectChip from '@/components/Forms/AdvancedElements/MultipleSelectChip';
import CountrySelect from '@/components/Forms/AdvancedElements/CountrySelect';
import BasicDatePicker from '@/components/Forms/AdvancedElements/BasicDatePicker';
import BasicTimePicker from '@/components/Forms/AdvancedElements/BasicTimePicker'; 
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

export default function AdvancedElements() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Advanced Elements</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Advanced Elements</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={4} xl={4}>
          {/* DefaultSelect */}
          <DefaultSelect />
        </Grid>

        <Grid item xs={12} md={12} lg={4} xl={4}>
          {/* MultiSelect */}
          <MultiSelect />
        </Grid>

        <Grid item xs={12} md={12} lg={4} xl={4}>
          {/* MultipleSelectChip */}
          <MultipleSelectChip />
        </Grid>
      </Grid>

      {/* CountrySelect */}
      <CountrySelect />

      {/* BasicTimePicker */}
      <BasicTimePicker />

      {/* BasicDatePicker */}
      <BasicDatePicker />
    </>
  );
}
