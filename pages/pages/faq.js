import React from 'react'; 
import BasicAccordion from '@/components/UIElements/Accordion/BasicAccordion';
import ControlledAccordion from '@/components/UIElements/Accordion/ControlledAccordion';
import Customization from '@/components/UIElements/Accordion/Customization';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

export default function FAQ() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>FAQ</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* BasicAccordion */}
      <BasicAccordion />

      {/* ControlledAccordion */}
      <ControlledAccordion />

      {/* Customization */}
      <Customization />
    </>
  );
}
