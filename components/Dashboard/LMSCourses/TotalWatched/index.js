import React from "react";
import styles from "@/components/Dashboard/LMSCourses/TotalWatched/TotalWatched.module.css";

const TotalWatched = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.boxList}>
          <h4>Total Watched</h4>
          <p>
            <i className="ri-bar-chart-line"></i> 66:15h
          </p>
        </div>

        <div className={styles.boxList}>
          <h4>Assignment Completed</h4>
          <p>81%</p>
        </div>

        <div className={styles.boxList}>
          <h4>Monthly Progress</h4>
          <p>81%</p>
        </div>

        <div className={styles.boxList}>
          <h4>Overall Pass Percentage</h4>
          <p>81%</p>
        </div>
      </div>
    </>
  );
};

export default TotalWatched;
