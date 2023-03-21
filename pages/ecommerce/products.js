import * as React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

// Create Product Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100%",
  maxWidth: '700px',
  width: '100%',
  overflow: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};

function Product(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

Product.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  productImg,
  productTitle,
  category,
  price,
  orders,
  stock,
  rating,
) {
  return {
    productImg,
    productTitle,
    category,
    price,
    orders,
    stock,
    rating,
  };
}

const rows = [
  createData(
    "/images/product1.png",
    "Laptop Macos Pro",
    "Laptop",
    "$289.50",
    "46",
    "12",
    "5.0 (61 votes)",
  ),
  createData(
    "/images/product2.png",
    "Smart Camera XD6",
    "Camera",
    "$189.50",
    "50",
    "Out of Stock",
    "5.0 (40 votes)"
  ),
  createData(
    "/images/product3.png",
    "Pixi 8 Wireless Airphone",
    "Phone",
    "$250.50",
    "45",
    "400",
    "5.0 (15 votes)"
  ),
  createData(
    "/images/product4.png",
    "Jebble Smart Watch",
    "Watch",
    "$289.50",
    "100",
    "200",
    "5.0 (99 votes)"
  ),
  createData(
    "/images/product5.png",
    "Admas Airpod x-Zon",
    "Airpod",
    "$289.50",
    "120",
    "Out of Stock",
    "5.0 (150 votes)"
  ),
  createData(
    "/images/product6.png",
    "Smart Watch F8 Pro",
    "Watch",
    "$289.50",
    "20",
    "100",
    "5.0 (5 votes)"
  ),
  createData(
    "/images/product7.png",
    "Nord Fold ZL",
    "Pone",
    "$289.50",
    "55",
    "108",
    "5.0 (11 votes)"
  ),
  createData(
    "/images/product8.png",
    "Wall Clock Cimbina",
    "Clock",
    "$289.50",
    "40",
    "100",
    "5.0 (4 votes)"
  ),
  createData(
    "/images/product9.png",
    "Galaxo T6 Munsun",
    "Smart Phone",
    "$289.50",
    "50",
    "130",
    "5.0 (55 votes)"
  ),
  createData(
    "/images/product1.png",
    "Macbook Pro",
    "Laptop",
    "$1,299.00",
    "120",
    "1500",
    "5.0 (150 votes)"
  ),
  createData(
    "/images/product2.png",
    "iphone 14 pro max",
    "Phone",
    "$1029",
    "200",
    "599",
    "5.0 (200 votes)"
  ),
  createData(
    "/images/product3.png",
    "HeadPhone",
    "HeadPhone",
    "$100.50",
    "25",
    "50",
    "5.0 (61 votes)"
  ),
  createData(
    "/images/product4.png",
    "Superstar shoes",
    "shoes",
    "$59.50",
    "45",
    "50",
    "5.0 (45 votes)"
  ),
  createData(
    "/images/product5.png",
    "Nike shirts",
    "Shirts",
    "$30.50",
    "32",
    "40",
    "5.0 (22 votes)"
  ),
  createData(
    "/images/product6.png",
    "Nike caps",
    "Caps",
    "$15.50",
    "33",
    "50",
    "5.0 (3 votes)"
  ),
  createData(
    "/images/product7.png",
    "Hoodie (Blue)",
    "Hoodie",
    "$59.50",
    "30",
    "55",
    "5.0 (44 votes)"
  ),
  createData(
    "/images/product8.png",
    "Wall Clock China",
    "Clock",
    "$100.50",
    "30",
    "230",
    "5.0 (45 votes)"
  ),
  createData(
    "/images/product9.png",
    "Galaxo T6 Munsun 2",
    "Phone",
    "$220.50",
    "22",
    "50",
    "5.0 (24 votes)"
  ),
].sort((a, b) => (a.category < b.category ? -1 : 1));

