import React from 'react';  
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import InvoiceDetailsContent from '@/components/Pages/Invoice/InvoiceDetailsContent'

export default function InvoiceDetails() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Invoice Details</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Invoice Details</li>
        </ul>
      </div>

      <InvoiceDetailsContent />
    </>
  );
}
