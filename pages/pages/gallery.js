import React from 'react';  
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import GalleryContent from '@/components/Pages/Gallery/GalleryContent';

export default function Gallery() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Gallery</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Gallery</li>
        </ul>
      </div>

      <GalleryContent />
    </>
  );
}
