import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';

const CustomizeTextareaComponent = () => {
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
            mb: '10px'
          }}
        >
          Customize Textarea Component
        </Typography>
        
        <TextareaAutosize
          aria-label="minimum height"
          minRows={8}
          placeholder="Minimum 3 rows"
          style={{ 
            width: "100%",
            background: '#FFFFFF',
            border: '1px solid #B1B5C3',
            borderRadius: '10px',
            padding: '15px'
          }}
          className="dark-textarea"
        />
      </Card>
    </>
  );
};

export default CustomizeTextareaComponent;
