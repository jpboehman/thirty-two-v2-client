import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const CurrentCoursesData = [
  {
    id: "1",
    title: "C++",
    subTitle: "It & Software",
    image: "/images/c+.png",
    score: "4.5 Score",
    duration: "37 Days Left",
  },
  {
    id: "2",
    title: "JavaScript",
    subTitle: "Web Development",
    image: "/images/js.png",
    score: "4.5 Score",
    duration: "35 Days Left",
  },
  {
    id: "3",
    title: "Haskell",
    subTitle: "Programming",
    image: "/images/haskell.png",
    score: "4.5 Score",
    duration: "30 Days Left",
  },
];

const CurrentCourses = () => {
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
        <Box
          sx={{
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Current Courses
          </Typography>
        </Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          {CurrentCoursesData.map((course) => (
            <Grid item xs={12} md={12} lg={4} key={course.id}>
              <Box
                sx={{
                  background: "#F7F7FC",
                  borderRadius: "10px",
                  padding: "25px 20px",
                }}
                className="dark-BG-101010"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography as="h3" fontSize="18px" fontWeight="700">
                      {course.title}
                    </Typography>
                    <Typography
                      textTransform="uppercase"
                      color="primary"
                      fontSize="12px"
                      mt="5px"
                    >
                      {course.subTitle}
                    </Typography>
                  </Box>
                  <img src={course.image} alt="" />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "25px",
                  }}
                >
                  <Typography fontSize="13px" fontWeight="500">
                    {course.score}
                  </Typography>

                  <Typography fontSize="13px" color="#A9A9C8">
                    {course.duration}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default CurrentCourses;
