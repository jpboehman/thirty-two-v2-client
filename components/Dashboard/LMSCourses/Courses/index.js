import React from "react";
import Card from "@mui/material/Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EnrolledCourses from "./EnrolledCourses";
import CreatedCourses from "./CreatedCourses";
import styles from '@/components/Dashboard/LMSCourses/Courses/Tabs.module.css';

const Courses = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 25px 15px",
          mb: "15px",
        }}
      >
        <Tabs className={styles.tabs}>
          <TabList>
            <Tab>Enrolled</Tab>
            <Tab>Created</Tab>
          </TabList>

          <TabPanel>
            <EnrolledCourses />
          </TabPanel>
          
          <TabPanel>
            <CreatedCourses />
          </TabPanel>
        </Tabs>
      </Card>
    </>
  );
};

export default Courses;
