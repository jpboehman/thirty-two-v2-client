import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

export default function Color() {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
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
          Color
        </Typography>

        <div>
          <Radio {...controlProps('a')} />
          <Radio {...controlProps('b')} color="secondary" />
          <Radio {...controlProps('c')} color="success" />
          <Radio {...controlProps('d')} color="default" />
          <Radio
            {...controlProps('e')}
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[500],
              },
            }}
          />
        </div>
      </Card>
    </>
  );
}
