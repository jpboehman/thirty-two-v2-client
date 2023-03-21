import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Link from "next/link";
import styles from '@/styles/PageTitle.module.css'

const sellerLists = [
  {
    id: 1,
    brandLogo: "/images/seller1.png",
    brandName: "Nesta Technologies",
    sellersName: "Katia Stapleton",
    itemStock: "12,0558",
    walletBalance: "$48,450.00",
    viewUrl: "#",
  },
  {
    id: 2,
    brandLogo: "/images/seller2.png",
    brandName: "Force Medicines",
    sellersName: "Wade Dave",
    itemStock: "10,500",
    walletBalance: "$50,500.00",
    viewUrl: "#",
  },
  {
    id: 3,
    brandLogo: "/images/seller3.png",
    brandName: "Metelgo Sys",
    sellersName: "Gilbert Dan",
    itemStock: "8,450",
    walletBalance: "$60,450.00",
    viewUrl: "#",
  },
  {
    id: 4,
    brandLogo: "/images/seller4.png",
    brandName: "Digito Galatoxy",
    sellersName: "Roberto Ramon",
    itemStock: "15,0587",
    walletBalance: "$78,450.00",
    viewUrl: "#",
  },
  {
    id: 5,
    brandLogo: "/images/seller5.png",
    brandName: "Micro Technology",
    sellersName: "Nathaniel Liam",
    itemStock: "18,0558",
    walletBalance: "$65,450.00",
    viewUrl: "#",
  },
  {
    id: 6,
    brandLogo: "/images/seller6.png",
    brandName: "iTest Factory",
    sellersName: "Ethan Milton",
    itemStock: "19,0558",
    walletBalance: "$76,450.00",
    viewUrl: "#",
  },
  {
    id: 7,
    brandLogo: "/images/seller7.png",
    brandName: "Syntech Service",
    sellersName: "Joshua Harvey",
    itemStock: "20,0558",
    walletBalance: "$56,450.00",
    viewUrl: "#",
  },
  {
    id: 8,
    brandLogo: "/images/seller8.png",
    brandName: "Zotic Mentex",
    sellersName: "Antonio Connor",
    itemStock: "22,0558",
    walletBalance: "$90,450.00",
    viewUrl: "#",
  },
];

const Sellers = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Sellers</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Sellers</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {sellerLists.map((seller) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={3} key={seller.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                p: "25px",
                mb: "15px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <img
                src={seller.brandLogo}
                alt="Seller"
                width="110px"
                height="110px"
                className="borRadius100"
              />

              <Typography
                as="h4"
                fontWeight="500"
                fontSize="17px"
                mt="10px"
                mb="5px"
              >
                {seller.brandName}
              </Typography>

              <Typography fontSize="13px">{seller.sellersName}</Typography>

              <Link href={seller.viewUrl} className="text-decoration-none">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    mt: "20px",
                    color: "#fff !important",
                  }}
                >
                  View Details
                </Button>
              </Link>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box>
                  <Typography fontSize="13px">Item Stock</Typography>

                  <Typography as="h4" fontWeight="500" fontSize="17px" mt="5px">
                    {seller.itemStock}
                  </Typography>
                </Box>

                <Box>
                  <Typography fontSize="13px">Wallet Balance</Typography>

                  <Typography as="h4" fontWeight="500" fontSize="17px" mt="5px">
                    {seller.walletBalance}
                  </Typography>
                </Box>
              </Box>

              {/* Edit & Delete Button */}
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
              >
                <Tooltip title="Edit" placement="top">
                  <IconButton aria-label="edit" size="small">
                    <BorderColorIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete" placement="top">
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Sellers;
