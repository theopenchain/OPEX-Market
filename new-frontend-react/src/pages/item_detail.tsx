import * as React from 'react';

import { Grid, Typography } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ProductCard from '../components/ProductCard'
import ProductDetail from '../components/ProductDetail';

export default function ItemDetailPage() {
  return (
    <Grid container spacing={2}>
      <Grid item md={12} sx={{margin: "40px"}}>
        <ProductDetail />
      </Grid>
      <Grid item md={12} sx={{margin: "40px"}}>
        <Typography align="left" variant="h4" component="h4">
          More by Artist
        </Typography>
        <Carousel centerMode={true} centerSlidePercentage={30}>
          <ProductCard product_image="images/product1.png"/>
          <ProductCard product_image="images/product2.png"/>
          <ProductCard product_image="images/product3.png"/>
          <ProductCard product_image="images/product4.png"/>
          <ProductCard product_image="images/product1.png"/>
          <ProductCard product_image="images/product2.png"/>
          <ProductCard product_image="images/product3.png"/>
          <ProductCard product_image="images/product4.png"/>
        </Carousel>
      </Grid>
      <Grid item md={12} sx={{margin: "40px"}}>
        <Typography align="left" variant="h4" component="h4">
          People who liked this also liked
        </Typography>
        <Carousel centerMode={true} centerSlidePercentage={30}>
          <ProductCard product_image="images/product1.png"/>
          <ProductCard product_image="images/product2.png"/>
          <ProductCard product_image="images/product3.png"/>
          <ProductCard product_image="images/product4.png"/>
          <ProductCard product_image="images/product1.png"/>
          <ProductCard product_image="images/product2.png"/>
          <ProductCard product_image="images/product3.png"/>
          <ProductCard product_image="images/product4.png"/>
        </Carousel>
      </Grid>
    </Grid>
  );
}

