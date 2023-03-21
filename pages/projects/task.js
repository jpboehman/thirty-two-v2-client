import React from "react";
import Grid from "@mui/material/Grid";
import TotalUsers from "@/components/Projects/Task/TotalUsers";
import CompletedTasks from "@/components/Projects/Task/CompletedTasks";
import TasksPerformance from "@/components/Projects/Task/TasksPerformance";
import MyTasks from "@/components/Projects/Task/MyTasks";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

const Task = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Task</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Task</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={6} xl={4}>
          {/* TotalUsers */}
          <TotalUsers />
        </Grid>

        <Grid item xs={12} md={12} lg={6} xl={4}>
          {/* CompletedTasks */}
          <CompletedTasks />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* TasksPerformance */}
          <TasksPerformance />
        </Grid>
      </Grid>

      {/* MyTasks */}
      <MyTasks />
    </>
  );
};

export default Task;
