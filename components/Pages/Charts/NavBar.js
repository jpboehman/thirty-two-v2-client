import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '@/components/Pages/Charts/NavBar.module.css'

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <nav className={styles.topNavStyle}>
        <ul>
          <li className={router.pathname == "/pages/apexcharts" ? styles.active : ""}>
            <Link href="/pages/apexcharts">
              ApexCharts
            </Link>
          </li>
          <li className={router.pathname == "/pages/recharts" ? styles.active : ""}>
            <Link href="/pages/recharts">
              Recharts
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;