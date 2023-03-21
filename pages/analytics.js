import Grid from "@mui/material/Grid";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import Features from "@/components/Dashboard/Analytics/Features";
import Profile from "@/components/Dashboard/Analytics/Profile";
import AudienceOverview from "@/components/Dashboard/Analytics/AudienceOverview";
import VisitsByDayAndNetIncome from "@/components/Dashboard/Analytics/VisitsByDayAndNetIncome";
import SalesAnalytics from "@/components/Dashboard/Analytics/SalesAnalytics";
import TotalRevenue from "@/components/Dashboard/Analytics/TotalRevenue";
import ActivityTimeline from "@/components/Dashboard/Analytics/ActivityTimeline";
import RevenueReport from "@/components/Dashboard/Analytics/RevenueReport";
import SessionsByCountries from "@/components/Dashboard/Analytics/SessionsByCountries";
import TotalTransactions from "@/components/Dashboard/Analytics/TotalTransactions";
import BrowserUsedAndTrafficReports from "@/components/Dashboard/Analytics/BrowserUsedAndTrafficReports";
import Terminals from "@/components/Dashboard/Analytics/Terminals";
import NewReturning from "@/components/Dashboard/Analytics/NewReturning";
import Gender from "@/components/Dashboard/Analytics/Gender";
import VisitorsAge from "@/components/Dashboard/Analytics/VisitorsAge";
import SessionsDevice from "@/components/Dashboard/Analytics/SessionsDevice";

export default function Analytics() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Analytics</h1>
        <ul>
          <li>
            <Link href="/analytics/">Dashboard</Link>
          </li>
          <li>
            Analytics
          </li>
        </ul>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* Profile */}
          <Profile />

          {/* VisitsByDayAndNetIncome */}
          <VisitsByDayAndNetIncome />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* Features */}
          <Features />

          {/* AudienceOverview */}
          <AudienceOverview />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={12} md={8}>
              {/* SalesAnalytics */}
              <SalesAnalytics />
              
              {/* RevenueRepor */}
              <RevenueReport />
            </Grid>

            <Grid item xs={12} md={4}>
              {/* TotalRevenue */}
              <TotalRevenue />

              {/* ActivityTimelin */}
              <ActivityTimeline />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* SessionsByCountries */}
          <SessionsByCountries />

          {/* TotalTransactions */}
          <TotalTransactions />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* BrowserUsedAndTrafficReports */}
          <BrowserUsedAndTrafficReports />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* Terminals */}
          <Terminals />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={6} lg={6} xl={3}>
          {/* NewReturning */}
          <NewReturning />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={3}>
          {/* Gender */}
          <Gender />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={3}>
          {/* VisitorsAge */}
          <VisitorsAge />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={3}>
          {/* SessionsDevice */}
          <SessionsDevice />
        </Grid>
      </Grid>
    </>
  );
}
