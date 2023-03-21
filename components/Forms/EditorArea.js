import React from 'react';
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const EditorArea = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: '15px'
          }}
        >
          Editor
        </Typography>
 
        <div>
          <RichTextEditor
            id="rte"
            controls={[
              ['bold', 'italic', 'underline', 'link', 'image'],
              ['unorderedList', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
              ['sup', 'sub'],
              ['alignLeft', 'alignCenter', 'alignRight'],
            ]}
          />
        </div>
      </Card>
    </>
  )
}

export default EditorArea;