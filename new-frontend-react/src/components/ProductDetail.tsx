import * as React from 'react';
import {Grid, Button, Card, CardContent, CardMedia} from '@mui/material';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export default function ProductDetail(props: any) {
    const {product_image} = props;
    return (
        <Grid container spacing={2}>
            <Grid item md={6}>
                <Typography align="right">
                    <CardMedia
                        component="img"
                        src="images/product5.png"
                        alt="Steve Johnson"
                    />
                </Typography>
            </Grid>
            <Grid item container xs={6}>
                <Grid item md={12}>
                    <Typography align="left" variant="h4">
                        Name
                    </Typography>
                </Grid>
                <Grid item container md={6}>
                    <Grid item md={12}>
                        <Typography align="left" component="div">
                            <AccountCircle/> Username
                        </Typography>
                    </Grid>
                    <Grid item container md={12}>
                        <Grid item md={4}>
                            <Typography align="left" component="div">
                                <VisibilityOutlinedIcon/> 5
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography align="left" component="div">
                                195 <ThumbUpAltOutlinedIcon/>
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography align="left" component="div">
                                <HowToRegOutlinedIcon/>
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    
                </Grid>
                <Grid item md={6}>
                    <Button color="inherit" startIcon={<AccountBalanceWalletOutlinedIcon />}>Connect Wallet</Button>
                </Grid>
                <Grid item md={12}>
                    <Typography align="left">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography align="left" variant="h5" component="h5">
                        $.$$
                    </Typography>
                    <Typography align="left">
                        <AccessTimeOutlinedIcon /> Sale ends in 1 day
                    </Typography>
                </Grid>
                <Grid item container md={8}>
                    <Grid item md={6} sx={{padding:"5px"}}>
                        <Button variant="contained" color="primary" fullWidth={true}>Bid</Button>
                    </Grid>
                    <Grid item md={6} sx={{padding:"5px"}}>
                        <Button variant="contained" color="primary" fullWidth={true}>Buy</Button>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    Comment Card
                </Grid>
            </Grid>
        </Grid>
    );
  }