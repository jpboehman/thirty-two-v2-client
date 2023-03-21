import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

const contactLists = [
  {
    image: '/images/member1.png',
    name: 'Alvarado Turner',
    userName: '@alvaradoTurner',
    email: 'alvaradoTurner@gmail.com',
    projectUrl: '#',
    post: '18k',
    followers: '5.21k',
    followings: '32k',
  },
  {
    image: '/images/member2.png',
    name: 'Evangelina Mcclain',
    userName: '@evangelinaMcclain',
    email: 'evangelinaMcclain@gmail.com',
    projectUrl: '#',
    post: '10k',
    followers: '4.20k',
    followings: '15k',
  },
  {
    image: '/images/member3.png',
    name: 'Candice Munoz',
    userName: '@candiceMunoz',
    email: 'candiceMunoz@gmail.com',
    projectUrl: '#',
    post: '5k',
    followers: '2.20k',
    followings: '12k',
  },
  {
    image: '/images/member4.png',
    name: 'Bernard Langley',
    userName: '@bernardLangley',
    email: 'bernardLangley@gmail.com',
    projectUrl: '#',
    post: '19k',
    followers: '10.20k',
    followings: '30k',
  },
  {
    image: '/images/member5.png',
    name: 'Kristie Hall',
    userName: '@kristieHall',
    email: 'kristieHall@gmail.com',
    projectUrl: '#',
    post: '14k',
    followers: '9.20k',
    followings: '40k',
  },
  {
    image: '/images/member6.png',
    name: 'Bolton Obrien',
    userName: '@boltonObrien',
    email: 'boltonObrien@gmail.com',
    projectUrl: '#',
    post: '20k',
    followers: '19.20k',
    followings: '50k',
  },
  {
    image: '/images/member7.png',
    name: 'Dee Alvarado',
    userName: '@deeAlvarado',
    email: 'deeAlvarado@gmail.com',
    projectUrl: '#',
    post: '22k',
    followers: '30.20k',
    followings: '50k',
  },
  {
    image: '/images/member8.png',
    name: 'Cervantes Kramer',
    userName: '@cervantesKramer',
    email: 'cervantesKramer@gmail.com',
    projectUrl: '#',
    post: '25k',
    followers: '35.20k',
    followings: '10k',
  },
  {
    image: '/images/member9.png',
    name: 'Dejesus Michael',
    userName: '@dejesusMichael',
    email: 'dejesusMichael@gmail.com',
    projectUrl: '#',
    post: '16k',
    followers: '20.20k',
    followings: '5k',
  },
  {
    image: '/images/member10.png',
    name: 'Alissa Nelson',
    userName: '@alissaNelson',
    email: 'alissaNelson@gmail.com',
    projectUrl: '#',
    post: '13k',
    followers: '20.20k',
    followings: '250',
  },
  {
    image: '/images/member11.png',
    name: 'English Haney',
    userName: '@englishHaney',
    email: 'englishHaney@gmail.com',
    projectUrl: '#',
    post: '12k',
    followers: '12.20k',
    followings: '1205',
  },
  {
    image: '/images/member12.png',
    name: 'Edwards Mckenzie',
    userName: '@edwardsMckenzie',
    email: 'edwardsMckenzie@gmail.com',
    projectUrl: '#',
    post: '11k',
    followers: '30.20k',
    followings: '5k',
  },
];

export default function ContactList() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Contact List</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Contact List</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {contactLists.map((contactList) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={contactList.name}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: "none",
                borderRadius: "10px",
                p: "20px 15px",
                mb: "15px",
              }}
            >
              <img 
                src={contactList.image} 
                alt="Member"
                width="148px"
                height="148px"
                className="borRadius100"
              />
              <Typography
                as="h4"
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  mt: '10px',
                }}
              >
                {contactList.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: '#A9A9C8',
                  mb: 2,
                }}
              >
                {contactList.userName}
              </Typography>

              <Box>
                <Link href={`mailto:${contactList.email}`} className="text-decoration-none">
                  <Button 
                    variant="contained" 
                    color="primary"
                    sx={{
                      textTransform: 'capitalize',
                      borderRadius: '8px',
                      m: '0 5px',
                      color: "#fff !important"
                    }}
                  >
                    Message
                  </Button>
                </Link>
                
                <Link href={contactList.projectUrl} className="text-decoration-none">
                  <Button 
                    variant="contained" 
                    color="secondary"
                    sx={{
                      textTransform: 'capitalize',
                      borderRadius: '8px',
                      m: '0 5px',
                      color: "#fff !important"
                    }}
                  >
                    Projects
                  </Button>
                </Link>
              </Box>
            
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  mt: '30px'
                }}
              >
                <Box>
                  <Typography color="#A9A9C8" mb={1} fontSize="13px">
                    Post
                  </Typography>
                  <Typography fontWeight="500" fontSize="20px">
                    {contactList.post}
                  </Typography>
                </Box>

                <Box>
                  <Typography color="#A9A9C8" mb={1} fontSize="13px">
                    Followers
                  </Typography>
                  <Typography fontWeight="500" fontSize="20px">
                    {contactList.followers}
                  </Typography>
                </Box>

                <Box>
                  <Typography color="#A9A9C8" mb={1} fontSize="13px">
                    Followings
                  </Typography>
                  <Typography fontWeight="500" fontSize="20px">
                    {contactList.followings}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
