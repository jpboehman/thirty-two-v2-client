import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/PageTitle.module.css";
import { useSelector } from "react-redux";
import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Link from "next/link";

import { generalRequest } from "http/httpService";

const columns = [
  { accessorKey: "Season Grade", header: "Season Grade" },
  { accessorKey: "WCr %", header: "WCr %" },
  { accessorKey: "WCr/GP", header: "WCr/GP" },
  { accessorKey: "MVPr", header: "MVPr" },
  { accessorKey: "MIN", header: "MIN" },
  { accessorKey: "PTS", header: "PTS" },
  { accessorKey: "FGM", header: "FGM" },
  { accessorKey: "FGA", header: "FGA" },
  { accessorKey: "3FM", header: "3FM" },
  { accessorKey: "3FA", header: "3FA" },
  { accessorKey: "2FM", header: "2FM" },
  { accessorKey: "2FA", header: "2FA" },
  { accessorKey: "FTM", header: "FTM" },
  { accessorKey: "FTA", header: "FTA" },
  { accessorKey: "OREB", header: "OREB" },
  { accessorKey: "DREB", header: "DREB" },
  { accessorKey: "REB", header: "REB" },
  { accessorKey: "AST", header: "AST" },
  { accessorKey: "STL", header: "STL" },
  { accessorKey: "BLK", header: "BLK" },
  { accessorKey: "TO", header: "TO" },
  { accessorKey: "PF", header: "PF" },
];

const NcaaD1MensPlayer = () => {
  const router = useRouter();
  const { id } = router.query;
  const [ncaaD1MensPlayer, setNcaaD1MensPlayer] = useState({});
  const [selectedTeamId, setSelectedTeamId] = useState();
  const currentUser = useSelector((state) => state.currentUser?.payload);

  useEffect(() => {
    let isMounted = true;

    const fetchPlayerData = async () => {
      if (id) {
        try {
          const response = await generalRequest.get(
            `/ncaa-d1-mens-player/${id}`
          );

          if (response?.data?.ncaaPlayer && isMounted) {
            setNcaaD1MensPlayer(response.data?.ncaaPlayer);
          }
        } catch (error) {
          console.error("Error fetching player data:", error);
        }
      }
    };

    fetchPlayerData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // Edit to make route to team page
  // const handleRowClick = (row) => {
  //   console.log(row);
  //   const { _id } = row.original;
  //   setSelectedTeamId(_id);
  //   const pathname = `/pages/teams/${_id}`;
  //   window.location.pathname = pathname;
  // };

  // TODO: Add tables for other two pages

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>{ncaaD1MensPlayer[0]["Player"]}</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <MaterialReactTable
          columns={columns}
          data={ncaaD1MensPlayer}
          enableColumnOrdering
          // muiTableBodyRowProps={({ row }) => ({
          //   onClick: () => handleRowClick(row),
          //   sx: {
          //     cursor: "pointer",
          //   },
          // })}
        />
      </TableContainer>
    </>
  );

  // return (
  //   <>
  //     <Card
  //       sx={{
  //         boxShadow: "none",
  //         borderRadius: "10px",
  //         p: "25px 20px",
  //         mb: "15px",
  //       }}
  //     >
  //       <Box
  //         sx={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //           alignItems: "center",
  //           borderBottom: "1px solid #EEF0F7",
  //           paddingBottom: "10px",
  //         }}
  //         className="for-dark-bottom-border"
  //       >
  //         <Typography
  //           as="h3"
  //           sx={{
  //             fontSize: 18,
  //             fontWeight: 500,
  //           }}
  //         >
  //           Avarage Report
  //         </Typography>

  //         <Box></Box>
  //       </Box>

  //       <>
  //         <div className={styles.totalRevenueList}>
  //           <p>2FA</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["2FA"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-up-line successColor"></i> 49%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>2FM</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["2Fm"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 18%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>3FA</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["3FA"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-up-line successColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>3FM</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["3FM"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 28%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>AST</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["AST"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-up-line successColor"></i> 70%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>BLK</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["BLK"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 18%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>DREB</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["DREB"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-up-line successColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>FGA</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["FGA"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>FGM</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["FGM"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>FTA</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["FTA"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>FTM</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["FTM"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>G</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["G"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>MIN</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["MIN"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>MVPr</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["MVPr"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>OREB</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["OREB"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>PF</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["PF"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>PTS</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["PTS"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>Player</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["Player"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>REB</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["REB"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>STL</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["STL"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>Season Grade</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["Season Grade"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>TO</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["TO"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>Team</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["Team"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>WCr</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["WCr"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>WCr %</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["WCr %"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>

  //         <div className={styles.totalRevenueList}>
  //           <p>WCr/GP</p>
  //           <div className={styles.rightContent}>
  //             <h5>{ncaaD1MensPlayer["WCr/GP"]}</h5>
  //             <p>
  //               <i className="ri-arrow-right-down-line dangerColor"></i> 42%
  //             </p>
  //           </div>
  //         </div>
  //       </>
  //     </Card>
  //   </>
  // );
};

export default NcaaD1MensPlayer;
