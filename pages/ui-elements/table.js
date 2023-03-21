import React from 'react';
import Grid from "@mui/material/Grid";  
import BasicTable from '@/components/UIElements/Table/BasicTable';
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import TeamMembersList from "@/components/Dashboard/eCommerce/TeamMembersList";
import BrowserUsedAndTrafficReports from "@/components/Dashboard/Analytics/BrowserUsedAndTrafficReports";
import MyTasks from '@/components/Dashboard/ProjectManagement/MyTasks';
import AllProjects from '@/components/Dashboard/ProjectManagement/AllProjects';
import DataTable from '@/components/UIElements/Table/DataTable';
import DenseTable from '@/components/UIElements/Table/DenseTable';
import SortingSelectingTable from '@/components/UIElements/Table/SortingSelectingTable';
import CustomizationTable from '@/components/UIElements/Table/CustomizationTable';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Table() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Table</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Table</li>
        </ul>
      </div>

      {/* BasicTable */}
      <BasicTable />

      {/* RecentOrders */}
      <RecentOrders />

      {/* TeamMembersList */}
      <TeamMembersList />

      {/* BrowserUsedAndTrafficReports */}
      <BrowserUsedAndTrafficReports />

      {/* MyTasks */}
      <MyTasks />

      {/* AllProjects */}
      <AllProjects />

      {/* DataTable */}
      <DataTable />

      {/* DenseTable */}
      <DenseTable />

      {/* SortingSelectingTable */}
      <SortingSelectingTable />

      {/* CustomizationTable */}
      <CustomizationTable />
    </>
  );
}
