import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import styles from "@/components/_App/ControlPanelModal/DarkAndLightMode.module.css";

const OnlyTopNavbarDark = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("topNavbarDarkTheme");
    if (storedPreference === "TopNavbarDark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("topNavbarDarkTheme", isDarkMode ? "TopNavbarDark" : "light");

    // Update the class on the <html> element to apply the selected mode
    const htmlElement = document.querySelector("topnavbardark");
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className={styles.darkModeBox}>
        <h3>Only Top Navbar Dark/Light Mode</h3>

        <Button 
          onClick={handleToggle} 
          variant="contained"
          sx={{
            textTransform: 'capitalize'
          }}
          className="whiteColor"
        >
          Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </>
  );
};

export default OnlyTopNavbarDark;
