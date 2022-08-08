import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          SpyGlass Financial Goal Planner
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export function SeeAllGoals() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          targetGoal: data.get('targetGoal'),
          savedBalance: data.get('savedBalance'),
          goalImage: data.get('goalImage'),
        });
    };
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <img src='spyglass.png'/>
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/creategoal"
            sx={{ my: 1, mx: 1.5 }}
          >
            Create New Goal
          </Link>
          {/*<Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Support
    </Link>*/}
   </nav>
      </Toolbar>
    </AppBar>
    <h1><center>All Goals</center></h1>
          <main>
              <Grid container spacing={2} sx={{px:5}}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardHeader
                      title="Goal Name"
                      subheader="Desired End Date: August 6, 2022"/>
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: '50',
                        }}
                        image="https://source.unsplash.com/random"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: "space-between", margin:"5px"}}>
                        <Typography>
                          Target Goal
                        </Typography>
                        <Typography>
                        Goal Balance
                        </Typography>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center',justifyContent: "space-between", margin:"5px"}}>
                        <Typography>
                          <b>$</b>
                        </Typography>
                        <Typography>
                        <b>$</b>
                        </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                        Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" href="/updategoal" >Edit</Button>
                        <Button size="small">Delete</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
          </main>
          {/* Footer */}
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Something here to give the footer a purpose!
            </Typography>
            <Copyright />
          </Box>
          {/* End footer */}
        </ThemeProvider>
      );
    }