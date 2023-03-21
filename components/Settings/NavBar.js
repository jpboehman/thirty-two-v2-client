import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '@/components/Settings/NavBar.module.css'

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <nav className={styles.topNavStyle}>
        <ul>
          <li className={router.pathname == "/settings/account" ? styles.active : ""}>
            <Link href="/settings/account">
              Account
            </Link>
          </li>
          <li className={router.pathname == "/settings/security" ? styles.active : ""}>
            <Link href="/settings/security">
              Security
            </Link>
          </li>
          <li className={router.pathname == "/settings/privacy-policy" ? styles.active : ""}>
            <Link href="/settings/privacy-policy">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;