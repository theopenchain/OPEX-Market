import * as React from 'react';
import {IconButton, Button, Grid, Box, Typography } from '@mui/material';
import {OutlinedInput, InputAdornment} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {NavLink} from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoIcon from "../assets/logo.png";
import LogoText from "../assets/logo_text.png";

export default function AppFooter() {
  let navigator = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item md={2}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          <Box
            component="img"
            sx={{height: 60}}
            alt="Opex"
            src={LogoIcon}
          />
          <Box
            component="img"
            sx={{height: 48}}
            alt="Opex"
            src={LogoText}
          />
        </Typography>
      </Grid>
      <Grid item md={2} container>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/nft-art")}>NFT Art</Button>
        </Grid>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/nft-music")}>NFT Music</Button>
        </Grid>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/nft-sports")}>NFT Sports</Button>
        </Grid>
      </Grid>
      <Grid item md={2}>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/live-auctions")}>Live Auctions</Button>
        </Grid>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/competition")}>Competitions</Button>
        </Grid>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/digital-collectibles")}>Digital Collectibles</Button>
        </Grid>
      </Grid>
      <Grid item md={2}>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/physical-items")}>Physical Items</Button>
        </Grid>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/news")}>News</Button>
        </Grid>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/nft-art-news")}>NFT Art News</Button>
        </Grid>
      </Grid>
      <Grid item md={2}>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/educational-hub")}>Educational Hub</Button>
        </Grid>
        <Grid item md={12}>
          <Button color="inherit" onClick={()=>navigator("/communities")}>Communities</Button>
        </Grid>
      </Grid>
      <Grid item md={2}>
        <Grid item md={12}>
          <Typography>Connect With Us</Typography>
          <IconButton size="large" aria-label="Twitter" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton size="large" aria-label="Facebook" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton size="large" aria-label="Instagram" color="inherit">
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item md={12}>
          <Typography>Newsletter</Typography>
          <OutlinedInput endAdornment={
              <InputAdornment position="end">
                <Button color="inherit">Join</Button>
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

