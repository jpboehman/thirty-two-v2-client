import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddchartIcon from "@mui/icons-material/Addchart";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const SidebarData = [
  {
    title: "Overview",
    path: "/",
    icon: <GridViewIcon />,
  },
  {
    title: "NCAA",
    path: "/apps/file-manager/",
    icon: <LayersIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "NCAA Team EPSS",
        path: "/apps/file-manager/",
      },
      {
        title: "NCAA Player Grades",
        path: "/apps/chat/",
      },
      {
        title: "NCAA other",
        path: "/apps/to-do/",
      },
      {
        title: "Calendar",
        path: "/apps/calendar/",
      },
    ],
  },
  {
    title: "Analytics",
    path: "/analytics/customers/",
    icon: <AddchartIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Customers",
        path: "/analytics/customers/",
      },
      {
        title: "Reports",
        path: "/analytics/reports/",
      },
    ],
  },
  {
    title: "Authentication",
    path: "/authentication/sign-in/",
    icon: <LockIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Sign Up",
        path: "/authentication/sign-up/",
      },
      {
        title: "Forgot Password",
        path: "/authentication/forgot-password/",
      },
      {
        title: "Lock Screen",
        path: "/authentication/lock-screen/",
      },
      {
        title: "Confirm Mail",
        path: "/authentication/confirm-mail/",
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
];
