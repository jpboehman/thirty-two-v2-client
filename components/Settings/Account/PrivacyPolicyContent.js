import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import Button from '@mui/material/Button';

export default function PrivacyPolicyContent() {
  return (
    <>
      <Box mb={2}>
        <Box
          sx={{
            borderBottom: '1px solid #eee',
            paddingBottom: '10px',
            marginBottom: '15px'
          }}
          className="for-dark-bottom-border"
        >
          <Typography component="h1" fontWeight="500" fontSize="18px">
            Security: 
          </Typography> 
        </Box>
        
        <Typography component="h1" fontWeight="500" fontSize="15px" mb="5px">
          Two-factor Authentication
        </Typography> 
        
        <Typography fontSize="13px">
          Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.
        </Typography> 
      </Box> 
 
      <Box mb={2}>
        <Typography component="h1" fontWeight="500" fontSize="15px" mb="5px">
          Secondary Verification
        </Typography> 
        
        <Typography fontSize="13px">
          Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.
        </Typography> 
      </Box> 

      <Box mb={2}>
        <Typography component="h1" fontWeight="500" fontSize="15px" mb="5px">
          Backup Codes
        </Typography> 
        
        <Typography fontSize="13px">
          Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.
        </Typography> 
      </Box> 

      <Box mb={2}>
        <Typography component="h1" fontWeight="500" fontSize="15px" mb="5px">
          Desktop, email, chat, purchase notifications
        </Typography> 
        
        <Typography fontSize="13px">
          Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.
        </Typography> 
      </Box> 

      <Box mb={2}>
        <Typography component="h1" fontWeight="500" fontSize="15px" mb="5px">
          Delete this account :
        </Typography> 
        
        <Typography fontSize="13px">
          Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.
        </Typography> 
      </Box>

      <Box mt={3}>
        <Button 
          variant="contained"
          color="danger"
          size="large"
          sx={{
            background: 'rgba(238, 54, 140, 0.1)',
            borderRadius: '8px',
            textTransform: 'capitalize',
          }}
          className="mr-15px"
        >
          close & delete this account
        </Button>

        <Button 
          variant="contained"
          color="danger"
          size="large"
          sx={{
            background: 'rgba(117, 127, 239, 0.1)',
            borderRadius: '8px',
            textTransform: 'capitalize'
          }}
        >
          Cancel
        </Button>
      </Box>
    </> 
  );
}