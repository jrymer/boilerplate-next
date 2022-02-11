import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ROUTES } from '../../lib/routes';
import StyledLink from '../common/StyledLink';

const AppBar: React.FC = () => (
  <Box id="app_bar">
    <MuiAppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <StyledLink displayText="News" to={ROUTES.NEWS} />
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <StyledLink displayText="Home" to={ROUTES.HOME} />
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </MuiAppBar>
  </Box>
);

export default AppBar;
