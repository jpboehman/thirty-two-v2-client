import NavBar from "@/components/Settings/NavBar";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material"; 
import PrivacyPolicyContent from "@/components/Settings/Account/PrivacyPolicyContent";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </Typography>

        {/* NavBar */}
        <NavBar />
        
        {/* PrivacyPolicyContent */}
        <PrivacyPolicyContent />
      </Card>
    </>
  );
}
