import React from 'react';
import EditorArea from '@/components/Forms/EditorArea';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

export default function Editors() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Editors</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Editors</li>
        </ul>
      </div>

      <EditorArea />
    </>
  );
}
