import React from 'react';
import {
  Box
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import Link from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

const SidebarNav = styled("nav")(({ theme }) => ({
  background: '#fff',
  boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
  width: '300px',
  padding: '30px 10px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  transition: '350ms',
  zIndex: '10',
  overflowY: 'auto'
}));
 
const SidebarWrap = styled("div")(({ theme }) => ({
  width: '100%'
}));

const Sidebar = ({ toogleActive }) => {
  return (
    <>
      <leftsidebardark>
        <SidebarNav className="LeftSidebarNav">
          <SidebarWrap>
            <Box 
              sx={{ 
                mb: '20px',
                px: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              

              <IconButton 
                onClick={toogleActive} 
                size="small"
                sx={{
                  background: 'rgb(253, 237, 237)',
                  display: { lg: 'none' }
                }}
              >
                <ClearIcon />
              </IconButton>
            </Box>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </leftsidebardark>
    </>
  );
};

export default Sidebar;
