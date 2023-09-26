import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import logo from "./assets/logo.png"
function Navbar({homeRef, assignmentRef, contactRef}) {
    const scrollToRef = (ref) => {
        console.log(ref)
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    const FUTURE_SENSATIONAL="https://www.youtube.com/watch?v=3JiUJm3sAv8"
    return (
        <AppBar position="sticky" style={{ top: 0, zIndex: 1000 }} sx={{ backgroundColor: '#2393BF' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Button onClick={() => scrollToRef(homeRef)} color="inherit" style={{ textTransform: 'none' }}>
                    <Typography variant="h5" color="white" fontWeight='600' style={{ margin: '10px' }}>
                        Home
                    </Typography>
                </Button>
                <Button onClick={() => scrollToRef(assignmentRef)} color="inherit" style={{ textTransform: 'none' }}>
                    <Typography variant="h5" color="white" fontWeight='600' style={{ margin: '10px' }}>
                        Assignments
                    </Typography>
                </Button>
                <Button onClick={() => scrollToRef(contactRef)} color="inherit" style={{ textTransform: 'none' }}>
                    <Typography variant="h5" color="white" fontWeight='600' style={{ margin: '10px' }}>
                        Contact
                    </Typography>
                </Button>
                {/* Click the icon in the navbar at your own risk :D */}
                <a href={FUTURE_SENSATIONAL}><img src={logo} width="50" height="50"></img></a>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;


