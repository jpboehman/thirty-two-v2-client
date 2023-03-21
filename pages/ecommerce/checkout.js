import React from 'react';
import Grid from "@mui/material/Grid";
import ShoppingCart from '@/components/eCommerce/Checkout/ShoppingCart';
import BillingInformation from '@/components/eCommerce/Checkout/BillingInformation';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

const Checkout = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Checkout</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Checkout</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={5} lg={5} xl={4}>
          {/* ShoppingCart */}
          <ShoppingCart />
        </Grid>

        <Grid item xs={12} md={7} lg={7} xl={8}>
          {/* BillingInformation */}
          <BillingInformation />
        </Grid>
      </Grid>
    </>
  )
}

export default Checkout;