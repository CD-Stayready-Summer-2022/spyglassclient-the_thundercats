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


function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit">SpyGlass Financial Planner</Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

const theme = createTheme();

export function UpdateGoal() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            goalName: data.get('goalName'),
            targetGoal: data.get('targetGoal'),
            savedBalance: data.get('savedBalance'),
            goalImage: data.get('goalImage'),
        });
    };

  return (
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
            Update Goal
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
  );
}
