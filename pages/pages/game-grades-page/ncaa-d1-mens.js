import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import { Box, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ExpectedWinsOverview from "@/components/StatOverviews/expectedWinsOverview";

import { useSelector } from "react-redux";

import BootstrapDialog from "@/components/Modals/ModalBootstraps";

import ExcelUploader from "@/components/Excel/ExcelUploader";

import mapSeasonUrl from "@/utils/expected-wins/NCAAExpectedWinsURLs";

import chosenSeason from "common/seasonOptions";
import SeasonSelectButtons from "@/components/UIElements/Buttons/SeasonSelectButtons";

const columns = [
  { accessorKey: "School", header: "SCHOOL" },
  { accessorKey: "G", header: "G" },
  { accessorKey: "W", header: "W" },
  { accessorKey: "L", header: "L" },
  { accessorKey: "WIN %", header: "WIN %" },
  { accessorKey: "Team EPS", header: "TEAM EPS" },
  { accessorKey: "Opponent EPS", header: "OPPONENT EPS" },
  { accessorKey: "Expected Wins", header: "EXPECTED WINS" },
  { accessorKey: "Actual Wins", header: "ACTUAL WINS" },
  { accessorKey: "Expected Win %", header: "EXPECTED WIN %" },
  { accessorKey: "Actual Win %", header: "ACTUAL WIN %" },
];

const NcaaTeamEpss = () => {
  const [ncaaExpectedWins, setNcaaExpectedWins] = useState([]);
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [selectedSeason, setSelectedSeason] = useState([
    chosenSeason,
    currentUser,
  ]);
  const [seasonUrl, setSeasonUrl] = useState(
    "https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?output=csv"
  );
  // Modals:
  // Modals
  const [open, setOpen] = React.useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = React.useState(false);
  const [uploadedData, setUploadedData] = useState();

  // TableState
  //   const { response, isLoading, isError, errorMessage } = useApi(
  //     `/${userId}/companies`
  //   );
  //   const [tableData, setTableData] = useState(response?.companies);

  //   useEffect(() => {
  //     Papa.parse(`${seasonUrl}`, {
  //       download: true,
  //       header: true,
  //       complete: (results) => {
  //         setNcaaExpectedWins(results.data);
  //       },
  //     });
  //   }, [seasonUrl]);

  // TODO: Tweak this!
  //   useEffect(() => {
  //     if (!tableData && response?.companies?.length > 0) {
  //       // set the columns and tableData
  //       const dynamicColumns = response.companies[0].fields;
  //       const columnHeaders = getColumnHeaders(dynamicColumns);

  //       // Add the new column to the beginning of the columns array
  //       const newColumns = [
  //         {
  //           accessorKey: "companyLink",
  //           header: "",
  //           Cell: ({ row }) => (
  //             <Link href={`/companies/${row.original.documentId}`} passHref>
  //               <InfoIcon />
  //             </Link>
  //           ),
  //         },
  //         ...columnHeaders,
  //       ];

  //       setColumns(newColumns);

  //       setTableData(
  //         response.companies.map((company) => {
  //           const rowData = {};
  //           // Added this and it work
  //           rowData["documentId"] = company._id;
  //           company.fields.forEach((field) => {
  //             rowData[field.name] = field.value;
  //           });
  //           return rowData;
  //         })
  //       );
  //     } else if (response && response.companies.length === 0) {
  //       if (!uploadedData) setIsImportModalOpen(true);
  //     }
  //   }, [response, uploadedData]);

  useEffect(() => {
    const uploadCompanyExcelData = async () => {
      try {
        const { data } = await generalRequest.post(
          `ncaa-d1-mens/upload-game-grades`,
          uploadedData
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (uploadedData) {
      uploadCompanyExcelData();
      setUploadedData(null);
    }
  }, [uploadedData]);

  const handleUpload = (jsonData) => {
    setUploadedData(...jsonData);
  };

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setSeasonUrl(mapSeasonUrl(season));
  };

  const handleIsImportModalClose = () => {
    setIsImportModalOpen(false);
  };

  {
    /* Modal for importing data - move this to separate component */
  }
  <BootstrapDialog
    onClose={handleIsImportModalClose}
    aria-labelledby="customized-dialog-title"
    open={isImportModalOpen}
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
  </BootstrapDialog>;

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>NCAA Expected Wins</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <Grid item xs={12} md={12} lg={6}>
            <ExcelUploader onUpload={handleUpload} />
          </Grid>
        </ul>
      </div>
      <ExpectedWinsOverview />
      <SeasonSelectButtons onSelectSeason={handleSeasonSelect} />
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <MaterialReactTable
          columns={columns}
          data={ncaaExpectedWins}
          enableColumnOrdering
        />
      </TableContainer>
    </>
  );
};

export default NcaaTeamEpss;
