import React from 'react';
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Basic from '@/components/Pages/Charts/ApexCharts/LineCharts/Basic';
import Stepline from '@/components/Pages/Charts/ApexCharts/LineCharts/Stepline';
import Gradient from '@/components/Pages/Charts/ApexCharts/LineCharts/Gradient';
import Dashed from '@/components/Pages/Charts/ApexCharts/LineCharts/Dashed';
import BasicAreaCharts from '@/components/Pages/Charts/ApexCharts/AreaCharts/BasicAreaCharts';
import Spline from '@/components/Pages/Charts/ApexCharts/AreaCharts/Spline';
import DatetimeXAxis from '@/components/Pages/Charts/ApexCharts/AreaCharts/DatetimeXAxis';
import Negative from '@/components/Pages/Charts/ApexCharts/AreaCharts/Negative';
import BasicColumnCharts from '@/components/Pages/Charts/ApexCharts/ColumnCharts/BasicColumnCharts';
import ColumnWithDataLabels from '@/components/Pages/Charts/ApexCharts/ColumnCharts/ColumnWithDataLabels';
import StackedColumns from '@/components/Pages/Charts/ApexCharts/ColumnCharts/StackedColumns';
import StackedColumns100 from '@/components/Pages/Charts/ApexCharts/ColumnCharts/StackedColumns100';
import BasicBarCharts from '@/components/Pages/Charts/ApexCharts/BarCharts/BasicBarCharts';
import Grouped from '@/components/Pages/Charts/ApexCharts/BarCharts/Grouped';
import StackedBar from '@/components/Pages/Charts/ApexCharts/BarCharts/StackedBar';
import StackedBars100 from '@/components/Pages/Charts/ApexCharts/BarCharts/StackedBars100';
import LineColumn from '@/components/Pages/Charts/ApexCharts/MixedCharts/LineColumn';
import MultipleYAxis from '@/components/Pages/Charts/ApexCharts/MixedCharts/MultipleYAxis';
import LineArea from '@/components/Pages/Charts/ApexCharts/MixedCharts/LineArea';
import LineColumnArea from '@/components/Pages/Charts/ApexCharts/MixedCharts/LineColumnArea';
import BasicPolarAreaCharts from '@/components/Pages/Charts/ApexCharts/PolarAreaCharts/BasicPolarAreaCharts';
import Monochrome from '@/components/Pages/Charts/ApexCharts/PolarAreaCharts/Monochrome';
import BasicRadarCharts from '@/components/Pages/Charts/ApexCharts/RadarCharts/BasicRadarCharts';
import RadarMultipleSeries from '@/components/Pages/Charts/ApexCharts/RadarCharts/RadarMultipleSeries';
import RadarWithPolygonFill from '@/components/Pages/Charts/ApexCharts/RadarCharts/RadarWithPolygonFill';
import BasicRadialBarCharts from '@/components/Pages/Charts/ApexCharts/RadialBarCharts/BasicRadialBarCharts';
import MultipleRadialbars from '@/components/Pages/Charts/ApexCharts/RadialBarCharts/MultipleRadialbars';
import CustomAngleCircle from '@/components/Pages/Charts/ApexCharts/RadialBarCharts/CustomAngleCircle';
import SimplePieChart from '@/components/Pages/Charts/ApexCharts/PieCharts/SimplePieChart';
import SimpleDonut from '@/components/Pages/Charts/ApexCharts/PieCharts/SimpleDonut';
import UpdateDonut from '@/components/Pages/Charts/ApexCharts/PieCharts/UpdateDonut';
import MonochromePie from '@/components/Pages/Charts/ApexCharts/PieCharts/MonochromePie';
import GradientDonut from '@/components/Pages/Charts/ApexCharts/PieCharts/GradientDonut';
import PieCharts from '@/components/Pages/Charts/ApexCharts/PieCharts/DonutWithPattern';
import NavBar from '@/components/Pages/Charts/NavBar';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

