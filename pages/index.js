import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import Features from "@/components/Dashboard/eCommerce/Features";
import Ratings from "@/components/Dashboard/eCommerce/Ratings";
import AudienceOverview from "@/components/Dashboard/eCommerce/AudienceOverview";
import VisitsByDay from "@/components/Dashboard/eCommerce/VisitsByDay";
// import Impressions from "@/components/Dashboard/eCommerce/Impressions";
import ActivityTimeline from "@/components/Dashboard/eCommerce/ActivityTimeline";
import RevenuStatus from "@/components/Dashboard/eCommerce/RevenuStatus";
import SalesByCountries from "@/components/Dashboard/eCommerce/SalesByCountries";
import NewCustomers from "@/components/Dashboard/eCommerce/NewCustomers";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import TeamMembersList from "@/components/Dashboard/eCommerce/TeamMembersList";
import BestSellingProducts from "@/components/Dashboard/eCommerce/BestSellingProducts";
import LiveVisitsOnOurSite from "@/components/Dashboard/eCommerce/LiveVisitsOnOurSite";

import eventBus from "common/EventBus";

import { logout } from "redux/userRedux";

import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const currentUser = useSelector((state) => state?.currentUser?.payload);
  const [confirmCurrentUser, setConfirmCurrentUser] = useState(false);
  const dispatch = useDispatch(); // Is wired up to the global store slice we initialized as the Provider

  useEffect(() => {
    if (currentUser) {
      setConfirmCurrentUser(true);
    }

    eventBus.on("logout", () => {
      logOut();
    });

    return () => {
      eventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    dispatch(logout());
    setConfirmCurrentUser(false);
  };

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Dashboard</h1>
        <ul>
          <li>
            <Link href="/">
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <button onClick={logOut}>Logout</button>
          </li>
        </ul>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* Features */}
          <Features />

          {/* AudienceOverview */}
          <AudienceOverview />

          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={12} md={8}>
              {/* VisitsByDay */}
              <VisitsByDay />
            </Grid>

            <Grid item xs={12} md={4}>
              {/* Impressions */}
              {/* <Impressions /> */}

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
