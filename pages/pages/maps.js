import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import GoogleMap from '@/components/Pages/Maps/GoogleMap';
import BasicMarkers from '@/components/Pages/Maps/BasicMarkers';
import EuropeMapWithGraticule from '@/components/Pages/Maps/EuropeMapWithGraticule';

export default function Maps() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Maps</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Maps</li>
        </ul>
      </div>

      {/* GoogleMap */}
      <GoogleMap />

      {/* BasicMarkers */}
      <BasicMarkers />

      {/* EuropeMapWithGraticule */}
      <EuropeMapWithGraticule />
    </>
  );
}
