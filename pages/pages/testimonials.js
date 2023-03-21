import React from 'react';
import TestimonialsOne from '@/components/Pages/Testimonials/TestimonialsOne';
import TestimonialsTwo from '@/components/Pages/Testimonials/TestimonialsTwo';
import TestimonialsThree from '@/components/Pages/Testimonials/TestimonialsThree';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Testimonials() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Testimonials</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Testimonials</li>
        </ul>
      </div>

      <TestimonialsOne />

      <TestimonialsTwo />

      <TestimonialsThree />
    </>
  );
}
