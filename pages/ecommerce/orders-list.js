import React from 'react';
import OrdersLists from '@/components/eCommerce/OrdersList/OrdersLists';
import Features from '@/components/eCommerce/OrdersList/Features';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

const OrdersList = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Orders List</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Orders List</li>
        </ul>
      </div>

      {/* Features */}
      <Features />

      {/* OrdersLists */}
      <OrdersLists />
    </>
  )
}

export default OrdersList;