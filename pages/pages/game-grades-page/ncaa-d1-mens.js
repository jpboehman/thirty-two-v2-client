import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useApi from "hooks/useApi";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

import {
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
  TableContainer,
  Paper,
} from "@mui/material";

import ImportModal from "@/components/Excel/ImportModal";

import MaterialReactTable from "material-react-table";
import ExpectedWinsOverview from "@/components/StatOverviews/expectedWinsOverview";
import BootstrapDialog from "@/components/Modals/ModalBootstraps";
import ExcelUploader from "@/components/Excel/ExcelUploader";
import SeasonSelectButtons from "@/components/UIElements/Buttons/SeasonSelectButtons";

import mapSeasonUrl from "@/utils/expected-wins/NCAAExpectedWinsURLs";
import chosenSeason from "common/seasonOptions";

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
  const { data, isLoading, isError, errorMessage } = useApi(
    `/ncaa-d1-mens-game-grades`
  );
  const [tableData, setTableData] = useState(data?.gameGrades);

  useEffect(() => {
    if (!tableData && data?.gameGrades?.length > 0) {
      const dynamicColumns = data.gameGrades[0].fields;
      const columnHeaders = getColumnHeaders(dynamicColumns);

      setTableData(
        data.gameGrades.map((grade) => {
          const rowData = {};
          // Added this and it work
          rowData["documentId"] = grade._id;
          grade.fields.forEach((field) => {
            rowData[field.name] = field.value;
          });
          return rowData;
        })
      );
    } else if (data && data.gameGrades.length === 0) {
      if (!uploadedData) setIsImportModalOpen(true);
    }
  }, [data, uploadedData]);

  useEffect(() => {
    const uploadGameGradeExcelData = async () => {
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
      uploadGameGradeExcelData();
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
      <ImportModal
        open={isImportModalOpen}
        onClose={handleIsImportModalClose}
        onUpload={handleUpload}
      />
    </>
  );
};

export default NcaaTeamEpss;
