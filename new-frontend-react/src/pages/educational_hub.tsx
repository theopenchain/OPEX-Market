import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {Card, CardMedia, Grid, Box, Typography } from '@mui/material';




import EduHubImage1 from "../assets/edu-hub1@2x.png";
import EduHubImage2 from "../assets/edu-hub2@2x.png";
import EduHubImage3 from "../assets/edu-hub3@2x.png";

export default function EducationalHubPage() {
  return (
    <Grid container spacing={2} sx={{margin: "40px"}}>
      <Grid item md={12}>
        
      </Grid>
      <Grid item md={6}>
        <CardMedia
            component="img"
            src={EduHubImage1}
            sx={{borderRadius: 3}}
        />
      </Grid>
      <Grid container item md={6} alignItems="center" direction="column" justifyContent="space-around">
        <Typography variant="h4" component="h4">Digital Courses</Typography>
        <Typography>Take your skills and knowledge to the next step by getting certified</Typography>
        <Typography><Button variant="contained" color="primary">Add to Cart</Button></Typography>
      </Grid>
      <Grid container item md={6} alignItems="center" direction="column" justifyContent="space-around">
        <Typography variant="h4" component="h4">Audio Books</Typography>
        <Typography>Listen and learn on the go when you're pressed for time</Typography>
        <Typography><Button variant="contained" color="primary">Add to Cart</Button></Typography>
      </Grid>
      <Grid item md={6}>
        <CardMedia
            component="img"
            src={EduHubImage2}
            alt="Recents"
        />
      </Grid>
      <Grid item md={6}>
        <CardMedia
            component="img"
            src={EduHubImage3}
            alt="Recents"
        />
      </Grid>
      <Grid container item md={6} alignItems="center" direction="column" justifyContent="space-around">
        <Typography variant="h4" component="h4">Certifications</Typography>
        <Typography>Educate yourself on the significance of NFTs, decentralization, and how this is revolutionary for creative types</Typography>
        <Typography><Button variant="contained" color="primary">Add to Cart</Button></Typography>
      </Grid>
    </Grid>
  );
}

