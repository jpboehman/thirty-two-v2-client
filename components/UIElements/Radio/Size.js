import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Radio from '@mui/material/Radio';

export default function Size() {

  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

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
          Size
        </Typography>

        <div>
          <Radio {...controlProps('a')} size="small" />
          
          <Radio {...controlProps('b')} />

          <Radio
            {...controlProps('c')}
            sx={{
              '& .MuiSvgIcon-root': {
                fontSize: 28,
              },
            }}
          />
        </div>
      </Card>
    </>
  );
}
