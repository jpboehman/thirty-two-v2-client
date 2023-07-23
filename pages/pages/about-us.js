import React from "react";
import OurStatsExplained from "@/components/Pages/TermsConditions/TermsConditionsContent";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import AboutUs from "@/components/Pages/About/about32";

export default function About() {
  return (
    <>
      <div className={styles.pageTitle}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>About Us</li>
        </ul>
      </div>

      {/* Container for the title and OurStatsExplained */}
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <AboutUs />
      </div>
    </>
  );
}
