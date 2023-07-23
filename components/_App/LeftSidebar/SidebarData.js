import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import InfoIcon from '@mui/icons-material/Info';
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import SchoolIcon from "@mui/icons-material/School";

export const SidebarData = [
  {
    title: "Overview",
    path: "/pages/our-stats-explained",
    icon: <GridViewIcon />,
  },
  {
    title: "About Us",
    path: "/pages/about-us",
    icon: <InfoIcon />,
  },
  {
    title: "NCAA",
    path: "/pages/our-stats-explained",
    icon: <SchoolIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "NCAA Teams",
        path: "/pages/teams/ncaa-d1-mens",
      },
      {
        title: "NCAA League Players",
        path: "/pages/league-players-page/ncaa-d1-mens",
      },
    ],
  },
  {
    title: "NBA",
    path: "/pages/our-stats-explained",
    icon: <SchoolIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "NBA Teams",
        path: "/pages/teams/nba",
      },
      {
        title: "NBA League Players",
        path: "/pages/league-players-page/nba",
      },
    ],
  },
  {
    title: "Sign Up / Sign In",
    path: "/authentication/sign-up/",
    icon: <LockIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Sign Up",
        path: "/authentication/sign-up/",
      },
      {
        title: "Sign In",
        path: "/authentication/sign-in/",
      },
      {
        title: "Forgot Password",
        path: "/authentication/forgot-password/",
      },
      {
        title: "Logout",
        path: "/authentication/logout/",
      },
    ],
  },
  {
    title: "Settings",
    path: "/settings/account/",
    icon: <SettingsIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Account",
        path: "/settings/account/",
      },
      {
        title: "Security",
        path: "/settings/security/",
      },
      {
        title: "Privacy Policy",
        path: "/settings/privacy-policy/",
      },
      {
        title: "Terms & Conditions",
        path: "/pages/terms-conditions/",
      },
      {
        title: "Logout",
        path: "/authentication/logout/",
      },
    ],
  },
  {
    title: "Subscribe",
    path: "/pages/subscribe",
    icon: <SettingsIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
  },
];
