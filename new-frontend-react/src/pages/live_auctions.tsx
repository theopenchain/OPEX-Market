import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {Card, CardMedia, Grid, Box, Typography } from '@mui/material';

import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

import ProductCard from '../components/ProductCard';
import ProductListItem from 'components/ProductListItem';
import LiveAuctionsBanner from '../assets/banners/live_auctions@2x.png';

import FeedImage1 from "../assets/feeds/feed1@2x.png";
import FeedImage2 from "../assets/feeds/feed2@2x.png";

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

export default function LiveAuctionsPage() {
  return (
    <Grid container spacing={2}>
      <Grid item md={12} sx={{margin: "40px"}}>
        <CardMedia
            component="img"
            height="300"
            src={LiveAuctionsBanner}
            alt="Recents"
        />
      </Grid>
      <Grid item md={12} sx={{margin: "40px"}}>
        <Toolbar sx={{pb: "20px"}}>
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
          <Button variant="contained" color="primary">Upload NFT Music</Button>
          </Box>
        </Toolbar>
        <Grid container item md={12} spacing={2}>
          <Grid container item md={8}>
            <Card sx={{borderRadius:4, boxShadow: 3/* , bgcolor: "#C0C0C0" */}}>
              <Grid item container md={12}>
                <ProductListItem  product_image={FeedImage1} /> 
              </Grid>
              <Grid item container md={12}>
                <ProductListItem  product_image={FeedImage2} />
              </Grid>
              <Grid item container md={12}>
                <ProductListItem  product_image={FeedImage1} />
              </Grid>
            </Card>
          </Grid>
          <Grid container item md={4} spacing={2}>
            <Grid item md={6}>
              <ProductCard product_image="images/product1.png"/>
            </Grid>
            <Grid item md={6}>
              <ProductCard product_image="images/product2.png"/>
            </Grid>
            <Grid item md={6}>
              <ProductCard product_image="images/product3.png"/>
            </Grid>
            <Grid item md={6}>
              <ProductCard product_image="images/product4.png"/>
            </Grid>
            <Grid item md={6}>
              <ProductCard product_image="images/product4.png"/>
            </Grid>
            <Grid item md={6}>
              <ProductCard product_image="images/product3.png"/>
            </Grid>
            <Grid item md={6}>
              <ProductCard product_image="images/product2.png"/>
            </Grid>
            <Grid item md={6}>
              <ProductCard product_image="images/product1.png"/>
            </Grid>
          </Grid>
        </Grid>
        
        <Typography variant="h3" component="h3">
          <Button variant="contained" color="primary">Load More</Button>
        </Typography>
      </Grid>
    </Grid>
  );
}

