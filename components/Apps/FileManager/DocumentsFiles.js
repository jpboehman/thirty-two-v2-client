import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

// Create Files Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};

const FilesData = [
  {
    id: "1",
    icon: "/images/file1.png",
    title: "sketch-design.zip",
  },
  {
    id: "2",
    icon: "/images/file2.png",
    title: "Compile.png",
  },
  {
    id: "3",
    icon: "/images/file3.png",
    title: "Integrations.pdf",
  },
  {
    id: "4",
    icon: "/images/file4.png",
    title: "contact @32",
  },
  {
    id: "5",
    icon: "/images/file5.png",
    title: "app-Design.doc",
  },
  {
    id: "6",
    icon: "/images/file6.png",
    title: "image02.png",
  },
  {
    id: "7",
    icon: "/images/file7.png",
    title: "Ubold-sketch.doc",
  },
  {
    id: "8",
    icon: "/images/file8.png",
    title: "Annualreport.txt",
  },
  {
    id: "9",
    icon: "/images/file9.png",
    title: "Wireframes.xl4",
  },
  {
    id: "10",
    icon: "/images/file10.png",
    title: "contact @32.jpg",
  },
  {
    id: "11",
    icon: "/images/file1.png",
    title: "sketch-design.zip",
  },
  {
    id: "12",
    icon: "/images/file2.png",
    title: "Compile.png",
  },
  {
    id: "13",
    icon: "/images/file3.png",
    title: "Integrations.pdf",
  },
  {
    id: "14",
    icon: "/images/file4.png",
    title: "contact @32",
  },
  {
    id: "15",
    icon: "/images/file5.png",
    title: "app-Design.doc",
  },
  {
    id: "16",
    icon: "/images/file6.png",
    title: "image02.png",
  },
  {
    id: "17",
    icon: "/images/file7.png",
    title: "Ubold-sketch.doc",
  },
  {
    id: "18",
    icon: "/images/file8.png",
    title: "Annualreport.txt",
  },
  {
    id: "19",
    icon: "/images/file9.png",
    title: "Wireframes.xl4",
  },
  {
    id: "20",
    icon: "/images/file10.png",
    title: "contact @32.jpg",
  },
  {
    id: "21",
    icon: "/images/file5.png",
    title: "app-Design.doc",
  },
  {
    id: "22",
    icon: "/images/file6.png",
    title: "image02.png",
  },
  {
    id: "23",
    icon: "/images/file7.png",
    title: "Ubold-sketch.doc",
  },
  {
    id: "24",
    icon: "/images/file8.png",
    title: "Annualreport.txt",
  },
];

const DocumentsFiles = () => {
  // Create Files Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Form
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Documents
          </Typography>

          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{
              mt: 1,
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "12px 20px",
              color: "#fff !important",
            }}
          >
            <AddIcon
              sx={{ position: "relative", top: "-1px" }}
              className="mr-5px"
            />{" "}
            Create Files
          </Button>
        </Box>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
          justifyContent="center"
        >
          {FilesData.map((file) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={2} key={file.id}>
              <Box
                sx={{
                  background: "#F3F6F9",
                  borderRadius: "10px",
                  padding: "40px 5px",
                  textAlign: "center",
                }}
                className="dark-BG-101010"
              >
                <img src={file.icon} alt="Icon" width="56px" height="56px" />
                <Typography mt={1} fontWeight="500" fontSize="13px">
                  {file.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>

      {/* Create Files Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="dark-BG-101010">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#EDEFF5",
                borderRadius: "8px",
                padding: "25px 20px",
              }}
              className="bg-black"
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Create Folder
              </Typography>

              <IconButton
                aria-label="remove"
                size="small"
                onClick={handleClose}
                className="modal-close"
              >
                <ClearIcon />
              </IconButton>
            </Box>

            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  background: "#fff",
                  padding: "30px 20px",
                  borderRadius: "8px",
                }}
                className="dark-BG-101010"
              >
                <Grid container alignItems="center" spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Files Name
                    </Typography>

                    <TextField
                      autoComplete="given-name"
                      name="filesName"
                      required
                      fullWidth
                      id="filesName"
                      label="Files Name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} textAlign="end">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 1,
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: "13px",
                        padding: "12px 20px",
                        color: "#fff !important",
                      }}
                    >
                      <AddIcon
                        sx={{
                          position: "relative",
                          top: "-2px",
                        }}
                        className="mr-5px"
                      />{" "}
                      Add Files
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default DocumentsFiles;
