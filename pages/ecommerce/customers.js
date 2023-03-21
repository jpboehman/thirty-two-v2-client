import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import CustomersLists from '@/components/eCommerce/Customers/CustomersLists';

const Customers = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Customers</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Customers</li>
        </ul>
      </div>
      
      <CustomersLists />
    </>
  )
}

export default Customers;