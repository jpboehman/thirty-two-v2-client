import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import styles from "@/components/Email/LeftSidebar.module.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

// Compose Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Compose Modal

const LeftSidebar = () => {
  const router = useRouter();

  // Compose modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  // End Compose Modal

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          p: "25px 20px",
          mb: "15px",
        }}
      >
        <Button
          onClick={handleClickOpen}
          variant="contained"
          fullWidth
          sx={{
            textTransform: "capitalize",
            borderRadius: "8px",
            fontWeight: "500",
            fontSize: "14px",
            padding: "12px 20px",
            mb: "30px",
            color: "#fff !important"
          }}
        >
          Compose
        </Button>

        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "13px",
            color: "#A9A9C8",
            mb: "10px",
          }}
        >
          mailbox
        </Typography>

        {/* Nav */}
        <ul className={styles.leftNav}>
          <li
            className={router.pathname == "/email/inbox" ? styles.active : ""}
          >
            <Link href="/email/inbox">
              <span>
                <i className="ri-mail-line"></i> Inbox
              </span>
              <Badge
                badgeContent={4}
                color="primary"
                sx={{
                  position: "relative",
                  top: "15px",
                }}
                className="float-right right-10px for-dark-text-white"
              ></Badge>
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.FormDataactive : ""}>
            <Link href="#">
              <i className="ri-star-fill"></i> Important
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <i className="ri-time-line"></i> Snooozed
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <i className="ri-file-text-line"></i> Draft
              <Badge
                badgeContent={4}
                color="info"
                sx={{
                  position: "relative",
                  top: "15px",
                }}
                className="float-right right-10px for-dark-text-white"
              ></Badge>
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <i className="ri-send-plane-2-line"></i> Sent Mail
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <i className="ri-error-warning-line"></i> Spam
              <Badge
                badgeContent={4}
                color="danger"
                sx={{
                  position: "relative",
                  top: "15px",
                  color: "#fff",
                }}
                className="float-right right-10px for-dark-text-white"
              ></Badge>
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <i className="ri-delete-bin-line"></i> Trash
            </Link>
          </li>
        </ul>

        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "13px",
            color: "#A9A9C8",
            mb: "10px",
          }}
        >
          labels
        </Typography>

        {/* Nav */}
        <ul className={styles.leftNav}>
          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <span>
                <i className="ri-price-tag-3-line"></i> Personal
              </span>
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <i className="ri-price-tag-3-line"></i> Company
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <i className="ri-price-tag-3-line"></i> Wallet Balance
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <i className="ri-price-tag-3-line"></i> Friends
            </Link>
          </li>

          <li className={router.pathname == "#" ? styles.active : ""}>
            <Link href="#">
              <i className="ri-price-tag-3-line"></i> Family
            </Link>
          </li>
        </ul>
      </Card>

      {/* Compose Modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#EDEFF5",
              borderRadius: "8px",
              padding: "15px 20px",
            }}
            className="bg-black"
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              New Message
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
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="to"
                    name="to"
                    required
                    fullWidth
                    id="to"
                    label="To"
                    autoFocus
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="subject"
                    name="subject"
                    required
                    fullWidth
                    id="subject"
                    label="Subject"
                    autoFocus
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <RichTextEditor
                    id="rte"
                    controls={[
                      ["bold", "italic", "underline", "link", "image"],
                      ["unorderedList", "h1", "h2", "h3"],
                      ["sup", "sub"],
                      ["alignLeft", "alignCenter", "alignRight"],
                    ]}
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
                      color: "#fff !important"
                    }}
                  >
                    <SendIcon
                      sx={{
                        position: "relative",
                        top: "-2px",
                      }}
                      className="mr-5px"
                    />{" "}
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
};

export default LeftSidebar;
