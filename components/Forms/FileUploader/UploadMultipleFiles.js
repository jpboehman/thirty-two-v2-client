import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Card from "@mui/material/Card";
import { useDropzone } from "react-dropzone";
import styles from "@/components/Forms/FileUploader/UploadMultipleFiles.module.css";

const FileUploaderMultiple = () => {
  // ** State
  const [files, setFiles] = useState([]);

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
    },
  });

  const renderFilePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <img
          width={38}
          alt={file.name}
          src={URL.createObjectURL(file)}
        />
      );
    } else {
      return <FileCopyIcon />;
    }
  };

  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
  };

  const fileList = files.map((file) => (
    <ListItem 
      key={file.name} 
      sx={{ 
        border: '1px solid #eee',
        justifyContent: 'space-between',
        mt: '10px',
        mb: '10px'
      }}
      className="dark-border"
    >
      <div className={styles.fileDetails}>
        <div className={styles.filePreview}>
          {renderFilePreview(file)}
        </div>
        <div>
          <Typography className={styles.fileName}>
            {file.name}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <ClearIcon />
      </IconButton>
    </ListItem>
  ));

  const handleLinkClick = (event) => {
    event.preventDefault();
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
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
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: "15px",
          }}
        >
          Upload Multiple Files
        </Typography>

        <div {...getRootProps()} className={styles.dropzone}>
          <input {...getInputProps()} />
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "column", "row"],
              alignItems: "center",
            }}
          >
            <img 
              width={300} 
              alt="Upload img" 
              src="/images/slider-img2.jpg" 
              className={styles.thumbImage}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: ["center", "center", "inherit"],
              }}
            >
              <Typography variant="h5" fontWeight="500" mb={1}>
                Drop files here or click to upload.
              </Typography>

              <Typography color="textSecondary">
                Drop files here or click{" "}
                <Link href="/" onClick={handleLinkClick}>
                  browse
                </Link>{" "}
                thorough your machine
              </Typography>
            </Box>
          </Box>
        </div>

        {files.length ? (
          <Fragment>
            <List>{fileList}</List>
            <div className={styles.buttons}>
              <Button
                color="error"
                variant="contained"
                onClick={handleRemoveAllFiles}
                sx={{
                  textTransform: 'capitalize',
                  color: '#fff !important'
                }}
              >
                Remove All
              </Button>
            </div>
          </Fragment>
        ) : null}
      </Card>
    </>
  );
};

export default FileUploaderMultiple;