export default function Products() {
  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Create Product Modal & Form
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // Select dropdown
  const [categorySelect, setCategorySelect] = React.useState('');
  const handleChange = (event) => {
    setCategorySelect(event.target.value);
  };

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Products</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Products</li>
        </ul>
      </div>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 25px 10px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Products
          </Typography>

          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{
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
              className='mr-5px'
            />{" "}
            Create Folder
          </Button>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table 
            sx={{ minWidth: 850 }} 
            aria-label="custom pagination table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  Product Name
                </TableCell>

                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  Category
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  Price
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  Orders
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  Stock
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  Rating
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.productTitle}>
                  <TableCell
                    sx={{
                      width: 250,
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={row.productImg}
                        alt="Product Img"
                        width={50}
                        className="borderRadius10"
                      />
                      <Typography
                        as="h4"
                        sx={{
                          fontWeight: "500",
                          fontSize: "13px",
                        }}
                        className='ml-10px'
                      >
                        {row.productTitle}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.category}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.price}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.orders}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.stock}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.rating}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                      }}
                    >
                      <Tooltip title="View" placement="top">
                        <IconButton
                          aria-label="view"
                          size="small"
                          color="info"
                          className="info"
                        >
                          <VisibilityIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Edit" placement="top">
                        <IconButton
                          aria-label="edit"
                          size="small"
                          color="primary"
                          className="primary"
                        >
                          <DriveFileRenameOutlineIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Add To Cart" placement="top">
                        <IconButton
                          aria-label="Add To Cart"
                          size="small"
                          color="success"
                          className="success"
                        >
                          <ShoppingCartIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

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
                    </Box>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell
                    colSpan={8}
                    style={{ borderBottom: "1px solid #F7FAFF" }}
                  />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={8}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={Product}
                  style={{ borderBottom: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>

      {/* Create Product Modal */}
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
          <Box sx={style} className="bg-black">
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
                  fontSize: "17px",
                }}
              >
                Create Product
              </Typography>

              <IconButton
                aria-label="remove"
                size="small"
                onClick={handleClose}
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
                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Product Name
                    </Typography>
                    <TextField
                      autoComplete="product-name"
                      name="productName"
                      required
                      fullWidth
                      id="productName"
                      label="Product Name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Short Description
                    </Typography>
                    <TextField
                      autoComplete="short-description"
                      name="Short Description"
                      required
                      fullWidth
                      id="Short Description"
                      label="Short Description"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Category
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={categorySelect}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Laptop</MenuItem>
                        <MenuItem value={20}>Camera</MenuItem>
                        <MenuItem value={30}>Smart Watch</MenuItem>
                        <MenuItem value={30}>iPhone</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Price
                    </Typography>

                    <TextField
                      autoComplete="price"
                      name="price"
                      required
                      fullWidth
                      id="price"
                      label="$0"
                      type="number"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Discount Price
                    </Typography>

                    <TextField
                      autoComplete="discount-price"
                      name="DiscountPrice"
                      required
                      fullWidth
                      id="DiscountPrice"
                      label="$0"
                      type="number"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Stock
                    </Typography>

                    <TextField
                      autoComplete="stock"
                      name="stock"
                      required
                      fullWidth
                      id="stock"
                      label="5"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Product Description
                    </Typography>
       
                    <RichTextEditor
                      id="rte"
                      controls={[
                        ['bold', 'italic', 'underline', 'link', 'image'],
                        ['unorderedList', 'h1', 'h2', 'h3'],
                        ['sup', 'sub'],
                        ['alignLeft', 'alignCenter', 'alignRight'],
                      ]}
                    />
                  </Grid>
 
                  <Grid item xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Product Image
                    </Typography>

                    <TextField
                      autoComplete="product-image"
                      name="productImage"
                      required
                      fullWidth
                      id="productImage"
                      type="file"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />

                    <Box 
                      sx={{
                        mt: '15px'
                      }}
                    >
                      <img 
                        src="/images/product1.png" 
                        alt="product" 
                        wisth="55px"
                        className='mr-10px'
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} textAlign="end">
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: "13px",
                        padding: "12px 20px",
                        color: "#fff !important",
                      }}
                      onClick={handleClose}
                      className='mr-15px'
                    >
                      <ClearIcon
                        sx={{
                          position: "relative",
                          top: "-1px",
                        }}
                        className='mr-5px'
                      />{" "}
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
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
                          top: "-1px",
                        }}
                        className='mr-5px'
                      />{" "}
                      Create Product
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
}
