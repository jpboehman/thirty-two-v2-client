import React from 'react'; 
import SearchContent from '@/components/Pages/Search/SearchContent';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Search() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Search</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Search</li>
        </ul>
      </div>

      <SearchContent />
    </>
  );
}
