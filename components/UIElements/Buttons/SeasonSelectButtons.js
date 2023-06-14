import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import chosenSeason from "common/seasonOptions";

const SeasonSelectButtons = ({ onSelectSeason }) => {
    
  const handleButtonClick = (year) => {
    onSelectSeason(year);
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
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: "10px",
          }}
        >
          Select Season
        </Typography>

        <Stack
          sx={{
            display: "inline-block",
          }}
        >
          <Button
            variant="contained"
            color="warning"
            sx={{
              textTransform: "capitalize",
              borderRadius: "10px",
              mt: "10px",
              p: "10px 30px",
              fontSize: "14px",
              color: "#fff !important",
            }}
            className="mr-10px"
            onClick={() => handleButtonClick(chosenSeason[20222023])}
          >
            2022-2023
          </Button>

          <Button
            variant="contained"
            color="warning"
            sx={{
              textTransform: "capitalize",
              borderRadius: "10px",
              mt: "10px",
              p: "10px 30px",
              fontSize: "14px",
              color: "#fff !important",
            }}
            className="mr-10px"
            onClick={() => handleButtonClick(chosenSeason[20212022])}
          >
            2021-2022
          </Button>

          <Button
            variant="contained"
            color="warning"
            sx={{
              textTransform: "capitalize",
              borderRadius: "10px",
              mt: "10px",
              color: "#fff",
              p: "10px 30px",
              fontSize: "14px",
              color: "#fff !important",
            }}
            onClick={() => handleButtonClick(chosenSeason[20202021])}
            className="mr-10px"
          >
            2020-2021
          </Button>

          <Button
            variant="contained"
            color="warning"
            sx={{
              textTransform: "capitalize",
              borderRadius: "10px",
              mt: "10px",
              color: "#fff",
              p: "10px 30px",
              fontSize: "14px",
              color: "#fff !important",
            }}
            className="mr-10px"
            onClick={() => handleButtonClick(chosenSeason[20192020])}
          >
            2019-2020
          </Button>

          <Button
            variant="contained"
            color="warning"
            sx={{
              textTransform: "capitalize",
              borderRadius: "10px",
              mt: "10px",
              color: "#fff",
              p: "10px 30px",
              fontSize: "14px",
              color: "#fff !important",
            }}
            onClick={() => handleButtonClick(chosenSeason[20182019])}
            className="mr-10px"
          >
            2018-2019
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default SeasonSelectButtons;
