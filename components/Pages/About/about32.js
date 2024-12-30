import React from "react";
import Card from "@mui/material/Card";
import styles from "@/components/Pages/TermsConditions/TermsConditionsContent.module.css";

const AboutUs = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "30px",
          mb: "30px",
          maxWidth: "1000px",
          ml: "auto",
          mr: "auto",
        }}
      >
        <div className={styles.termsConditionsContent}>
          <h2>
            We are 32 Analytics - We aim to provide an understanding of
            basketball beyond the box score
          </h2>

          <strong>
            We thank you for taking the time to look at our data and we hope we
            can help you understand more about basketball. Our goal is to
            provide an additional tool to help you evaluate the game we love. In
            attempting to accomplish this, we turned what was once a passion
            project into 32 Analytics to share our proprietary data with the rest of the world.
            world.
          </strong>
          <br />
          <br />
          <h2>Experience</h2>
          <strong>
            We have previous experience working at the high major level in
            division one basketball. This experience opened our eyes and exposed
            us to the effect data can have on the game. We created a few stats
            while seeking to understand how players compare with each other over
            numerous games, with different stat lines, and at different
            positions.
          </strong>
          <strong>
            We hope you use our data to help inform decisions you make about the
            game whether you are a staff member on a team or a fan looking to
            settle an argument with a rival fan.{" "}
          </strong>
        </div>
      </Card>
    </>
  );
};

export default AboutUs;
