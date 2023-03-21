import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

const GoogleMap = () => {
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
          Google Map
        </Typography>

        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.1593668385253!2d-123.36034798417073!3d48.4342810384278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f739ed2a5f911%3A0x1e302c1ef0a5934c!2sQuadra%20St%2C%20Victoria%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sbd!4v1678856605864!5m2!1sen!2sbd" 
          width="100%" 
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Card>
    </>
  );
};

export default GoogleMap;
