import React from 'react'; 
import UploadMultipleFiles from '@/components/Forms/FileUploader/UploadMultipleFiles';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

export default function FileUploader() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>File Uploader</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>File Uploader</li>
        </ul>
      </div>

      <UploadMultipleFiles />
    </>
  );
}
