import * as React from 'react';
import { Card, CardMedia, Grid, Avatar, Typography } from '@mui/material';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ProductCard from '../components/ProductCard'

import ProfileBannerImage from '../assets/banners/profile@2x.png';
import FemaleAvatar from '../assets/avatars/user_femle@2x.png';

import "./profile.css";

export default function ProfilePage() {
  return (
    <Grid container spacing={2} sx={{padding:"40px"}}>
      <Grid item md={12}>
        <CardMedia
            component="img"
            src={ProfileBannerImage}
        />
        <Avatar src={FemaleAvatar} sx={{width: 120, height: 120 }}/>
        <Typography variant="h4" component="h4">Username</Typography>
        <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</Typography>
      </Grid>
      <Grid item md={12}>
        <Typography align="left" variant="h3" component="h3">
          Recent viewed
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
      <Grid item md={12}>
        <Typography align="left" variant="h3" component="h3">
          Creatives
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
      <Grid item md={12}>
        <Typography align="left" variant="h3" component="h3">
          Based on your likes
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
      <Grid item md={12}>
        <Typography align="left" variant="h3" component="h3">
          People with similar interests also liked
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

