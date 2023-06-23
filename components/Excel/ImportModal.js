import React, { useState } from "react";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import BootstrapDialog from "@/components/Modals/ModalBootstraps";
import ExcelUploader from "@/components/Excel/ExcelUploader";

const ImportModal = ({ open, onClose, onUpload }) => {
  const handleIsImportModalClose = () => {
    onClose();
  };

  const handleUpload = (jsonData) => {
    onUpload(jsonData);
  };

  return (
    <BootstrapDialog
      onClose={handleIsImportModalClose}
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
            padding: "20px 20px",
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
            Upload file
          </Typography>

          <IconButton
            aria-label="Close"
            size="small"
            onClick={handleIsImportModalClose}
            className="modal-close"
          >
            <ClearIcon />
          </IconButton>
        </Box>

        <Box component="form" noValidate>
          <Box
            sx={{
              background: "#fff",
              padding: "20px 20px",
              borderRadius: "8px",
            }}
            className="dark-BG-101010"
          >
            <Grid
              container
              alignItems="center"
              spacing={2}
              columns={[{ field: "name", editable: true }]}
            >
              <Grid item xs={12} md={12} lg={6}>
                <ExcelUploader onUpload={handleUpload} />
              </Grid>

              <Grid item xs={12} textAlign="start">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: 1,
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "13px",
                    padding: "12px 5px",
                    color: "#fff !important",
                  }}
                  onClick={handleIsImportModalClose}
                  className="mr-15px"
                >
                  <ClearIcon
                    sx={{
                      position: "relative",
                      top: "-1px",
                    }}
                    className="mr-3px"
                  />{" "}
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </BootstrapDialog>
  );
};
export default ImportModal;