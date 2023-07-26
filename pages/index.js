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
import NcaaD1MensTeams from "./pages/teams/ncaa-d1-mens";

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

      <NcaaD1MensTeams />
    </>
  );
}
