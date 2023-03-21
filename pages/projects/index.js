import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import AllProjects from '@/components/Projects/AllProjects';

const Projects = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Projects</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Projects</li>
        </ul>
      </div>

      <AllProjects />
    </>
  )
}

export default Projects;