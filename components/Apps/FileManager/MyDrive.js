import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MyDriveData = [
  {
    id: "1",
    icon: "/images/folder.png",
    title: "Projects",
    totalFiles: "387 Files",
    filesSize: "4.5 GB",
  },
  {
    id: "2",
    icon: "/images/folder.png",
    title: "Documents",
    totalFiles: "1572 Files",
    filesSize: "7.5 GB",
  },
  {
    id: "3",
    icon: "/images/folder.png",
    title: "Media",
    totalFiles: "1241 Files",
    filesSize: "2.8 GB",
  },
  {
    id: "4",
    icon: "/images/folder.png",
    title: "Applications",
    totalFiles: "2487 Files",
    filesSize: "4.5 GB",
  },
];

const MyDrive = () => {
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
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {MyDriveData.map((dInfo) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={3} key={dInfo.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                p: "15px 20px 20px",
                mb: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <MoreHorizIcon />
                  </IconButton>
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
                      filter: "drop-shadow(0px 2px 8px rgba(229,229,229,0.32))",
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
                  <MenuItem sx={{ fontSize: "13px" }}>
                    <i className="ri-edit-2-line mr-5px"></i> Rename
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "13px" }}>
                    <i className="ri-download-cloud-line mr-5px"></i> Download
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "13px" }}>
                    <i className="ri-delete-bin-line mr-5px"></i> Remove
                  </MenuItem>
                </Menu>
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  padding: "30px 0",
                }}
              >
                <img src={dInfo.icon} alt="folder" />
                <Typography as="h3" fontWeight="500" fontSize="14px" mt="10px">
                  {dInfo.title}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>{dInfo.totalFiles}</Typography>
                <Typography>{dInfo.filesSize}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyDrive;
