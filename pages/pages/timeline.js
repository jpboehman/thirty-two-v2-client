import React from 'react';
import TimelineStyle1 from '@/components/Pages/Timeline/TimelineStyle1';
import TimelineStyle2 from '@/components/Pages/Timeline/TimelineStyle2';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Timeline() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Timeline</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Timeline</li>
        </ul>
      </div>

      <TimelineStyle1 />

      <TimelineStyle2 />
    </>
  );
}