export default function Charts() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Charts</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Charts</li>
        </ul>
      </div>

      {/* Nav */}
      <NavBar />
      
      {/* Line Charts */}
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          mb: "15px",
        }}
        className="for-dark-bottom-border"
      >
        Line Charts
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Basic */}
          <Basic />

          {/* Gradient */}
          <Gradient />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Stepline */}
          <Stepline />

          {/* Dashed */}
          <Dashed />
        </Grid>
      </Grid>

      {/* Area Charts */}
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          mb: "15px",
          mt: "20px",
        }}
        className="for-dark-bottom-border"
      >
        Area Charts
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicAreaCharts */}
          <BasicAreaCharts />

          {/* DatetimeXAxis */}
          <DatetimeXAxis />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Spline */}
          <Spline />

          {/* Negative */}
          <Negative />
        </Grid>
      </Grid>

      {/* Column Charts */}
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          mb: "15px",
          mt: "20px",
        }}
        className="for-dark-bottom-border"
      >
        Column Charts
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicColumnCharts */}
          <BasicColumnCharts />

          {/* StackedColumns */}
          <StackedColumns />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* ColumnWithDataLabels */}
          <ColumnWithDataLabels />

          {/* StackedColumns100 */}
          <StackedColumns100 />
        </Grid>
      </Grid>

      {/* Bar Charts */}
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          mb: "15px",
          mt: "20px",
        }}
        className="for-dark-bottom-border"
      >
        Bar Charts
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicBarCharts */}
          <BasicBarCharts />

          {/* StackedBar */}
          <StackedBar /> 
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Grouped */}
          <Grouped />

          {/* StackedBars100 */}
          <StackedBars100 />
        </Grid>
      </Grid>

      {/* Mixed Charts */}
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          mb: "15px",
          mt: "20px",
        }}
        className="for-dark-bottom-border"
      >
        Mixed Charts
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={12}>
          {/* LineColumn */}
          <LineColumn />

          {/* LineArea */}
          <LineArea />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={12}>
          {/* MultipleYAxis */}
          <MultipleYAxis />

          {/* LineColumnArea */}
          <LineColumnArea />
        </Grid>
      </Grid>

      {/* Polar Area Charts */}
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          mb: "15px",
          mt: "20px",
        }}
        className="for-dark-bottom-border"
      >
        Polar Area Charts
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicPolarAreaCharts */}
          <BasicPolarAreaCharts />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Monochrome */}
          <Monochrome />
        </Grid>
      </Grid>

      {/* Radar Charts */}
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          mb: "15px",
          mt: "20px",
        }}
        className="for-dark-bottom-border"
      >
        Radar Charts
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* BasicRadarCharts */}
          <BasicRadarCharts />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* RadarMultipleSeries */}
          <RadarMultipleSeries />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={12}>
          {/* RadarWithPolygonFill */}
          <RadarWithPolygonFill />
        </Grid>
      </Grid>

      {/* RadialBar Charts */}
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          mb: "15px",
          mt: "20px",
        }}
        className="for-dark-bottom-border"
      >
        RadialBar Charts
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* BasicRadialBarCharts */}
          <BasicRadialBarCharts />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* MultipleRadialbars */}
          <MultipleRadialbars />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* CustomAngleCircle */}
          <CustomAngleCircle />
        </Grid>
      </Grid>

      {/* PieCharts */}
      <Typography
        as="h3"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          mb: "15px",
          mt: "20px",
        }}
        className="for-dark-bottom-border"
      >
        Pie Charts
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* SimplePieChart */}
          <SimplePieChart />

          {/* UpdateDonut */}
          <UpdateDonut />

          {/* MonochromePie */}
          <MonochromePie />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* SimpleDonut */}
          <SimpleDonut />

          {/* GradientDonut */}
          <GradientDonut />

          {/* PieCharts */}
          <PieCharts />
        </Grid>
      </Grid>
    </>
  );
}
