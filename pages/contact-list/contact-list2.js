import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import styles from '@/styles/PageTitle.module.css'
import Link from 'next/link';

const contactLists = [
  {
    image: '/images/member1.png',
    name: 'Alvarado Turner',
    designation: 'React Developer',
    phonNumber: '+9003526765',
    email: 'alvarado@gmail.com',
  },
  {
    image: '/images/member2.png',
    name: 'Evangelina Mcclain',
    designation: 'Angular Developer',
    phonNumber: '+9003526765',
    email: 'evangelina@gmail.com',
  },
  {
    image: '/images/member3.png',
    name: 'Candice Munoz',
    designation: 'Vue Developer',
    phonNumber: '+9003526766',
    email: 'candice@gmail.com',
  },
  {
    image: '/images/member4.png',
    name: 'Bernard Langley',
    designation: 'UI/UX Designer',
    phonNumber: '+9003526767',
    email: 'bernard@gmail.com',
  },
  {
    image: '/images/member5.png',
    name: 'Kristie Hall',
    designation: 'Software Analyst',
    phonNumber: '+9003526846',
    email: 'kristie@gmail.com',
  },
  {
    image: '/images/member6.png',
    name: 'Bolton Obrien',
    designation: 'Support Engineer',
    phonNumber: '+9003526865',
    email: 'bolton@gmail.com',
  },
  {
    image: '/images/member7.png',
    name: 'Dee Alvarado',
    designation: 'SEO Specialist',
    phonNumber: '+9003526456',
    email: 'alvarado@gmail.com',
  },
  {
    image: '/images/member8.png',
    name: 'Cervantes Kramer',
    designation: 'Product Designer',
    phonNumber: '+9003526456',
    email: 'cervantes@gmail.com',
  },
  {
    image: '/images/member9.png',
    name: 'Dejesus Michael',
    designation: 'Content Writer',
    email: 'dejesus@gmail.com',
    phonNumber: '+9003526456',
  },
  {
    image: '/images/member10.png',
    name: 'Alissa Nelson',
    designation: 'Theme Developer',
    email: 'alissa@gmail.com',
    phonNumber: '+9003526355',
  },
  {
    image: '/images/member11.png',
    name: 'English Haney',
    designation: 'Digital Marketing Executive',
    email: 'english@gmail.com',
    phonNumber: '+9003526456',
  },
  {
    image: '/images/member12.png',
    name: 'Edwards Mckenzie',
    designation: 'Support Engineer',
    email: 'edwards@gmail.com',
    phonNumber: '+9003526456',
  },
];

export default function ContactList2() {
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
              <Box>
                <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1}>
                  <Tooltip title="Delete" arrow placement="top">
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon 
                        fontSize="inherit" 
                        sx={{
                          color: '#A9A9C8',
                        }}
                      />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Edit" arrow placement="top">
                    <IconButton aria-label="edit" size="small">
                      <EditIcon 
                        fontSize="inherit" 
                        sx={{
                          color: '#A9A9C8',
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>

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
                as="h4"
                sx={{
                  fontSize: 13,
                  color: '#A9A9C8',
                  mb: 2,
                }}
              >
                {contactList.designation}
              </Typography>
  
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
                  <CallIcon 
                    sx={{
                      color: '#A9A9C8',
                      mb: '3px'
                    }}
                  />
                  <Typography fontWeight="500" fontSize="13px">
                    {contactList.phonNumber}
                  </Typography>
                </Box>

                <Box>
                  <MailOutlineIcon 
                    sx={{
                      color: '#A9A9C8',
                      mb: '3px'
                    }}
                  />
                  <Typography fontWeight="500" fontSize="13px">
                    {contactList.email}
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
