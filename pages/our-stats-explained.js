import React from 'react';
import OurStatsExplained from '@/components/Pages/TermsConditions/TermsConditionsContent';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function StatsExplained() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Our Stats Explained</li>
        </ul>
      </div>

      {/* Container for the title and OurStatsExplained */}
      <div className={styles.container}>
        <h1 className={styles.title}>Our Stats Explained</h1>
        <OurStatsExplained />
      </div>
    </>
  );
}
