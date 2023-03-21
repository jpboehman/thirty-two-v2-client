import React from 'react'; 
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import InvoiceLists from '@/components/Pages/Invoice/InvoiceLists';

export default function Invoice() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Invoice</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Invoice</li>
        </ul>
      </div>

      <InvoiceLists />
    </>
  );
}
