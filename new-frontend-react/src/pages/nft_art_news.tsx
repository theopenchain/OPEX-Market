import * as React from 'react';
import {Card, CardMedia, Grid, Box, Typography } from '@mui/material';

import MusicImage1 from "../assets/news/music1@2x.png";
import MusicImage2 from "../assets/news/music2@2x.png";
import MusicImage3 from "../assets/news/music3@2x.png";

import ArtNewsImage1 from "../assets/nft_art_news/art_news1@2x.png";
import ArtNewsImage2 from "../assets/nft_art_news/art_news2@2x.png";
import ArtNewsImage3 from "../assets/nft_art_news/art_news3@2x.png";
export default function NftArtNewsPage() {
  return (
    <Grid container spacing={2} sx={{padding: "40px"}}>
      <Grid item md={4}>
        <CardMedia
            component="img"
            src={ArtNewsImage1}
        />
      </Grid>
      <Grid item container md={8} spacing={2}>
        <Grid item md={4}>
          <CardMedia
            component="img"
            src={ArtNewsImage2}
          />
        </Grid>
        <Grid item md={8}>
          <Typography sx={{pb:"20px"}} align="left">26 October 2021</Typography>
          <Typography sx={{pb:"20px"}} align="left" variant="h5" component="h5">#1 Cosmic Convos with Sailor Mars feat. GHØST GIRL</Typography>
          <Typography sx={{pb:"20px"}} align="left">Welcome everyone on my journey into the NFT space. My name is Rei (aka Sailor Mars) and I’m really excite...</Typography>
        </Grid>
        <Grid item md={4}>
          <CardMedia
            component="img"
            src={ArtNewsImage3}
          />
        </Grid>
        <Grid item md={8}>
          <Typography sx={{pb:"20px"}} align="left">26 October 2021</Typography>
          <Typography sx={{pb:"20px"}} align="left" variant="h5" component="h5">CryptoArt Sundays: Interview with Stefan Grosse Halbuer</Typography>
          <Typography sx={{pb:"20px"}} align="left">Welcome to CryptoArt Sundays! I am super excited to introduce you all to a really cool artist, Stefan Gro...</Typography>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Typography variant="h4" component="h4" sx={{pt: "80px"}}>Art News</Typography>
      </Grid>
      <Grid item md={4}>
        <Card>
          <CardMedia
              component="img"
              src={MusicImage1}
          />
          <Typography sx={{pb:"20px"}}>26 October 2017</Typography>
          <Typography sx={{pb:"20px"}} variant="h5" component="h5">Power Rangers NFTs Land on the Blockchain</Typography>
          <Typography sx={{pb:"20px"}}>Leading toy company Hasbro, has teamed up with WAX, to bring everyone’s favorite Power Rangers seri..</Typography>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card>
          <CardMedia
              component="img"
              src={MusicImage2}
          />
          <Typography sx={{pb:"20px"}}>26 October 2017</Typography>
          <Typography sx={{pb:"20px"}} variant="h5" component="h5">Nippleverse – An NFT Project Challenging the Norms of Society</Typography>
          <Typography sx={{pb:"20px"}}>An incredible team of creators are ready to make their mark on the blockchain with a set of nipple-theme</Typography>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card>
          <CardMedia
              component="img"
              src={MusicImage3}
          />
          <Typography sx={{pb:"20px"}}>26 October 2017</Typography>
          <Typography sx={{pb:"20px"}} variant="h5" component="h5">Exclusive NFT Drop by Comics Master George C. Romero & Heavy Metal Magazine</Typography>
          <Typography sx={{pb:"20px"}}>An incredible team of creators are ready to make their mark on the blockchain with a set of nipple-theme</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

