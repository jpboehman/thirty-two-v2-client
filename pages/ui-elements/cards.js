import React from 'react';
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Link from 'next/link';
import styles from '@/components/UIElements/Cards/Cards.module.css'
import BasicCard from '@/components/UIElements/Cards/BasicCard';
import ComplexInteraction from '@/components/UIElements/Cards/ComplexInteraction';
import Media from '@/components/UIElements/Cards/Media';
import UIControls from '@/components/UIElements/Cards/UIControls';

export default function Cards() {
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={6} lg={6} xl={3}>
          {/* BasicCard */}
          <BasicCard />

          {/* Start Card */}
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Box
              mb="15px"
            >
              <Button 
                sx={{
                  background: 'rgba(117, 127, 239, 0.2)',
                  border: '1px solid rgba(117, 127, 239, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Primary
              </Button>

              <Button 
                sx={{
                  background: 'rgba(0, 182, 155, 0.2)',
                  border: '1px solid rgba(0, 182, 155, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Success
              </Button>
            </Box>

            <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
              Nesta Technologies
            </Typography>

            <Typography>
              When you enter into any new area of science, you almost always find.
            </Typography>
            
            <Link href="#" className='text-decoration-none'>
              <Button 
                sx={{
                  background: '#EDEFF5',
                  border: '1px solid #EDEFF5',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  mt: '15px',
                  fontWeight: '500'
                }}
                color="primary"
              >
                View Details
              </Button>
            </Link>
          </Card>
          {/* End Card */}
          
          {/* Start Card */}
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Box
              mb="20px"
            >
              <Button 
                sx={{
                  background: 'rgba(117, 127, 239, 0.2)',
                  border: '1px solid rgba(117, 127, 239, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Primary
              </Button>

              <Button 
                sx={{
                  background: 'rgba(0, 182, 155, 0.2)',
                  border: '1px solid rgba(0, 182, 155, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Success
              </Button>

              <Button 
                sx={{
                  background: 'rgba(255, 188, 43, 0.2)',
                  border: '1px solid rgba(255, 188, 43, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Warning
              </Button>
            </Box>

            <img 
              src="/images/card-img1.png" 
              alt="card" 
              style={{
                borderRadius: '10px',
                marginBottom: '12px'
              }}
            />

            <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
              Nesta Technologies
            </Typography>

            <Typography>
              When you enter into any new area of science, you almost always find.
            </Typography>
            
            <Link href="#" className='text-decoration-none'>
              <Button 
                sx={{
                  background: '#EDEFF5',
                  border: '1px solid #EDEFF5',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  mt: '15px',
                  fontWeight: '500'
                }}
                color="primary"
              >
                View Details
              </Button>
            </Link>
          </Card>
          {/* End Card */}
 
          {/* Start Card */}
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Box
              mb="15px"
            >
              <Button 
                sx={{
                  background: 'rgba(117, 127, 239, 0.2)',
                  border: '1px solid rgba(117, 127, 239, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Primary
              </Button>

              <Button 
                sx={{
                  background: 'rgba(255, 188, 43, 0.2)',
                  border: '1px solid rgba(255, 188, 43, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Warning
              </Button>
            </Box>

            <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
              Nesta Technologies
            </Typography>

            <Typography>
              When you enter into any new area of science, you almost always find.
            </Typography>
            
            <Link href="#" className='text-decoration-none'>
              <Button 
                sx={{
                  background: '#EDEFF5',
                  border: '1px solid #EDEFF5',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  mt: '15px',
                  fontWeight: '500'
                }}
                color="primary"
              >
                View Details
              </Button>
            </Link>
          </Card>
          {/* End Card */}
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={3}>
        {/* ComplexInteraction */}
          <ComplexInteraction />

          {/* Start Card */}
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Box
              mb="15px"
            >
              <Button 
                sx={{
                  background: 'rgba(117, 127, 239, 0.2)',
                  border: '1px solid rgba(117, 127, 239, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Primary
              </Button>

              <Button 
                sx={{
                  background: 'rgba(255, 188, 43, 0.2)',
                  border: '1px solid rgba(255, 188, 43, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-10px"
              >
                Warning
              </Button>
            </Box>

            <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
              Nesta Technologies
            </Typography>

            <Typography>
              When you enter into any new area of science, you almost always find.
            </Typography>
            
            <Link href="#" className='text-decoration-none'>
              <Button 
                sx={{
                  background: '#EDEFF5',
                  border: '1px solid #EDEFF5',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  mt: '15px',
                  fontWeight: '500'
                }}
                color="primary"
              >
                View Details
              </Button>
            </Link>
          </Card>
          {/* End Card */}
          
          {/* Start Card */}
          <div 
            className={styles.cardWithBgImg}
            style={{
              backgroundImage: `url('/images/card-img2.png')`
            }}
          >
            <Box
              sx={{
                position: "relative"
              }}
            >
              <Box
                sx={{
                  mb: "15px",
                  position: "relative"
                }}
              >
                <Button 
                  sx={{
                    borderRadius: '4px',
                    textTransform: 'capitalize',
                    p: '5px 15px',
                    fontSize: '11px'
                  }}
                  variant="contained"
                  color="primary"
                  className="mr-5px"
                >
                  Primary
                </Button>

                <Button 
                  sx={{
                    borderRadius: '4px',
                    color: '#fff',
                    textTransform: 'capitalize',
                    p: '5px 15px',
                    fontSize: '11px'
                  }}
                  variant="contained"
                  color="success"
                  className="mr-10px"
                >
                  Success
                </Button>

                <Button 
                  sx={{
                    borderRadius: '4px',
                    color: '#fff',
                    textTransform: 'capitalize',
                    p: '5px 15px',
                    fontSize: '11px'
                  }}
                  variant="contained"
                  color="warning"
                  className="mr-10px"
                >
                  Warning
                </Button>
              </Box>

              <Typography as="h3" fontWeight="500" fontSize="16px" mb="10px" mt="250px" color="white">
                Nesta Technologies
              </Typography>

              <Typography color="white">
                When you enter into any new area of science, you almost always find.
              </Typography>
            </Box>
          </div>
          {/* End Card */}
        
          {/* Start Card */}
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Box
              mb="15px"
            >
              <Button 
                sx={{
                  background: 'rgba(117, 127, 239, 0.2)',
                  border: '1px solid rgba(117, 127, 239, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Primary
              </Button>

              <Button 
                sx={{
                  background: 'rgba(255, 188, 43, 0.2)',
                  border: '1px solid rgba(255, 188, 43, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-10px"
              >
                Warning
              </Button>
            </Box>

            <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
              Nesta Technologies
            </Typography>

            <Typography>
              When you enter into any new area of science, you almost always find.
            </Typography>
            
            <Link href="#" className='text-decoration-none'>
              <Button 
                sx={{
                  background: '#EDEFF5',
                  border: '1px solid #EDEFF5',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  mt: '15px',
                  fontWeight: '500'
                }}
                color="primary"
              >
                View Details
              </Button>
            </Link>
          </Card>
          {/* End Card */}
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={3}>

          {/* Media */}
          <Media />

          {/* Start Card */}
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Box
              mb="20px"
            >
              <Button 
                sx={{
                  background: 'rgba(117, 127, 239, 0.2)',
                  border: '1px solid rgba(117, 127, 239, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Primary
              </Button>

              <Button 
                sx={{
                  background: 'rgba(0, 182, 155, 0.2)',
                  border: '1px solid rgba(0, 182, 155, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Success
              </Button>

              <Button 
                sx={{
                  background: 'rgba(255, 188, 43, 0.2)',
                  border: '1px solid rgba(255, 188, 43, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Warning
              </Button>
            </Box>

            <img 
              src="/images/card-img3.png" 
              alt="card" 
              style={{
                borderRadius: '10px',
                marginBottom: '12px'
              }}
            />

            <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
              Nesta Technologies
            </Typography>

            <Typography>
              When you enter into any new area of science, you almost always find.
            </Typography>
            
            <Link href="#" className='text-decoration-none'>
              <Button 
                sx={{
                  background: '#EDEFF5',
                  border: '1px solid #EDEFF5',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  mt: '15px',
                  fontWeight: '500'
                }}
                color="primary"
              >
                View Details
              </Button>
            </Link>
          </Card>
          {/* End Card */}

          {/* Start Card */}
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Box
              mb="20px"
            >
              <Button 
                sx={{
                  background: 'rgba(117, 127, 239, 0.2)',
                  border: '1px solid rgba(117, 127, 239, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Primary
              </Button>

              <Button 
                sx={{
                  background: 'rgba(0, 182, 155, 0.2)',
                  border: '1px solid rgba(0, 182, 155, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Success
              </Button>

              <Button 
                sx={{
                  background: 'rgba(255, 188, 43, 0.2)',
                  border: '1px solid rgba(255, 188, 43, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Warning
              </Button>
            </Box>
  
            <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
              Nesta Technologies
            </Typography>

            <Typography>
              When you enter into any new area of science, you almost always find.
            </Typography>
            
            <Link href="#" className='text-decoration-none'>
              <Button 
                sx={{
                  background: '#EDEFF5',
                  border: '1px solid #EDEFF5',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  mt: '15px',
                  fontWeight: '500'
                }}
                color="primary"
              >
                View Details
              </Button>
            </Link>
          </Card>
          {/* End Card */}

          {/* Start Card */}
          <div 
            className={styles.cardWithBgImg}
            style={{
              backgroundImage: `url('/images/card-img4.png')`
            }}
          >
            <Box
              sx={{
                position: "relative"
              }}
            >
              <Box
                sx={{
                  mb: "15px",
                  position: "relative"
                }}
              >
                <Button 
                  sx={{
                    borderRadius: '4px',
                    textTransform: 'capitalize',
                    p: '5px 15px',
                    fontSize: '11px'
                  }}
                  variant="contained"
                  color="primary"
                  className="mr-5px"
                >
                  Primary
                </Button>

                <Button 
                  sx={{
                    borderRadius: '4px',
                    color: '#fff',
                    textTransform: 'capitalize',
                    p: '5px 15px',
                    fontSize: '11px'
                  }}
                  variant="contained"
                  color="success"
                  className="mr-10px"
                >
                  Success
                </Button>

                <Button 
                  sx={{
                    borderRadius: '4px',
                    color: '#fff',
                    textTransform: 'capitalize',
                    p: '5px 15px',
                    fontSize: '11px'
                  }}
                  variant="contained"
                  color="warning"
                  className="mr-10px"
                >
                  Warning
                </Button>
              </Box>

              <Typography as="h3" fontWeight="500" fontSize="16px" mb="10px" mt="70px" color="white">
                Nesta Technologies
              </Typography>

              <Typography color="white">
                When you enter into any new area of science, you almost always find.
              </Typography>
            </Box>
          </div>
          {/* End Card */}
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={3}>
          {/* UIControls */}
          <UIControls />

          {/* Start Card */}
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Box
              mb="20px"
            >
              <Button 
                sx={{
                  background: 'rgba(117, 127, 239, 0.2)',
                  border: '1px solid rgba(117, 127, 239, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Primary
              </Button>

              <Button 
                sx={{
                  background: 'rgba(0, 182, 155, 0.2)',
                  border: '1px solid rgba(0, 182, 155, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Success
              </Button>

              <Button 
                sx={{
                  background: 'rgba(255, 188, 43, 0.2)',
                  border: '1px solid rgba(255, 188, 43, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Warning
              </Button>
            </Box>
  
            <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
              Nesta Technologies
            </Typography>

            <Typography>
              When you enter into any new area of science, you almost always find.
            </Typography>
            
            <Link href="#" className='text-decoration-none'>
              <Button 
                sx={{
                  background: '#EDEFF5',
                  border: '1px solid #EDEFF5',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  mt: '15px',
                  fontWeight: '500'
                }}
                color="primary"
              >
                View Details
              </Button>
            </Link>
          </Card>
          {/* End Card */}

          {/* Start Card */}
          <div 
            className={styles.cardWithBgImg}
            style={{
              backgroundImage: `url('/images/card-img5.png')`
            }}
          >
            <Box
              sx={{
                position: "relative"
              }}
            >
              <Box
                sx={{
                  mb: "15px",
                  position: "relative"
                }}
              >
                <Button 
                  sx={{
                    borderRadius: '4px',
                    textTransform: 'capitalize',
                    p: '5px 15px',
                    fontSize: '11px'
                  }}
                  variant="contained"
                  color="primary"
                  className="mr-5px"
                >
                  Primary
                </Button>

                <Button 
                  sx={{
                    borderRadius: '4px',
                    color: '#fff',
                    textTransform: 'capitalize',
                    p: '5px 15px',
                    fontSize: '11px'
                  }}
                  variant="contained"
                  color="success"
                  className="mr-10px"
                >
                  Success
                </Button>

                <Button 
                  sx={{
                    borderRadius: '4px',
                    color: '#fff',
                    textTransform: 'capitalize',
                    p: '5px 15px',
                    fontSize: '11px'
                  }}
                  variant="contained"
                  color="warning"
                  className="mr-10px"
                >
                  Warning
                </Button>
              </Box>

              <Typography as="h3" fontWeight="500" fontSize="16px" mb="10px" mt="250px" color="white">
                Nesta Technologies
              </Typography>

              <Typography color="white">
                When you enter into any new area of science, you almost always find.
              </Typography>
            </Box>
          </div>
          {/* End Card */}
          
          {/* Start Card */}
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "10px",
              p: "25px 20px",
              mb: "15px",
            }}
          >
            <Box
              mb="20px"
            >
              <Button 
                sx={{
                  background: 'rgba(117, 127, 239, 0.2)',
                  border: '1px solid rgba(117, 127, 239, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Primary
              </Button>

              <Button 
                sx={{
                  background: 'rgba(0, 182, 155, 0.2)',
                  border: '1px solid rgba(0, 182, 155, 0.2)',
                  borderRadius: '4px',
                  color: '#260944',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  fontSize: '11px'
                }}
                className="mr-5px"
              >
                Success
              </Button>
            </Box>
  
            <Typography as="h3" fontWeight="500" fontSize="16px" mb="5px">
              Nesta Technologies
            </Typography>

            <Typography>
              When you enter into any new area of science, you almost always find.
            </Typography>
            
            <Link href="#" className='text-decoration-none'>
              <Button 
                sx={{
                  background: '#EDEFF5',
                  border: '1px solid #EDEFF5',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  p: '5px 15px',
                  mt: '15px',
                  fontWeight: '500'
                }}
                color="primary"
              >
                View Details
              </Button>
            </Link>
          </Card>
          {/* End Card */}
        </Grid>
      </Grid>
    </>
  );
}
