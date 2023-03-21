import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

function createData(name, icon, owner, fileSize, listedDate, fileItem) {
  return { name, icon, owner, fileSize, listedDate, fileItem };
}

const rows = [
  createData(
    "Product UI/UX Design",
    "/images/folder.png",
    "Danielle Thompson",
    "0.7 GB",
    "Mar 08, 2021",
    "02"
  ),
  createData(
    "App Design & Development",
    "/images/folder.png",
    "ET Themes",
    "521 MB",
    "Feb 13, 2021",
    "01"
  ),
  createData(
    "Ubold Sketch Design",
    "/images/folder.png",
    "Gary Coley",
    "64.2 MB",
    "Dec 18, 2020",
    "02"
  ),
  createData(
    "Annualreport.pdf",
    "/images/folder.png",
    "Cooper Sharwood",
    "12.5 GB",
    "Nov 25, 2020",
    "05"
  ),
  createData(
    "Wireframes",
    "/images/folder.png",
    "Jasper Rigg",
    "8.3 MB",
    "Nov 25, 2019",
    "03"
  ),
  createData(
    "App Design",
    "/images/folder.png",
    "ET Agency",
    "5 GB",
    "Jan 08, 2022",
    "15"
  ),
  createData(
    "Web Design & Development",
    "/images/folder.png",
    "ET Templates",
    "13 GB",
    "Jan 13, 2022",
    "90"
  ),
  createData(
    "React Template",
    "/images/folder.png",
    "ET Company",
    "100 GB",
    "Dec 18, 2021",
    "120"
  ),
  createData(
    "Material Template",
    "/images/folder.png",
    "Cooper Sharwood",
    "12.5 GB",
    "Nov 25, 2020",
    "05"
  ),
  createData(
    "Angular Template",
    "/images/folder.png",
    "Jasper Rigg",
    "8.3 MB",
    "Nov 25, 2019",
    "03"
  ),
];

const TemplateFiles = () => {
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
            Templates
          </Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            maxHeight: "650px",
            overflowY: "auto",
          }}
        >
          <Table 
            sx={{ minWidth: 800 }} 
            aria-label="simple table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Name
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Owner
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  File Size
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Listed Date
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  File Item
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ borderBottom: "1px solid #F7FAFF" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img src={row.icon} alt="Image" width="22px" />
                      <Typography
                        as="h5"
                        fontWeight="500"
                        fontSize="13px"
                        className="ml-1"
                      >
                        {row.name}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                  >
                    {row.owner}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                  >
                    {row.fileSize}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                  >
                    {row.listedDate}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                  >
                    {row.fileItem}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{ borderBottom: "1px solid #F7FAFF" }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                      }}
                    >
                      <Tooltip title="Remove" placement="top">
                        <IconButton
                          aria-label="remove"
                          size="small"
                          color="danger"
                          className="danger"
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Download" placement="top">
                        <IconButton
                          aria-label="download"
                          size="small"
                          color="success"
                          className="success"
                        >
                          <CloudDownloadIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Rename" placement="top">
                        <IconButton
                          aria-label="rename"
                          size="small"
                          color="primary"
                          className="primary"
                        >
                          <DriveFileRenameOutlineIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default TemplateFiles;
