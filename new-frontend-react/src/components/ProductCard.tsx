import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
/* 
import SteveImage from 'assets/images/steve-johnson.png'; */
export default function ProductCard(props: any) {
    const {product_image} = props;
    return (
        <Card sx={{ maxWidth: 300, borderRadius: 3 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                src={product_image}
                alt="Steve Johnson"
            />
            <CardContent>
                {/* 
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography> */}
                <Grid container>
                    <Grid item md={6}>
                        <Typography align="left" component="div">
                            Product Name
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography align="right" component="div">
                            195
                        </Typography>

                    </Grid>
                    <Grid item md={6}>
                        <Typography align="left" component="div">
                            <AccountCircle/> Username
                        </Typography>
                        
                    </Grid>
                    <Grid item md={6}>
                        <Typography align="right" component="div">
                            <HowToRegOutlinedIcon/>
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography align="left" component="div">
                            $.$$
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography align="right" component="div">
                            <Button color="primary" variant="contained" fullWidth={true}>Bid/Buy it now</Button>
                        </Typography>
                        
                    </Grid>
                </Grid>
            </CardContent>
            </CardActionArea>
        </Card>
    );
  }