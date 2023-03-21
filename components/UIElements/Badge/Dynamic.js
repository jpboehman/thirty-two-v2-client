import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const Dynamic = () => {

  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
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
            mb: '20px'
          }}
        >
          Dynamic
        </Typography>
          
        <Box
          sx={{
            color: 'action.active',
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
              marginBottom: 2,
            },
          }}
        >
          <div>
            <Badge color="primary" badgeContent={count} className="mr-4">
              <MailIcon />
            </Badge>

            <ButtonGroup className="mr-4">
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
          
          <div>
            <Badge color="primary" variant="dot" invisible={invisible} className="mr-4">
              <MailIcon />
            </Badge>
            <FormControlLabel
              sx={{ color: 'text.primary' }}
              control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
              label="Show Badge"
              className="mr-4"
            />
          </div>
        </Box>
      </Card>
    </>
  );
};

export default Dynamic;
