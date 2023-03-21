import React from 'react';
import BasicTooltip from '@/components/UIElements/Tooltip/BasicTooltip';
import PositionedTooltips from '@/components/UIElements/Tooltip/PositionedTooltips';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Tooltip() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Tooltip</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Tooltip</li>
        </ul>
      </div>

      {/* BasicTooltip */}
      <BasicTooltip />

      {/* PositionedTooltips */}
      <PositionedTooltips />
    </>
  );
}
