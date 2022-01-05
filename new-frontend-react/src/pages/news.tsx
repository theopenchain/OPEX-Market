import * as React from 'react';
import {Card, CardMedia, Grid, Box, Typography } from '@mui/material';

import NewsBannerImage from "../assets/banners/news.png";
import MusicImage1 from "../assets/news/music1@2x.png";
import MusicImage2 from "../assets/news/music2@2x.png";
import MusicImage3 from "../assets/news/music3@2x.png";
export default function NewsPage() {
  return (
    <Grid container spacing={2} sx={{padding: "40px"}}>
      <Grid item md={12}>
        <CardMedia
            component="img"
            src={NewsBannerImage}
        />
      </Grid>
      <Grid item md={6}>
        <Typography align="left" sx={{pb:"20px"}}>Acclaimed filmmaker and comic book writer George C. Romero, son of the late George Romero, a legend of the zombie genre, is resurrecting the dead off the page with an exclusive film NFT collectible. Dubbed “The Rise,” the NFT was created in collaboration with Heavy Metal Entertainment, publisher of science fiction and fantasy comics magazine Heavy Metal.</Typography>
        <Typography align="left" sx={{pb:"20px"}}>The drop is based on The Rise comic book series, which are a prologue to his father’s classic zombie tale Night of the Living Dead. The story plays a prominent role in zombie culture, forever changing the way zombies would be portrayed in film, television, video games, comics and more.</Typography>
        <Typography align="left" sx={{pb:"20px"}}>“The Rise” NFT tells the story of the project’s formation in the form of documentary-style animated videos with a voiceover by Romero and stunning artwork by Diego Yapur. In this short motion comic film, Romero describes his journey in the creation of “The Rise” and the legacy of his father on the zombie genre and his artistic career.</Typography>
      </Grid>
      <Grid item md={6}>
        <Typography align="left" sx={{pb:"20px"}}>Romero is a master of entertainment and artistic expression, having spent the last 30 years working with major brands and on hundreds of commercial campaigns. He has also served as a business consultant and mentor for new filmmakers, content creators and entrepreneurs.</Typography>
        <Typography align="left" sx={{pb:"20px"}}>“NFTs are one of the most exciting new spaces for me,” he said. “To launch ‘The Rise’ NFTs with Heavy Metal on Crypto.com is one of those next-gen moments for a brand that has endured for five decades. I love the excitement that bleeds from a Romero and Heavy Metal collaboration. Creating this with Matthew Medney has been one of the most rad-tastic projects I’ve had the honor of realizing. I’m so excited to see the future hitting both of our legacy brands with such force.”</Typography>
      </Grid>
      <Grid item md={12}>
        <Typography variant="h4" component="h4">Music</Typography>
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

