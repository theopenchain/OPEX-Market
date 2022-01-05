import * as React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
/* 
import SteveImage from 'assets/images/steve-johnson.png'; */
export default function ProductListItem(props: any) {
    const {product_image} = props;
    return (
        <Grid container>
            <Grid item md={12} sx={{padding: "10px"}}>
              <Typography align="left" component="div">
                <AccountCircle/> Username
              </Typography>
            </Grid>
            <Grid item container md={12}  sx={{margin: "20px"}}>
              <Grid item md={3} sx={{padding: "10px"}}>
                <CardMedia
                  component="img"
                  /* sx={{ width: 151 }} */
                  image={product_image}
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid item container md={9} sx={{padding: "10px"}}>
                <Grid item md={12}>
                  <Typography align="left" variant="h5" component="h5">
                    Lorem Ipsum Dolor Sit
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography align="left">
                    UsernameLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquym erat, sed diam fds voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography align="left" component="div">
                    <VisibilityOutlinedIcon/> 5
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography align="left" component="div">
                      195 &nbsp;<ThumbUpAltOutlinedIcon />&nbsp;&nbsp;
                      195&nbsp;<ThumbDownAltOutlinedIcon />&nbsp;&nbsp;
                      <ShareOutlinedIcon />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
    );
  }