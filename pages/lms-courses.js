import Grid from "@mui/material/Grid";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import Features from '@/components/Dashboard/LMSCourses/Features';
import YourProgress from "@/components/Dashboard/LMSCourses/YourProgress";
import ExperienceIQ from "@/components/Dashboard/LMSCourses/ExperienceIQ";
import HoursSpent from "@/components/Dashboard/LMSCourses/HoursSpent";
import MyPlanning from "@/components/Dashboard/LMSCourses/MyPlanning";
import TopInstructor from "@/components/Dashboard/LMSCourses/TopInstructor";
import TotalWatched from "@/components/Dashboard/LMSCourses/TotalWatched";
import CurrentCourses from "@/components/Dashboard/LMSCourses/CurrentCourses";
import Courses from "@/components/Dashboard/LMSCourses/Courses";
import ActiveCourse from "@/components/Dashboard/LMSCourses/ActiveCourse";
import CourseCompletion from "@/components/Dashboard/LMSCourses/CourseCompletion";
import Messages from "@/components/Dashboard/LMSCourses/Messages";
import TopStudents from "@/components/Dashboard/LMSCourses/TopStudents";

export default function LMSCourses() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>LMS Courses</h1>
        <ul>
          <li>
            <Link href="/lms-courses/">Dashboard</Link>
          </li>
          <li>
            LMS Courses
          </li>
        </ul>
      </div>

      {/* Features */}
      <Features />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* YourProgress */}
          <YourProgress />

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={12} md={12} lg={8}>
              {/* HoursSpent */}
              <HoursSpent />

              {/* TopInstructor */}
              <TopInstructor />
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              {/* MyPlanning */}
              <MyPlanning />

              {/* TotalWatched */}
              <TotalWatched />
            </Grid>
          </Grid>

          {/* CurrentCourse */}
          <CurrentCourses />

          {/* Courses */}
          <Courses />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* ExperienceIQ */}
          <ExperienceIQ />

          {/* ActiveCourse */}
          <ActiveCourse />

          {/* CourseCompletion */}
          <CourseCompletion />

          {/* Messages */}
          <Messages />

          {/* TopStudents */}
          <TopStudents />
        </Grid>
      </Grid>
 
    </>
  );
}
