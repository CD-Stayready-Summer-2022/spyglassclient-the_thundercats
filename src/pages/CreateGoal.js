import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageUpload from './ImageUpload';
import GlobalStyles from "@mui/material/GlobalStyles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createGoal } from '../services/GoalAPIServices';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit">SpyGlass Financial Goal Planner</Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

const theme = createTheme();

export function CreateGoal() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userId = sessionStorage.getItem('userId'); 
        
        const goal = {
            "nameOfGoal": data.get('goalName'),
            "descriptionOfGoal": "this is the description",
            "iconPicture": "picture",
            "endDate": "2022-08-04",
            "startingDollarAmount": 0.00,
            "targetDollarAmount": 100.00,
            "currentDollarAmount": data.get('savedBalance'),
            "contributionFrequency": "WEEKLY"
        }
        createGoal(goal, userId).then(data => {
          console.log(data);
          navigate("/allgoals");
        }); 
        console.log({
            goalName: data.get('goalName'),
            targetGoal: data.get('targetGoal'),
            savedBalance: data.get('savedBalance'),
            goalImage: data.get('goalImage'),
        });
    };

  return (
    <React.Fragment>
    <GlobalStyles
      styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
    />
    <CssBaseline />
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <img src="spyglass.png" />
        </Typography>
        <nav>
         <Link
            variant="button"
            color="text.primary"
            href="/allgoals"
            sx={{ my: 1, mx: 1.5 }}
          >
            See All Goals
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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Create New Goal
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <ImageUpload></ImageUpload>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="goalName"
                  label="Goal Name"
                  name="goalName"
                />
              </Grid>
          
              <Grid item xs={12} sm={6}>
                <TextField
                name="goalTarget"
                required
                fullWidth
                id="goalTarget"
                label="Goal Target"
                autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="savedBalance"
                  label="Saved Balance"
                  name="savedBalance"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          required
          fullWidth
          rows={4}
          defaultValue="Description"
        />
              </Grid>
            </Grid>
            <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </React.Fragment>
  );
}