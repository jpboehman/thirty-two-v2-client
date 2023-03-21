import NotificationTable from '@/components/Notification/NotificationTable';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Notification() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Notification</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Notification</li>
        </ul>
      </div>

      <NotificationTable />
    </>
  );
}
