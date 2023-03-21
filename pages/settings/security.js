import NavBar from "@/components/Settings/NavBar";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import ChangePassword from "@/components/Settings/Account/ChangePassword";

export default function Account() {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "5px",  
            mb: "15px",
          }}
          className="for-dark-bottom-border"
        >
          Settings
        </Typography>

        {/* NavBar */}
        <NavBar />
        
        {/* ChangePassword */}
        <ChangePassword />
      </Card>
    </>
  );
}
