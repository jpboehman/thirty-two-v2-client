import React from "react";
import Card from "@mui/material/Card";
import styles from "@/components/Pages/TermsConditions/TermsConditionsContent.module.css";

const OurStatsExplained = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "30px",
          mb: "30px",
          maxWidth: "900px",
          ml: "auto",
          mr: "auto",
        }}
      >
        <div className={styles.termsConditionsContent}>
          <p>
            <strong>GLOSSARY</strong>
          </p>

          <ul>
            <li>
              <strong>EPS</strong> - Efficient Production Score
            </li>
            <li>
              <strong>EPSS</strong> - Efficient Production Score Spread
            </li>
            <li>
              <strong>WCr</strong> - Wins Created
            </li>
            <li>
              <strong>WCr %</strong> - Wins Created Share
            </li>
            <li>
              <strong>WCr/GP</strong> - Wins Created per Game Played
            </li>
            <li>
              <strong>MVPr</strong> - Most Valuable Player Rating
            </li>
            <li>
              <strong>adjEPSS/Poss</strong> - Adjusted EPSS per Possession
            </li>
            <li>
              <strong>ExW%</strong> - Expected Win Percentage
            </li>
            <li>
              <strong>ExW</strong> - Expected Wins
            </li>
          </ul>

          <p>
            <strong>SEASON GRADES: </strong>Player Season Grades provide a way to
            encapsulate a player’s season into one complete number and exist on
            a 0 to 100 scale. A player’s Season Grade is built by using all of
            the data compiled from their individual Game Grades. The Season
            Grades are also adjusted for consistency and performance above that
            of an average D1 player.
          </p>

          <p>
            <strong>GAME GRADES: </strong>Player Game Grades offer a new,
            alternative way to evaluate player performance. Game Grades are
            built on 5 core components that work to provide context and depth
            for every individual player’s performance.
          </p>

          <p>The 5 core components that go into Game Grades are:</p>

          <ol>
            <li>
              Player Adjusted Performance: We adjust a player’s performance
              based on the opponent played
            </li>
            <li>
              Player Adjusted Efficiency: We adjust a player’s performance based
              on the # of possessions played{" "}
            </li>
            <li>
              Relative Player Impact: We adjust a player’s performance based on
              how they performed relative to the performance of their teammates.
            </li>
            <li>
              Player Wins Created: We use our own efficiency metrics (EPS) to
              calculate an expected win % for a team in a game. We then credit a
              player with a share of their team’s expected win % based on their
              role in the game.
            </li>
            <li>
              EPS Plus-Minus: We calculate the change in EPS Spread when a
              player is on/off the court.
            </li>
          </ol>
          <p>
            <strong>WCr:</strong> WCr (Wins Created) estimates how many wins a
            player has created for their team over the course of a season. WCr
            is calculated through a player’s role in expected team performance.
          </p>

          <p>
            <strong>WCr %:</strong> WCr % (Wins Created Share) measures the
            share of a team’s expected wins that a player has contributed.
          </p>

          <p>
            <strong>WCr/GP:</strong> WCr/GP (Wins Created per Game Played)
            estimates how many wins a player creates for their team on a per
            game basis.
          </p>

          <p>
            <strong>WINS CREATED TRIO:</strong> WCr, WCr %, and WCr/GP are all
            calculated based on our expected team performance metrics rather
            than actual team performance. The purpose of this is to have the
            Wins Created Trio serve as predictive values for future player
            performance.
          </p>

          <p>
            <strong>MVPr:</strong> MVPr (Most Valuable Player Rating) measures
            the value a player brings to team success. MVPr takes into account
            player efficiency, role, team success, and pace.
          </p>

          <p>
            <strong>EPS:</strong> EPS (Efficient Production Score) measures the
            efficiency of a player/team’s production. EPS is our very own
            efficiency stat. We believe EPS is one of the most accurate ways to
            measure performance because it evaluates everything that a
            player/team does. EPS is at the core at everything we do.
          </p>

          <p>
            Team EPS refers to a team’s efficiency. The higher a team’s Team EPS
            is, the better.
          </p>
          <p>
            Opponent EPS refers to the efficiency that a team allows against
            themselves. The lower a team’s Opponent EPS is, the better.
          </p>

          <p>
            <strong>EPSS:</strong> EPSS (Efficient Production Score Spread)
            measures the quality of a team’s performance. EPSS is calculated by
            finding the spread/difference between a team’s Team EPS and their
            Opponent EPS. An example of the equation is listed below:
          </p>

          <p>EPSS = Team EPS - Opponent EPS</p>

          <p>The higher a team’s EPSS is, the better the performance.</p>

          <p>
            <strong>adjEPSS/Poss:</strong> adjEPSS/Poss (Adjusted EPSS per
            Possession) measures team performance and adjusts EPSS for both
            opponent and possessions played. Because college basketball has a
            wider range of quality and tempo between teams, we include an
            adjusted EPSS per possession for college basketball. This adjustment
            allows for a much more honest evaluation of team performance.
          </p>

          <p>
            <strong>EXPECTED WIN %:</strong> ExW% (Expected Win Percentage)
            measures a team’s expected win percentage based on our team
            efficiency metrics. Based on a team’s Team EPS and their Opponent
            EPS, we can calculate an expected win percentage. This expected win
            percentage serves as a predictive metric for a team’s future
            performance. Over the course of a season, we can expect a team to
            regress to the expected win percentage.
          </p>

          <p>
            <strong>EXPECTED WINS:</strong> ExW (Expected Wins) measures the
            amount of wins a team is expected to have based on their
            performance. Expected Wins is calculated by multiplying a team’s
            Expected Win % and their GP. This statistic shows whether a team has
            won or lost more games than they were expected to based on their performance.
          </p>
        </div>
      </Card>
    </>
  );
};

export default OurStatsExplained;
