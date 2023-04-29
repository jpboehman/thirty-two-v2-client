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
          <h2>Player Season Grade</h2>
          <p>
            The Player Season Grade statistic grades a player’s season on a
            scale of 0-100. The grade is calculated through the use of
            traditional box score stats, advanced stats, and our very own EPS
            statistic. The main purpose of Player Season Grades is to take all
            the statistics that go into evaluating a player’s performance and
            simplify it down to one number. This offers an alternative way of
            evaluating player performance. Please keep in mind that the
            statistic doesn’t attempt to rate players but strictly grade their
            season.
          </p>
          <strong>How accruate are Player Season Grades?</strong>
          <p>
            In 9 of the past 10 seasons, the NBA MVP has finished within the top
            2 of Player Season Grades for that season. In 7 of the past 10
            seasons, the NBA Rookie of the Year had the highest Player Season
            Grade amongst rookies for their respective seasons. In 7 of the past
            10 seasons, the AP Player of the Year has finished within the top 3
            of Player Season Grades for that season.
          </p>

          <h2>Efficient Production Score (EPS)</h2>
          <p>
            EPS attempts to measure a player’s performance by applying linear
            weights to traditional box score statistics. The EPS statistic is
            our way of understanding how efficiently a player contributes to
            their team. EPS can also be applied to team statistics which helps
            with understanding team performance.
          </p>
          <strong>How accurate are Player Season Grades?</strong>
          <p>
            EPS accurately identifies which players are providing quality
            performances to their teams: Nikola Jokić, the 2020-2021 NBA MVP,
            led the league in EPS last season. Luka Garza, the 2020-2021 AP
            National Player of the Year, led the country in EPS last season.
            Teams should strive to have players that provide a high EPS every
            game. In the 2020-2021 NBA Regular Season, teams that had a higher
            EPS than their opponent won the game 94% of the time. This means if
            you have a higher EPS than your opponent during a game, you also
            have a higher chance of winning the game.
          </p>

          <h2>Efficient Production Score Spread (EPSS)</h2>
          <p>
            EPSS is the difference or spread between a team’s EPS and their
            opponent’s EPS. The EPSS stat is our way to measure team
            performance. Historically, a team’s EPSS and win percentage are
            strongly correlated. EPSS = (Team EPS – Opponent EPS)
          </p>
          <strong>How accurate is EPSS?</strong>
          <p>
            For the NBA, there is a strong, positive correlation (0.93) between
            EPSS and win percentage. For the NCAA, there is a strong, positive
            correlation (0.89) between EPSS and win percentage. As shown in the
            graph below and through our understanding of the correlation in both
            the NBA and NCAA, EPSS and win percentage are both strongly related.
            The higher the EPSS, the higher the win percentage. The lower the
            EPSS, the lower the win percentage.
          </p>

          <h2>Expected Wins</h2>
          <p>
            Through the use of our EPS statistic, we are able to project a
            team’s win percentage which then allows us to project how many wins
            a team is expected to have. These projections are a unique way to
            understand whether a team has played better or worse than their
            record indicates.
          </p>
          <strong>How accurate is Expected Wins?</strong>

          <p>
            For the NBA, there is a 95% average accuracy across the league by
            the end of the season. An example of this accuracy from last season:
            The Milwaukee Bucks owned a record of 46-26 (0.638) at the end of
            the season. Our Expected Wins Through Games Played model expected
            Milwaukee to have a (0.639) win percentage that equates to an
            expected record of 46-26. For the NCAA, there is a 93% average
            accuracy across the country by the end of the season An example of
            this accuracy from last season: The Michigan Wolverines ended their
            season with a record of 23-5 (0.821). Our Expected Wins Through
            Games Played model expected Michigan to have a (0.806) win
            percentage that equates to an expected record of 23-5.
          </p>
        </div>
      </Card>
    </>
  );
};

export default OurStatsExplained;
