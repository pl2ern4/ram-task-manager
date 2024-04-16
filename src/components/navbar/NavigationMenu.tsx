import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useGlobalContext } from '@/context/application';

const LOGONAME = "RAM TASK MANAGER";

const NavigationMenu = () => {
  const {boardName, setOpenCreateTicket} = useGlobalContext();
  const ButtonStyle={ 
    backgroundColor:'#1976d2' ,
    color:'#fff', 
    borderColor: '#fff', 
    position: 'absolute', 
    right:0}
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AssignmentIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {LOGONAME}
          </Typography>
          {boardName && <Button 
            variant="outlined" 
            onClick={()=>setOpenCreateTicket(true)}
            sx={ButtonStyle}>
              Create Task
          </Button>}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AssignmentIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {LOGONAME}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationMenu;
