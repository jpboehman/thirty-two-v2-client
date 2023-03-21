import React from 'react';
import TermsConditionsContent from '@/components/Pages/TermsConditions/TermsConditionsContent';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function TermsConditions() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Terms & Conditions</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <TermsConditionsContent />
    </>
  );
}
