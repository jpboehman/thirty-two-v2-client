import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import ToDoLists from '@/components/Apps/ToDoLists'

export default function ToDo() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>To Do</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>To Do</li>
        </ul>
      </div>

      <ToDoLists />
    </>
  );
}
