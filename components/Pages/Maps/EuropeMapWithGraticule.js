import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

const EuropeMapWithGraticule = () => {
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
          Europe Map With Graticule
        </Typography>

        <ComposableMap
          width={800}
          height={800}
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-10.0, -53.0, 0],
            scale: 1200
          }}
        >
          <Graticule stroke="#EAEAEC" />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#9998A3"
                  stroke="#EAEAEC"
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </Card>
    </>
  );
};

export default EuropeMapWithGraticule;