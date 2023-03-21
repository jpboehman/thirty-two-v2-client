import React from 'react';
import ProductDetailsContent from "@/components/eCommerce/ProductDetails/ProductDetailsContent";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
  
export default function ProductDetails() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Product Details</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Product Details</li>
        </ul>
      </div>

      <ProductDetailsContent />
    </>
  );
}
