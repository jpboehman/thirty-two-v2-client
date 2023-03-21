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
    title: "Dashboard",
    path: "/",
    icon: <GridViewIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "eCommerce",
        path: "/ecommerce/",
      },
      {
        title: "Analytics",
        path: "/analytics/",
      },
      {
        title: "Project Management",
        path: "/project-management/",
      },
      {
        title: "LMS Courses",
        path: "/lms-courses/",
      },
    ],
  },
  {
    title: "Apps",
    path: "/apps/file-manager/",
    icon: <LayersIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "File Manager",
        path: "/apps/file-manager/",
      },
      {
        title: "Chat",
        path: "/apps/chat/",
      },
      {
        title: "To Do",
        path: "/apps/to-do/",
      },
      {
        title: "Calendar",
        path: "/apps/calendar/",
      },
    ],
  },
  {
    title: "Email",
    path: "/email/inbox/",
    icon: <MailOutlineIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Inbox",
        path: "/email/inbox/",
      },
      {
        title: "Read Email",
        path: "/email/read-email/",
      },
    ],
  },
  {
    title: "Contact List",
    path: "/contact-list/",
    icon: <PostAddIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Contact List",
        path: "/contact-list/",
      },
      {
        title: "Members Grid",
        path: "/contact-list/contact-list2/",
      },
      {
        title: "Members List",
        path: "/contact-list/members-list/",
      },
      {
        title: "Profile",
        path: "/contact-list/profile/",
      },
    ],
  },
  {
    title: "Projects",
    path: "/projects/",
    icon: <CopyAllIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Projects",
        path: "/projects/",
      },
      {
        title: "Project Create",
        path: "/projects/project-create/",
      },
      {
        title: "Clients",
        path: "/projects/clients/",
      },
      {
        title: "Team",
        path: "/projects/team/",
      },
      {
        title: "Task",
        path: "/projects/task/",
      },
      {
        title: "User",
        path: "/projects/user/",
      },
      {
        title: "Kanban board",
        path: "/projects/kanban-board/",
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
    title: "eCommerce",
    path: "/ecommerce/products/",
    icon: <ShoppingCartCheckoutIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Products",
        path: "/ecommerce/products/",
      },
      {
        title: "Product Details",
        path: "/ecommerce/product-details/",
      },
      {
        title: "Create Product",
        path: "/ecommerce/create-product/",
      },
      {
        title: "Orders List",
        path: "/ecommerce/orders-list/",
      },
      {
        title: "Order Details",
        path: "/ecommerce/order-details/",
      },
      {
        title: "Customers",
        path: "/ecommerce/customers/",
      },
      {
        title: "Cart",
        path: "/ecommerce/cart/",
      },
      {
        title: "Checkout",
        path: "/ecommerce/checkout/",
      },
      {
        title: "Sellers",
        path: "/ecommerce/sellers/",
      },
    ],
  },
  {
    title: "UI Elements",
    path: "/ui-elements/alerts/",
    icon: <ViewQuiltIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Alerts",
        path: "/ui-elements/alerts/",
      },
      {
        title: "Autocomplete",
        path: "/ui-elements/autocomplete/",
      },
      {
        title: "Avatar",
        path: "/ui-elements/avatar/",
      },
      {
        title: "Badge",
        path: "/ui-elements/badge/",
      },
      {
        title: "Buttons",
        path: "/ui-elements/buttons/",
      },
      {
        title: "Cards",
        path: "/ui-elements/cards/",
      },
      {
        title: "Checkbox",
        path: "/ui-elements/checkbox/",
      },
      {
        title: "Swiper Slider",
        path: "/ui-elements/swiper-slider/",
      },
      {
        title: "Radio",
        path: "/ui-elements/radio/",
      },
      {
        title: "Rating",
        path: "/ui-elements/rating/",
      },
      {
        title: "Select",
        path: "/ui-elements/select/",
      },
      {
        title: "Slider",
        path: "/ui-elements/slider/",
      },
      {
        title: "Switch",
        path: "/ui-elements/switch/",
      },
      {
        title: "Chip",
        path: "/ui-elements/chip/",
      },
      {
        title: "List",
        path: "/ui-elements/list/",
      },
      {
        title: "Modal",
        path: "/ui-elements/modal/",
      },
      {
        title: "Table",
        path: "/ui-elements/table/",
      },
      {
        title: "Tooltip",
        path: "/ui-elements/tooltip/",
      },
      {
        title: "Progress",
        path: "/ui-elements/progress/",
      },
      {
        title: "Skeleton",
        path: "/ui-elements/skeleton/",
      },
      {
        title: "Snackbar",
        path: "/ui-elements/snackbar/",
      },
      {
        title: "Accordion",
        path: "/ui-elements/accordion/",
      },
      {
        title: "Pagination",
        path: "/ui-elements/pagination/",
      },
      {
        title: "Stepper",
        path: "/ui-elements/stepper/",
      },
      {
        title: "Tabs",
        path: "/ui-elements/tabs/",
      },
      {
        title: "Image List",
        path: "/ui-elements/image-list/",
      },
      {
        title: "Transitions",
        path: "/ui-elements/transitions/",
      },
    ],
  },
  {
    title: "Forms",
    path: "/forms/form-layouts/",
    icon: <CheckBoxOutlineBlankIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Basic Elements",
        path: "/forms/form-layouts/",
      },
      {
        title: "Advanced Elements",
        path: "/forms/advanced-elements/",
      },
      {
        title: "Editors",
        path: "/forms/editors/",
      },
      {
        title: "File Uploader",
        path: "/forms/file-uploader/",
      },
    ],
  },
  {
    title: "Pages",
    path: "/pages/invoice/",
    icon: <ContentCopyIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Invoice",
        path: "/pages/invoice/",
      },
      {
        title: "Invoice Details",
        path: "/pages/invoice-details/",
      },
      {
        title: "ApexCharts",
        path: "/pages/apexcharts/",
      },
      {
        title: "Recharts",
        path: "/pages/recharts/",
      },
      {
        title: "Profile",
        path: "/pages/profile/",
      },
      {
        title: "Pricing",
        path: "/pages/pricing/",
      },
      {
        title: "Testimonials",
        path: "/pages/testimonials/",
      },
      {
        title: "Timeline",
        path: "/pages/timeline/",
      },
      {
        title: "FAQ",
        path: "/pages/faq/",
      },
      {
        title: "Gallery",
        path: "/pages/gallery/",
      },
      {
        title: "Support",
        path: "/pages/support/",
      },
      {
        title: "Search",
        path: "/pages/search/",
      },
      {
        title: "Material Icons",
        path: "/pages/material-icons/",
      },
      {
        title: "Remixicon",
        path: "/pages/remixicon/",
      },
      {
        title: "Maps",
        path: "/pages/maps/",
      },
      {
        title: "404 Error Page",
        path: "/404/",
      },
      {
        title: "Terms & Conditions",
        path: "/pages/terms-conditions/",
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
    title: "Notification",
    path: "/notification/",
    icon: <NotificationsNoneIcon />,
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
