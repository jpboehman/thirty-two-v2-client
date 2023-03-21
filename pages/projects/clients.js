import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

const clientsLists = [
  {
    image: '/images/member1.png',
    name: 'Alvarado Turner',
    userName: '@alvaradoTurner',
    email: 'alvaradoturner@gmail.com',
    projectsUrl: '#',
    location: 'New York, USA',
    phone: '+1 123 456 789',
  },
  {
    image: '/images/member2.png',
    name: 'Evangelina Mcclain',
    userName: '@evangelinaMcclain',
    email: 'evangelina@gmail.com',
    projectsUrl: '#',
    location: 'Switzerland',
    phone: '+1 123 468 789',
  },
  {
    image: '/images/member3.png',
    name: 'Candice Munoz',
    userName: '@candiceMunoz',
    email: 'candiceMunoz@gmail.com',
    projectsUrl: '#',
    location: 'Germany',
    phone: '+1 123 456 842',
  },
  {
    image: '/images/member4.png',
    name: 'Bernard Langley',
    userName: '@bernardLangley',
    email: 'bernardLangley@gmail.com',
    projectsUrl: '#',
    location: 'Canada',
    phone: '+1 123 256 789',
  },
  {
    image: '/images/member5.png',
    name: 'Kristie Hall',
    userName: '@kristieHall',
    email: 'kristieHall@gmail.com',
    projectsUrl: '#',
    location: 'United States',
    phone: '+1 123 456 742',
  },
  {
    image: '/images/member6.png',
    name: 'Bolton Obrien',
    userName: '@boltonObrien',
    email: 'boltonObrien@gmail.com',
    projectsUrl: '#',
    location: 'Sweden',
    phone: '+1 123 346 789',
  },
  {
    image: '/images/member7.png',
    name: 'Dee Alvarado',
    userName: '@deeAlvarado',
    email: 'deeAlvarado@gmail.com',
    projectsUrl: '#',
    location: 'Japan',
    phone: '+1 123 456 953',
  },
  {
    image: '/images/member8.png',
    name: 'Cervantes Kramer',
    userName: '@cervantesKramer',
    email: 'cervantesKramer@gmail.com',
    projectsUrl: '#',
    location: 'Australia',
    phone: '+1 123 368 789',
  },
  {
    image: '/images/member9.png',
    name: 'Dejesus Michael',
    userName: '@dejesusMichael',
    email: 'dejesusMichael@gmail.com',
    projectsUrl: '#',
    location: 'United Kingdom',
    phone: '+1 123 456 742',
  },
  {
    image: '/images/member10.png',
    name: 'Alissa Nelson',
    userName: '@alissaNelson',
    email: 'alissaNelson@gmail.com',
    projectsUrl: '#',
    location: 'France',
    phone: '+1 123 356 789',
  },
  {
    image: '/images/member11.png',
    name: 'English Haney',
    userName: '@englishHaney',
    email: 'englishHaney@gmail.com',
    projectsUrl: '#',
    location: 'Denmark',
    phone: '+1 123 456 566',
  },
  {
    image: '/images/member12.png',
    name: 'Edwards Mckenzie',
    userName: '@edwardsMckenzie',
    email: 'edwardsMckenzie@gmail.com',
    projectsUrl: '#',
    location: 'New Zealand',
    phone: '+1 123 357 789',
  },
];

export default function Clients() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Clients</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Clients</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {clientsLists.map((client) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={client.name}>
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
                src={client.image} 
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
                {client.name}
              </Typography>

              <Typography
                as="h4"
                sx={{
                  fontSize: 13,
                  color: '#A9A9C8',
                  mb: 2,
                }}
              >
                {client.userName}
              </Typography>

              <Box>
                <Link href={`mailto:${client.email}`} className="text-decoration-none">
                  <Button 
                    variant="contained" 
                    color="primary"
                    sx={{
                      textTransform: 'capitalize',
                      borderRadius: '8px',
                      m: '0 5px',
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </Link>

                <Link href={client.projectsUrl} className="text-decoration-none">
                  <Button 
                    variant="contained" 
                    color="secondary"
                    sx={{
                      textTransform: 'capitalize',
                      borderRadius: '8px',
                      m: '0 5px',
                      color: "#fff !important",
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
                  <Typography color="#A9A9C8" mb={1}>
                    Location
                  </Typography>
                  <Typography fontWeight="500" fontSize="15px">
                    {client.location}
                  </Typography>
                </Box>

                <Box>
                  <Typography color="#A9A9C8" mb={1}>
                    Phone
                  </Typography>
                  <Typography fontWeight="500" fontSize="15px">
                    {client.phone}
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
