
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Stock Dashboard
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Stock Chart
      </Button>
      <Button color="inherit" component={Link} to="/correlation">
        Correlation Heatmap
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;