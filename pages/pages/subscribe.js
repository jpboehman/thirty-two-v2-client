import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import StripeContainer from "@/components/StripeContainer";
import { Typography } from "@mui/material";

const Subscribe = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Subscribe</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={7} lg={7} xl={8}>
          <StripeContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default Subscribe;
