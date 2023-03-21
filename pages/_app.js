import React from 'react';
import '../styles/remixicon.css'
import 'react-tabs/style/react-tabs.css';
import "swiper/css";
import "swiper/css/bundle";

// Chat Styles
import '../styles/chat.css'
// Globals Styles
import '../styles/globals.css'
// Rtl Styles
import '../styles/rtl.css'
// Dark Mode Styles
import '../styles/dark.css'
// Left Sidebar Dark Mode Styles
import '../styles/leftSidebarDark.css'
// Theme Styles
import theme from '../styles/theme'

import { ThemeProvider, CssBaseline } from "@mui/material";
import Layout from "@/components/_App/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp
