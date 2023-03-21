import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

export default function TimelineStyle2() {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "5px",
            mb: "15px",
          }}
          className="for-dark-bottom-border"
        >
          Timeline Style 2
        </Typography>

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              Jan 15, 2023 (09:30 am)
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Typography variant="h6" mb="5px">
                First Event
              </Typography>
              <Typography mb="5px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              Jan 16, 2023 (09:30 am)
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Typography variant="h6" mb="5px">
                Second Event
              </Typography>
              <Typography mb="5px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              Jan 17, 2023 (09:30 am)
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Typography variant="h6" mb="5px">
                Third Event
              </Typography>
              <Typography mb="5px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              Jan 18, 2023 (09:30 am)
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>

            <TimelineContent>
              <Typography variant="h6" mb="5px">
                Fourth Event
              </Typography>
              <Typography mb="5px">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Card>
    </>
  );
}
