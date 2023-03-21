import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const featuresData = [
  {
    id: 1,
    iconName: "ri-money-dollar-circle-line",
    progress: "1.3%",
    title: "Up from past week",
    lists: [
      {
        id: 1,
        title: "All Orders",
        number: "18k",
      },
      {
        id: 2,
        title: "Pending Orders",
        number: "5k",
      },
      {
        id: 3,
        title: "Complited Orders",
        number: "13k",
      }
    ]
  },
  {
    id: 2,
    iconName: "ri-bar-chart-line",
    progress: "50%",
    title: "Up from past week",
    lists: [
      {
        id: 1,
        title: "Canceled",
        number: "2k",
      },
      {
        id: 2,
        title: "Orders Returned",
        number: "3k",
      },
      {
        id: 3,
        title: "Damaged",
        number: "1k",
      }
    ]
  },
  {
    id: 3,
    iconName: "ri-star-fill",
    progress: "70%",
    title: "Up from past week",
    lists: [
      {
        id: 1,
        title: "Abandoned Cart",
        number: "5k",
      },
      {
        id: 2,
        title: "Customers",
        number: "10k",
      },
      {
        id: 3,
        title: "In Progress",
        number: "16k",
      }
    ]
  },
]

const Features = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {featuresData.map((feature) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={feature.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                p: "25px 20px",
                mb: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: "15px",
                }}
              >
                <Box
                  sx={{
                    width: "45px",
                    height: "45px",
                    lineHeight: "45px",
                    background: "#757FEF",
                    color: "#fff",
                    fontSize: "25px",
                    borderRadius: "100%",
                    textAlign: "center",
                  }}
                >
                  <i className={feature.iconName}></i>
                </Box>
  
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: 15, 
                    fontWeight: 500,
                  }}
                  className="ml-10px"
                >
                  <span className="successColor">{feature.progress}</span> {feature.title}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {feature.lists.map((list) => (
                  <Box key={list.id}>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        mb: "5px"
                      }}
                    >
                      {list.title}
                    </Typography>

                    <Typography
                      as="h4"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      {list.number}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Features;