import React from 'react';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import Features from "@/components/Dashboard/eCommerce/Features";
import Ratings from "@/components/Dashboard/eCommerce/Ratings";
import AudienceOverview from "@/components/Dashboard/eCommerce/AudienceOverview";
import VisitsByDay from "@/components/Dashboard/eCommerce/VisitsByDay";
import Impressions from "@/components/Dashboard/eCommerce/Impressions";
import ActivityTimeline from "@/components/Dashboard/eCommerce/ActivityTimeline";
import RevenuStatus from "@/components/Dashboard/eCommerce/RevenuStatus";
import SalesByCountries from "@/components/Dashboard/eCommerce/SalesByCountries";
import NewCustomers from "@/components/Dashboard/eCommerce/NewCustomers";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import TeamMembersList from "@/components/Dashboard/eCommerce/TeamMembersList";
import BestSellingProducts from "@/components/Dashboard/eCommerce/BestSellingProducts";
import LiveVisitsOnOurSite from "@/components/Dashboard/eCommerce/LiveVisitsOnOurSite";

export default function eCommerce() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>eCommerce</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            eCommerce
          </li>
        </ul>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* Features */}
          <Features />

          {/* AudienceOverview */}
          <AudienceOverview />

          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={12} md={8}>
              {/* VisitsByDay */}
              <VisitsByDay />
            </Grid>

            <Grid item xs={12} md={4}>
              {/* Impressions */}
              <Impressions />

              {/* ActivityTimeline */}
              <ActivityTimeline />
            </Grid>

            <Grid item xs={12} md={12}>
              {/* RevenuStatus */}
              <RevenuStatus />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* Ratings */}
          <Ratings />

          {/* LiveVisitsOnOurSite */}
          <LiveVisitsOnOurSite />

          {/* SalesByLocations */}
          <SalesByCountries />

          {/* NewCustomers */}
          <NewCustomers />
        </Grid>
      </Grid>

      {/* Recent Orders */}
      <RecentOrders />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* TeamMembersList */}
          <TeamMembersList />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* BestSellingProducts */}
          <BestSellingProducts />
        </Grid>
      </Grid>
    </>
  );
}
