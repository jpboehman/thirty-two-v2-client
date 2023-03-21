import React from 'react';
import Grid from "@mui/material/Grid";
import ShoppingCart from '@/components/eCommerce/Cart/ShoppingCart';
import OrderSummary from '@/components/eCommerce/Cart/OrderSummary';
import HaveAPromoCode from '@/components/eCommerce/Cart/HaveAPromoCode';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

const Cart = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Cart</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* ShoppingCart */}
          <ShoppingCart />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* OrderSummary */}
          <OrderSummary />

          {/* HaveAPromoCode */}
          <HaveAPromoCode />
        </Grid>
      </Grid>
    </>
  )
}

export default Cart;