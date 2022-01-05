import * as React from 'react';

import {Card, CardMedia, Grid, Box, Typography } from '@mui/material';

import ProductListItem from 'components/ProductListItem';
import LiveAuctionsBanner from '../assets/banners/live_auctions@2x.png';

import FeedImage1 from "../assets/feeds/feed1@2x.png";
import FeedImage2 from "../assets/feeds/feed2@2x.png";
import CompetitionImage1 from "../assets/competitions/competition1@2x.png";
import CompetitionImage2 from "../assets/competitions/competition2@2x.png";
import CompetitionImage3 from "../assets/competitions/competition3@2x.png";

export default function CompetitionPage() {
  return (
    <Grid container spacing={2} sx={{padding: "40px"}}>
        <Grid item container md={8}>
            <CardMedia
                component="img"
                src={CompetitionImage1}
                alt="Recents"
            />
            <CardMedia
                component="img"
                src={CompetitionImage2}
                alt="Recents"
            />
            <CardMedia
                component="img"
                src={CompetitionImage3}
                alt="Recents"
            />
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

