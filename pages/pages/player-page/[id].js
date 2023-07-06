import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import MaterialReactTable from "material-react-table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

import { generalRequest } from "http/httpService";

// For player page, not leveraging table to show data, but a profile component instead
const columns = [
  // column configuration
];

const NcaaD1MensTeamRoster = () => {
  const router = useRouter();
  const { id } = router.query;
  const [ncaaD1MensPlayer, setNcaaD1MensPlayer] = useState([]);
  const currentUser = useSelector((state) => state.currentUser?.payload);

  console.log(id);

  useEffect(() => {
    let isMounted = true; // this flag indicates if the component is still mounted

    const fetchPlayerData = async () => {
      if (id) {
        try {
          const response = await generalRequest.get(
            `/ncaa-d1-mens-player/${id}`
          );
          const data = await response.json();
          // Memory-leak protection
          if (data?.ncaaPlayer && isMounted) {
            setNcaaD1MensPlayer(data.ncaaPlayer);
          }
        } catch (error) {
          console.error("Error fetching player data:", error);
        }
      }
    };

    fetchPlayerData();

    // cleanup function runs when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Player Page</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NcaaD1MensTeamRoster;
