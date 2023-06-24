import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
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
    title: "NCAA",
    path: "/pages/our-stats-explained",
    icon: <SchoolIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "NCAA Team EPSS",
        path: "/pages/team-epss/ncaa",
      },
      {
        title: "NCAA Player Grades",
        path: "/pages/player-season-grade-eps/ncaa",
      },
      {
        title: "NCAA Expected Wins",
        path: "/pages/expected-wins/ncaa",
      },
      {
        title: "NCAA Player Game Grades",
        path: "/pages/game-grades-page/ncaa-d1-mens",
      },
    ],
  },
  {
    title: "NBA",
    path: "/pages/our-stats-explained",
    icon: <LayersIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "NBA Team EPSS",
        path: "/pages/team-epss/nba",
      },
      {
        title: "NBA Player Grades",
        path: "/pages/player-season-grade-eps/nba",
      },
      {
        title: "NBA Expected Wins",
        path: "/pages/expected-wins/nba",
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
