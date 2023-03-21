import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import styles from "@/components/Dashboard/Analytics/Profile/Profile.module.css";
import ImpressionShare from "./ImpressionShare";

const Profile = () => {
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
            <Grid item xs={4} md={4} lg={4}>
              <div className={styles.profileInfo}>
                <img src="/images/profile.png" alt="Profile" />
                <h3>Andrew Burns</h3>
                <p>Programmer</p>
              </div>
            </Grid>

            <Grid item xs={4} md={4} lg={4}>
              <Link
                href="#"
                underline="none"
                sx={{
                  background: "#757FEF",
                  borderRadius: "4px",
                  color: "#fff !important",
                  fontSize: "10px",
                  padding: "4px 8px",
                  display: "inline-block",
                  position: "relative",
                  top: "-5px",
                }}
              >
                View Profile{" "}
                <i
                  className="ri-arrow-right-line"
                  style={{ position: "relative", top: "2px" }}
                ></i>
              </Link>
            </Grid>

            <Grid item xs={4} md={4} lg={4}>
              <ImpressionShare />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Profile;
