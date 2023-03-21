import React from "react";
import Button from '@mui/material/Button';
import styles from "@/components/_App/ControlPanelModal/RTLSwitch.module.css";

const RTLSwitch = () => {
  return (
    <>
      <div className={styles.darkModeBox}>
        <h3>LTR/RTL Demos</h3>

        <div className="lang-sidebar">
          <Button 
            variant="contained"
            sx={{
              textTransform: 'capitalize'
            }}
            className="whiteColor mr-10px"
            href="/"
          >
            Switch to LTR
          </Button>

          <Button 
            variant="contained"
            color="secondary"
            sx={{
              textTransform: 'capitalize'
            }}
            className="whiteColor"
            href="/ar"
          >
            Switch to RTL
          </Button>
        </div>
      </div>
    </>
  );
};

export default RTLSwitch;
