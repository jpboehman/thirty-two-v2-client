import React from "react";
import { Box, Typography } from "@mui/material";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#757FEF" : "#308fe8",
  },
}));

const TeamMembers = [
  {
    id: 1,
    name: "Jason Haston",
    image: "/images/member1.png",
    designation: "Team Leader",
    teamName: "UI/UX Design Team",
    introText: "Contrary to popular belief, Lorem Ipsum is not simply",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member1.png",
      },
      {
        id: 2,
        image: "/images/member2.png",
      },
      {
        id: 3,
        image: "/images/member3.png",
      },
      {
        id: 4,
        image: "/images/member4.png",
      },
      {
        id: 5,
        image: "/images/member5.png",
      },
      {
        id: 6,
        image: "/images/member6.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "UI/UX Project",
    totalTask: "40/80",
    taskProgress: "50",
  },
  {
    id: 2,
    name: "Willie Miller",
    image: "/images/member2.png",
    designation: "Team Leader",
    teamName: "Frontend Developer Team",
    introText: "Contrary to popular belief, Lorem Ipsum is not simply",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member2.png",
      },
      {
        id: 2,
        image: "/images/member3.png",
      },
      {
        id: 3,
        image: "/images/member4.png",
      },
      {
        id: 4,
        image: "/images/member5.png",
      },
      {
        id: 5,
        image: "/images/member6.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Transfer Money",
    totalTask: "60/100",
    taskProgress: "60",
  },
  {
    id: 3,
    name: "Jordan Stevenson",
    image: "/images/member3.png",
    designation: "Team Leader",
    teamName: "Web Design Team",
    introText: "Contrary to popular belief, Lorem Ipsum is not simply",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member3.png",
      },
      {
        id: 2,
        image: "/images/member4.png",
      },
      {
        id: 3,
        image: "/images/member5.png",
      },
      {
        id: 4,
        image: "/images/member6.png",
      },
      {
        id: 5,
        image: "/images/member7.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Payment App",
    totalTask: "70/100",
    taskProgress: "70",
  },
  {
    id: 4,
    name: "Stevenson",
    image: "/images/member4.png",
    designation: "Team Leader",
    teamName: "ReactJS Team",
    introText: "Contrary to popular belief, Lorem Ipsum is not simply",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member4.png",
      },
      {
        id: 2,
        image: "/images/member5.png",
      },
      {
        id: 3,
        image: "/images/member6.png",
      },
      {
        id: 4,
        image: "/images/member7.png",
      },
      {
        id: 5,
        image: "/images/member8.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "React App",
    totalTask: "80/100",
    taskProgress: "80",
  },
  {
    id: 5,
    name: "Marnie Flowers",
    image: "/images/member5.png",
    designation: "Team Leader",
    teamName: "Angular JS Team",
    introText: "Contrary to popular belief, Lorem Ipsum is not simply",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member5.png",
      },
      {
        id: 2,
        image: "/images/member6.png",
      },
      {
        id: 3,
        image: "/images/member7.png",
      },
      {
        id: 4,
        image: "/images/member8.png",
      },
      {
        id: 5,
        image: "/images/member9.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Payment App",
    totalTask: "90/100",
    taskProgress: "90",
  },
  {
    id: 6,
    name: "Steven Hari",
    image: "/images/member6.png",
    designation: "Team Leader",
    teamName: "Vue.js Team",
    introText: "Contrary to popular belief, Lorem Ipsum is not simply",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member6.png",
      },
      {
        id: 2,
        image: "/images/member7.png",
      },
      {
        id: 3,
        image: "/images/member8.png",
      },
      {
        id: 4,
        image: "/images/member9.png",
      },
      {
        id: 5,
        image: "/images/member10.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Banking app",
    totalTask: "100/100",
    taskProgress: "100",
  },
  {
    id: 7,
    name: "Keith",
    image: "/images/member7.png",
    designation: "Team Leader",
    teamName: "Content Writing",
    introText: "Contrary to popular belief, Lorem Ipsum is not simply",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member7.png",
      },
      {
        id: 2,
        image: "/images/member8.png",
      },
      {
        id: 3,
        image: "/images/member9.png",
      },
      {
        id: 4,
        image: "/images/member10.png",
      },
      {
        id: 5,
        image: "/images/member11.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Blogging Template",
    totalTask: "40/100",
    taskProgress: "40",
  },
  {
    id: 8,
    name: "Marion",
    image: "/images/member8.png",
    designation: "Team Leader",
    teamName: "E-commerce",
    introText: "Contrary to popular belief, Lorem Ipsum is not simply",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member9.png",
      },
      {
        id: 2,
        image: "/images/member1.png",
      },
      {
        id: 3,
        image: "/images/member2.png",
      },
      {
        id: 4,
        image: "/images/member3.png",
      },
      {
        id: 5,
        image: "/images/member4.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "E-commerce Template",
    totalTask: "55/100",
    taskProgress: "55",
  },
  {
    id: 9,
    name: "Marshall",
    image: "/images/member9.png",
    designation: "Team Leader",
    teamName: "App Development",
    introText: "Contrary to popular belief, Lorem Ipsum is not simply",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member9.png",
      },
      {
        id: 2,
        image: "/images/member3.png",
      },
      {
        id: 3,
        image: "/images/member4.png",
      },
      {
        id: 4,
        image: "/images/member5.png",
      },
      {
        id: 5,
        image: "/images/member6.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Admin Template",
    totalTask: "40/100",
    taskProgress: "40",
  },
]

