import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

const TopStudentsData = [
  {
    id: "1",
    image: "/images/user18.png",
    name: "Melanie Grutt",
    userName: "@melgrutt",
  },
  {
    id: "2",
    image: "/images/user19.png",
    name: "Theron Trump",
    userName: "@therontrump",
  },
  {
    id: "3",
    image: "/images/user20.png",
    name: "Johen Mark",
    userName: "@johenmark",
  },
  {
    id: "4",
    image: "/images/user21.png",
    name: "Nicholas Tanner",
    userName: "@nilyeager",
  },
  {
    id: "5",
    image: "/images/user22.png",
    name: "Tyler Mark",
    userName: "@tylemark",
  },
  {
    id: "6",
    image: "/images/user23.png",
    name: "Martina Albart",
    userName: "@martina",
  },
];

const TopStudents = () => {
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
          p: "25px 20px",
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
              fontSize: 17,
              fontWeight: 500,
            }}
          >
            Top Students
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
          {TopStudentsData.map((student) => (
            <Grid item xs={12} md={6} lg={6} key={student.id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#F7F7FC",
                  borderRadius: "10px",
                  p: "15px 12px",
                  mt: "10px",
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
                    src={student.image}
                    alt="Image"
                    width="35px"
                    height="35px"
                    className="borRadius100"
                  />

                  <Box className="ml-1">
                    <Typography as="h4" fontWeight={500} fontSize="12.5px">
                      {student.name}
                    </Typography>
                    <Typography color="#A9A9C8;" fontSize="12px">
                      {student.userName}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default TopStudents;
