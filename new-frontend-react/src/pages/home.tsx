import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, Grid, Box, Typography, Avatar, IconButton } from '@mui/material';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ProductCard from '../components/ProductCard'
import ProductListItem from '../components/ProductListItem';

import Slide1Image from "../assets/slide1.png";
import Slide2Image from "../assets/slide2.png";
import FeedImage1 from "../assets/feeds/feed1@2x.png";
import FeedImage2 from "../assets/feeds/feed2@2x.png";

import FemaleAvatar from "../assets/avatars/user_female@2x.png";

import "./home.css";
export default function HomePage() {
  return (
    <Grid container spacing={2} sx={{padding:"40px"}}>
      {/* <Grid item md={12}>
        <div id="Getting_Started_title">
          <span>Getting Started</span>
        </div>
        <div id="Getting_Started_content">
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</span>
        </div>
      </Grid>
      <Grid item md={4}>
        <div id="Connect_Wallet_group">
          <div id="Connect_Wallet_title">
            <span>Connect Wallet</span>
          </div>
          <div id="Connect_Wallet_content">
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</span>
          </div>
        </div>
      </Grid>
      <Grid item md={4}>
        <div id="Create_Account_group">
          <div id="Create_Account_title">
            <span>Create Account</span>
          </div>
          <div id="Create_Account_content">
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</span>
          </div>
        </div>
      </Grid>
      <Grid item md={4}>
        <div id="Buy_Shop_Sell_group">
          <div id="Buy_Shop_Sell_title">
            <span>Buy. Shop. Sell</span>
          </div>
          <div id="Buy_Shop_Sell_content">
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</span>
          </div>
        </div>
      </Grid> */}
      <Grid item md={12}>
        <Carousel>
          <Box
            component="img"
            alt="Opex"
            src={Slide1Image}
          />
          <Box
            component="img"
            alt="Opex"
            src={Slide2Image}
          />
        </Carousel>
      </Grid>
      <Grid item md={12}>
        <Typography align="left" variant="h3" component="h3">
          Trending
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
          Categories
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Card>
              <CardMedia
                  component="img"
                  height="300"
                  src='/images/digital-art-category.png'
                  alt="Digital Art"
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardMedia
                  component="img"
                  height="300"
                  src='/images/music-category.png'
                  alt="Music"
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardMedia
                  component="img"
                  height="300"
                  src='/images/sports-category.png'
                  alt="Sports"
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardMedia
                  component="img"
                  height="300"
                  src='/images/live-auctions-category.png'
                  alt="Live Auctions"
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardMedia
                  component="img"
                  height="300"
                  src='/images/competitions-category.png'
                  alt="Competitions"
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardMedia
                  component="img"
                  height="300"
                  src='/images/digital-collectibles-category.png'
                  alt="Digital Collectibles"
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardMedia
                  component="img"
                  height="300"
                  src='/images/physical-items-category.png'
                  alt="Physical Items"
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardMedia
                  component="img"
                  height="300"
                  src='/images/educational-hub-category.png'
                  alt="Educational HUB"
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container md={12}>
        <Typography align="left" variant="h3" component="h3">
          Feed
        </Typography>
        <Card sx={{borderRadius:4, boxShadow: 3, bgcolor: "#C0C0C0"}}>
          <CardHeader
            avatar={
              <Avatar src="/user_female@2x.png"/>
            }
            title="Username"
            subheader="comment"
          />
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
    </Grid>
  );
}

