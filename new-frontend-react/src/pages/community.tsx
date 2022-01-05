import * as React from 'react';

import {Card, CardMedia, Grid, Box, Typography } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProductListItem from 'components/ProductListItem';
import ProductCard from 'components/ProductCard';
import FeedImage1 from "../assets/feeds/feed1@2x.png";
import FeedImage2 from "../assets/feeds/feed2@2x.png";
import DigitalBusinessImage from "../assets/communities/digital_business@2x.png";

import CompetitionImage2 from "../assets/competitions/competition2@2x.png";
import CompetitionImage3 from "../assets/competitions/competition3@2x.png";
export default function CommunityPage() {
  return (
    <Grid container spacing={2} sx={{padding: "40px"}}>
        <Grid item container md={8}>
          <Grid item md={12}>
            <CardMedia
                component="img"
                src={DigitalBusinessImage}
            />
          </Grid>
          <Grid item md={12}>
            <Typography variant="h4" component="h4" sx={{padding:"20px"}}>Competition Winners</Typography>
            <Carousel centerMode={true} centerSlidePercentage={40}>
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
          <Grid item md={12}>
            <Typography variant="h4" component="h4">Trending</Typography>
              <Carousel centerMode={true} centerSlidePercentage={40}>
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
        <Grid item md={4}>
          <Card sx={{borderRadius:4, boxShadow: 3}}>
            <Grid item md={12}>
              <ProductListItem  product_image={FeedImage1} /> 
            </Grid>
            <Grid item md={12}>
              <ProductListItem  product_image={FeedImage2} />
            </Grid>
            <Grid item md={12}>
              <ProductListItem  product_image={FeedImage1} />
            </Grid>
          </Card>
        </Grid>
    </Grid>
  );
}