const Team = () => {
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
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Team</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Team</li>
        </ul>
      </div>

      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {TeamMembers.map((member) => (
          <Grid item xs={12} md={6} lg={6} xl={4} key={member.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                p: "20px",
                mb: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img 
                    src={member.image}
                    alt="Member"
                    width="55px"
                    height="55px"
                    className="borRadius100"
                  />
                  <Box className="ml-1">
                    <Typography
                      as="h3"
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 13,
                      }}
                    >
                      {member.designation}
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ 
                      background: '#fafafa'
                    }}
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
                  <MenuItem sx={{ fontSize: '14px' }}>Open Project</MenuItem>
                  <MenuItem sx={{ fontSize: '14px' }}>Edit</MenuItem>
                  <MenuItem sx={{ fontSize: '14px' }}>Delete</MenuItem>
                </Menu>
              </Box>
              
              <Box mb={2}>
                <Typography
                  as="h3"
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    mb: "5px"
                  }}
                >
                  {member.teamName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 13,
                  }}
                >
                  {member.introText}
                </Typography>
              </Box>

              <Box 
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                mb={2}
              >
                <Box>
                  <AvatarGroup max={4}>
                    {member.teamMemberLists.map((team) => (
                      <Avatar key={team.id} src={team.image} alt="Remy Sharp" />
                    ))}
                  </AvatarGroup>
                </Box>

                <Box>
                  <Link href={member.viewDetailsLink} className="text-decoration-none">
                    <Button 
                      variant="contained"
                      color="secondary"
                      sx={{
                        borderRadius: '4px',
                        textTransform: "capitalize",
                        color: "#fff !important",
                      }}
                    >
                      view details
                    </Button>
                  </Link>
                </Box>
              </Box>
              
              <Box>
                <Box 
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end'
                  }}
                  mb={1}
                >
                  <Box>
                    <Typography
                      as="h3"
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        mb: "5px"
                      }}
                    >
                      {member.projectName}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 13,
                      }}
                    >
                      {member.totalTask}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 13,
                      }}
                    >
                      {member.taskProgress}% Completed
                    </Typography>
                  </Box>
                </Box>

                <BorderLinearProgress variant="determinate" value={member.taskProgress} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Team;
