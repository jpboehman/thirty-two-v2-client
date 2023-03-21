import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

export default function ConfirmMail() {
  return (
    <>
      <div className="authenticationBox">
        <Box
          component="main"
          sx={{
            padding: "70px 0 100px",
          }}
        >
          <Box
            sx={{
              background: "#fff",
              padding: "30px 20px",
              borderRadius: "10px",
              maxWidth: "510px",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
            className="bg-black"
          >
            <Box>
              <img src="/images/logo.png" alt="Black logo" className="black-logo" />
              <img src="/images/logo-white.png" alt="White logo" className="white-logo" />
            </Box>

            <Box mt={4} mb={4}>
              <img src="/images/message.png" alt="Message" />
            </Box>

            <Typography as="h1" fontSize="20px" fontWeight="500" mb={1}>
              Success!
            </Typography>
            <Typography>
              A email has been send to{" "}
              <a
                href="mailto:envytheme@info.com"
                className="primaryColor text-decoration-none"
              >
                envytheme@info.com
              </a>
              . Please check for an email from company and click on the included
              link to reset your password.
            </Typography>

            <Button
              href="/"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                textTransform: "capitalize",
                borderRadius: "8px",
                fontWeight: "500",
                fontSize: "16px",
                padding: "12px 10px",
                color: "#fff !important"
              }}
            >
              Back To Home
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
}
