import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import {Tabs, Tab} from '@mui/material';

import SearchIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {Grid, Box, Typography } from '@mui/material';

import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';


import ProductCard from '../components/ProductCard'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

export default function NftSportsPage() {
  return (
    <Grid container spacing={2}>
      <Grid item md={12} sx={{margin: "40px"}}>
        <Tabs  value={2} aria-label="NFT Sports">
          <Tab label="Subcategory" />
          <Tab label="Subcategory" />
          <Tab label="Subcategory" />
          <Tab label="Subcategory" />
        </Tabs>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button color="inherit">All</Button>
          <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>Sort</Button>
          <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>Category</Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="Grid View"
              color="inherit"
            >
              <GridViewIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="List View"
              aria-haspopup="true"
              color="inherit"
            >
              <ViewListIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <ProductCard product_image="images/product1.png"/>
          </Grid>
          <Grid item md={3}>
            <ProductCard product_image="images/product2.png"/>
          </Grid>
          <Grid item md={3}>
            <ProductCard product_image="images/product3.png"/>
          </Grid>
          <Grid item md={3}>
            <ProductCard product_image="images/product4.png"/>
          </Grid>
          <Grid item md={3}>
            <ProductCard product_image="images/product4.png"/>
          </Grid>
          <Grid item md={3}>
            <ProductCard product_image="images/product3.png"/>
          </Grid>
          <Grid item md={3}>
            <ProductCard product_image="images/product2.png"/>
          </Grid>
          <Grid item md={3}>
            <ProductCard product_image="images/product1.png"/>
          </Grid>
        </Grid>
        <Typography variant="h1" component="h3">
          <Button variant="contained" color="primary">Load More</Button>
        </Typography>
      </Grid>
    </Grid>
  );
}

