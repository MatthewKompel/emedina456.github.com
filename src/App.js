import './App.css';
import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, Grid, Card, CardActionArea, CardMedia, CardContent} from '@mui/material';
import sampleA from "./assets/sampleA.jpg"
import profile from "./assets/profile.png"

function App() {
  const assignmentCards = [
    {name: 'A1', description: "Enter assignment/video description here:", link: sampleA},
    {name: 'A2',  description: "Enter assignment/video description here:", link: sampleA},
    {name: 'A3',  description: "Enter assignment/video description here:", link: sampleA},
    {name: 'A1 Video',  description: "Enter assignment/video description here:", link: sampleA},
    {name: "A2 Video",  description: "Enter assignment/video description here:", link: sampleA},
    {name: "A3 Video",  description: "Enter assignment/video description here:", link: sampleA}
  ];

  const contactCards = [
    {name: "Matthew Kompel", email: "19mpk@queensu.ca", photo: profile},
    {name: "Jeremy Selwin", email: "sample@queensu.ca", photo: profile},
    {name: "Eric Medina", email: "sample@queensu.ca", photo: profile},
    {name: "Mingjun Gao", email: "sample@queensu.ca", photo: profile},
    {name: "Michael Kwon", email: "sample@queensu.ca", photo: profile},
    {name: "Matthew Sun", email: "sample@queensu.ca", photo: profile},
  ]

  return (
    <div style = {{backgroundColor: "#494D60"}}>
      <div style ={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom: '20px'}}>
      <Box 
            sx = {{textAlign: 'center', width: '50%', marginTop: '2%', backgroundColor: "#2393BF", borderRadius: '20px' }}
      >
        <Typography variant = "h4" color = "white" style = {{margin: '10px'}}>
          Assignments
        </Typography>
      </Box>
      </div>
      <Container sx={{ padding: 1}} maxWidth="xl">
          <Grid container  spacing = {5} style={{width: '100%'}}>
            {assignmentCards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4} style={{ height: "auto", display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Card style={{ height:'150px', width: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '13px', justifyContent: 'flex-start' ,alignItems: 'flex-start', display: 'row', backgroundColor: "#2393BF"}}>
                  <CardActionArea sx = {{height: '100%',  display: 'flex', flexDirection: 'row',  justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100px",
                        top: '50%',
                        margin: '5%',
                        borderRadius: '10px'
                      }}
                      image={card.link}
                      alt="random"
                    />
                    <CardContent style={{ textAlign: 'left', verticalAlign: 'top', flexGrow: 1, paddingRight: '10px', paddingTop: '30px'}}>
                      <Typography gutterBottom variant="h5" component="h2" style = {{fontWeight: 'bold', fontSize: '1.31rem', textDecoration: 'none'}} >
                        {card.name}
                      </Typography>
                      <Typography style = {{fontSize: '0.9rem', textDecoration: 'none'}}>
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div style ={{display:'flex', justifyContent:'center', alignItems:'center', margin: '40px'}}>
          <Box 
                sx = {{textAlign: 'center', width: '25%', marginTop: '5%', backgroundColor: "#845DB3", borderRadius: '20px' }}
          >
            <Typography variant='h5' color = "white" style = {{margin: '10px'}}>
              Contact
            </Typography>
          </Box>
      </div>
      <Container sx={{ padding: 1}} maxWidth="xl">
          <Grid container  spacing = {5} style={{width: '100%'}}>
            {contactCards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={2} style={{ height: "auto", display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <Card style={{ height:'180px', width: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '13px', justifyContent: 'flex-start' ,alignItems: 'flex-start', display: 'column', backgroundColor: "#845DB3", marginBottom:'10px'}}>
                  <CardActionArea sx = {{height: '100%',  display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}}>
                    <CardContent >
                      <Typography variant="h5" component="h2" style = {{fontWeight: 'bold', fontSize: '1.01rem'}}  color = "white">
                        {card.name}
                      </Typography>
              
                    </CardContent>
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100px",
                        marginBottom:'10px'
                      }}
                      image={card.photo}
                      alt="random"
                    
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
      
  );
}

export default App;
