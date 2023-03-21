import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const TopInstructorData = [
  {
    id: "1",
    image: "/images/user9.png",
    name: "Melanie Grutt",
    userName: "@melgrutt",
  },
  {
    id: "2",
    image: "/images/user10.png",
    name: "Theron Trump",
    userName: "@therontrump",
  },
  {
    id: "3",
    image: "/images/user11.png",
    name: "Johen Mark",
    userName: "@johenmark",
  },
  {
    id: "4",
    image: "/images/user12.png",
    name: "Nicholas Tanner",
    userName: "@nilyeager",
  },
  {
    id: "5",
    image: "/images/user13.png",
    name: "Tyler Mark",
    userName: "@tylemark",
  },
  {
    id: "6",
    image: "/images/user14.png",
    name: "Martina Albart",
    userName: "@martina",
  },
];

const TopInstructor = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            marginBottom: "10px",
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
            Top Instructor
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{ fontSize: '14px' }}>Select</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={select}
                label="Select"
                onChange={handleChange}
                sx={{ fontSize: '14px' }}
              >
                <MenuItem value={0} sx={{ fontSize: '14px' }}>Today</MenuItem>
                <MenuItem value={1} sx={{ fontSize: '14px' }}>This Week</MenuItem>
                <MenuItem value={2} sx={{ fontSize: '14px' }}>Last Month</MenuItem>
                <MenuItem value={3} sx={{ fontSize: '14px' }}>Last 12 Months</MenuItem>
                <MenuItem value={4} sx={{ fontSize: '14px' }}>All Time</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          {TopInstructorData.map((instructor) => (
            <Grid item xs={12} md={12} lg={6} key={instructor.id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#F7F7FC",
                  borderRadius: "10px",
                  p: "18px 15px",
                  mt: "5px",
                }}
                className="dark-BG-101010"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={instructor.image}
                    alt="Image"
                    width="45px"
                    height="45px"
                    className="borderRadius10"
                  />

                  <Box className="ml-1">
                    <Typography as="h4" fontWeight={500} fontSize="13px">
                      {instructor.name}
                    </Typography>
                    <Typography color="#A9A9C8;" fontSize="12px">
                      {instructor.userName}
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Button
                    sx={{
                      background: "#fff",
                      color: "#A9A9C8",
                      width: "30px",
                      height: "30px",
                      p: "0",
                      minWidth: "auto",
                      fontSize: "17px",
                      borderRadius: "100%",
                    }}
                  >
                    <i className="ri-add-line"></i>
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default TopInstructor;
