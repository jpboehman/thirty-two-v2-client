import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

export default function ReadEmailContent() {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            EnvyTheme Support 
          </Typography>

          <Box>
            <Tooltip title="Print">
              <IconButton
                size="small"
                sx={{ background: "#F2F6F8" }}
                className='ml-5px'
              >
                <PrintIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton
                size="small"
                sx={{ background: "#F2F6F8" }}
                className='ml-5px'
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Report Spam">
              <IconButton
                size="small"
                sx={{ background: "#F2F6F8" }}
                className='ml-5px'
              >
                <ErrorOutlineIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="More...">
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{
                  background: "#F2F6F8",
                }}
                className='ml-5px'
              >
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem sx={{ fontSize: "14px" }}>Last 15 Days</MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>Last Month</MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>Last Year</MenuItem>
          </Menu>
        </Box>
        
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            mb={2}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img 
                src="/images/user1.png" 
                alt="User" 
                width="44px"
                height="44px"
                className="borRadius100"
              />
              <Box className="ml-1">
                <Typography as='h5' fontSize="14px" fontWeight="500">Jordan Stevenson</Typography>
                <Typography fontSize="13px">From: jonathan@domain.com</Typography>
              </Box>
            </Box>

            <Box>
              <Typography fontSize="13px">Dec 14, 2017, 5:17 AM</Typography>
            </Box>
          </Box>
          
          <Box>
            <Typography variant="h6" gutterBottom fontSize="14px">
              Hi Coderthemes!
            </Typography>

            <Typography mb={2}>
              Last pic over my village  –  Yeah i'd like that! Do you remember the video som..
            </Typography>

            <Typography mb={2}>
              Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.
            </Typography>

            <Typography mb={2}>
              Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.
            </Typography>

            <Typography variant="h6" gutterBottom fontSize="14px">
              Checklists/Sub-tasks
            </Typography>

            <ol>
              <li>Your design preferences (Color, style, shapes, Fonts, others)</li>
              <li>Tell me, why is your item different?</li>
              <li>Do you want to bring up a specific feature of your item? If yes, please tell me</li>
              <li>Do you have any preference or specific thing you would like to change or improve on your item page?</li>
              <li>Do you want to include your item's or your provider's logo on the page? if yes, please send it to me in vector format (Ai or EPS)</li>
              <li>Please provide me with the copy or text to display</li>
            </ol>

            <Typography mb={2}>
              Filling in this form with the above information will ensure that they will be able to start work quickly.
            </Typography>

            <Typography mb={2}>
              You can complete your order by putting your coupon code into the Promotional code box and clicking ‘Apply Coupon’.
            </Typography>

            <Typography mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Typography>

            <Typography mb={2}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Typography>

            <Typography mb={2}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </Typography>
          </Box>
          
          <Stack direction="row" justifyContent="end" mt={2}>
            <Button 
              variant="contained" 
              color="secondary"
              startIcon={<ReplyIcon sx={{ color: "#fff !important", }} />}
              sx={{
                borderRadius: '8px',
                textTransform: 'capitalize',
                color: "#fff !important",
              }}
              className="mr-2"
            >
              Reply
            </Button>

            <Button 
              variant="contained" 
              startIcon={<ForwardToInboxIcon sx={{ color: "#fff !important", }} />}
              sx={{
                borderRadius: '8px',
                textTransform: 'capitalize',
                color: "#fff !important",
              }}
            >
              Forward
            </Button>
          </Stack>
        </Box>
      </Card>
    </>
  );
}
