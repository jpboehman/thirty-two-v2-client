import * as React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'

import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CreateProduct = () => {
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
        <h1>Create Product</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Create Product</li>
        </ul>
      </div>

      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            background: "#fff",
            padding: "30px 20px",
            borderRadius: "8px",
            mb: "15px"
          }}
          className="bg-black"
        >
          <Typography as="h4" fontWeight="500" fontSize="18px" mb="10px">
            Create Product
          </Typography>

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
                Meta Title
              </Typography>
              <TextField
                autoComplete="meta-title"
                name="metaTitle"
                required
                fullWidth
                id="metaTitle"
                label="Meta Title"
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
                Meta Keywords
              </Typography>
              <TextField
                autoComplete="meta-keywords"
                name="metaKeywords"
                required
                fullWidth
                id="metaKeywords"
                label="Meta Keywords"
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
                Meta Description
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
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                  color: "#fff !important"
                }}
              >
                <AddIcon
                  sx={{
                    position: "relative",
                    top: "-2px",
                  }}
                  className='mr-5px'
                />{" "}
                Create Product
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateProduct;