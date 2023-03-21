import React from "react";
import Grid from "@mui/material/Grid";
import styles from "@/components/Dashboard/Analytics/Profile/Profile.module.css";
import ImpressionShare from "./ImpressionShare";

const ProfileContent = () => {
  return (
    <>
      <div className={styles.profileBox}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>Welcome to admash Dashboard!</h1>
            <p>
              You have done 68% 😎 more sales today. Check your new badge in
              your profile.
            </p>
          </div>
          <img src="/images/working-on-table.png" alt="Working on table" />
        </div>

        <div className={styles.profileInfoContent}>
          <Grid
            container
            alignItems="flex-end"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={6} md={6} lg={8}>
              <div className={styles.profileInfo}>
                <img src="/images/profile.png" alt="Profile" />
                <h3>Andrew Burns</h3>
                <p>Programmer</p>
              </div>
            </Grid> 

            <Grid item xs={6} md={6} lg={4}>
              <ImpressionShare />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
