import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Typography, Container, Box, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import sampleA from "./assets/sampleA.jpg"
import profile from "./assets/profile.png"
import ericMedina from "./assets/Eric_Medina2.jpg"
import jeremySelwin from "./assets/Jeremy_Selwin2.jpg"
import matthewKompel from "./assets/Matthew_Kompel.jpg"
import michaelKwon from "./assets/Michael_Kwon.png"
import mingjunGao from "./assets/Mingjun_Gao.jpg"
import water from "./assets/water.png"
import mouse from "./assets/mouse.png"
import logo from "./assets/logo.png"
import Navbar from './Navbar';
//yoyoyoyo
function App() {
  const assignmentCards = [
    { name: 'A1', description: "Click for our report on the conceptual architecture of Kodi", image: sampleA, url: "https://docs.google.com/document/d/15sj4rBZBXPSOht_14rN7EKOxPW_YybHypb4BpEE_IsI/edit?usp=sharing" },
    { name: 'A2', description: "Enter assignment/video description here:", image: sampleA, url: "" },
    { name: 'A3', description: "Enter assignment/video description here:", image: sampleA, url: "" },
    { name: 'A1 Video', description: "Click for our presentation on the conceptual architecture of Kodi", image: sampleA, url: "https://www.youtube.com/watch?v=2CvGBcM8BqE&ab_channel=MichaelKwon" },
    { name: "A2 Video", description: "Enter assignment/video description here:", image: sampleA, url: "" },
    { name: "A3 Video", description: "Enter assignment/video description here:", image: sampleA, url: "" }
  ];

  const contactCards = [
    { name: "Matthew Kompel", email: "19mpk@queensu.ca", photo: matthewKompel },
    { name: "Jeremy Selwin", email: "19jcs11@queensu.ca", photo: jeremySelwin },
    { name: "Eric Medina", email: "20eam22@queensu.ca", photo: ericMedina },
    { name: "Mingjun Gao", email: "21mg37@queensu.ca", photo: mingjunGao },
    { name: "Michael Kwon", email: "18mk105@queensu.ca", photo: michaelKwon },
    { name: "Matthew Sun", email: "20ms154@queensu.ca", photo: profile },
  ]

  const homeRef = useRef(null)
  const assignmentRef = useRef(null)
  const contactRef = useRef(null)

  const handleCardClick = (link) => {
    window.open(link, '_blank')
  }

  return (
    <div style={{ backgroundColor: "#494D60" }}>
      <Navbar
        homeRef={homeRef}
        assignmentRef={assignmentRef}
        contactRef={contactRef}
      />
      <div ref={homeRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
        <Container sx={{ padding: 7 }} maxWidth="xl">
          <Grid container style={{ width: '100%', backgroundColor: '#2393BF', borderRadius: '20px' }}>

            {/*Hamster Logo*/}
            <Grid xs={4} style={{ height: "auto", display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
              <Box
                sx={{ textAlign: 'center', width: '50%', marginTop: '2%', backgroundColor: "#2393BF", borderRadius: '20px' }}
              >
                <div style={{ marginLeft: "50px", marginTop: "50px", marginBottom: "50px" }}>
                  <img src={mouse} width="350" height="400"></img>
                </div>
              </Box>
            </Grid>

            {/*Company name with water spray above and below*/}
            <Grid xs={4} style={{ height: "auto", display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
              <Box
                sx={{ textAlign: 'center', width: '50%', marginTop: '1%', backgroundColor: "#2393BF", borderRadius: '20px' }}
              >
                <div>
                  <img src="https://see.fontimg.com/api/renderfont4/OVOe8/eyJyIjoiZnMiLCJoIjoxMzYsInciOjIwMDAsImZzIjo2OCwiZmdjIjoiIzE0REFGRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/S09ESQ/thewave-regular.png" width="400" height="100" alt="Wavy fonts"></img>
                </div>
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <img src={water} width="400"></img>
                </div>
                <div>
                  <img src="https://see.fontimg.com/api/renderfont4/OVOe8/eyJyIjoiZnMiLCJoIjoxMzYsInciOjIwMDAsImZzIjo2OCwiZmdjIjoiIzE0REFGRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/Q1JBWlk/thewave-regular.png" width="400" height="100" alt="Wavy fonts"></img>
                </div>
              </Box>
            </Grid>

            {/*Kodi and Kodi Crazy Logo*/}
            <Grid xs={4} style={{ height: "auto", display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
              <Box
                sx={{ textAlign: 'center', width: '50%', marginTop: '2%', backgroundColor: "#2393BF", borderRadius: '20px' }}
              >
                <div style={{ marginLeft: "50px", marginTop: "50px", marginBottom: "50px" }}>
                  <img src={logo} width="300" height="300"></img>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div ref={assignmentRef}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <Box
            sx={{ textAlign: 'center', width: '50%', marginTop: '2%', backgroundColor: "#2393BF", borderRadius: '20px' }}
          >
            <Typography variant="h4" color="white" style={{ margin: '10px' }}>
              Assignments
            </Typography>
          </Box>
        </div>
        <Container sx={{ padding: 1 }} maxWidth="xl">
          <Grid container spacing={5} style={{ width: '100%' }}>
            {assignmentCards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4} style={{ height: "auto", display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Card onClick={() => {handleCardClick(card.url)}} style={{ height: '150px', width: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '13px', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'row', backgroundColor: "#2393BF" }}>
                  <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100px",
                        top: '50%',
                        margin: '5%',
                        borderRadius: '10px'
                      }}
                      image={card.image}
                      alt="random"
                    />
                    <CardContent style={{ textAlign: 'left', verticalAlign: 'top', flexGrow: 1, paddingRight: '10px', paddingTop: '30px' }}>
                      <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.31rem', textDecoration: 'none' }} >
                        {card.name}
                      </Typography>
                      <Typography style={{ fontSize: '0.9rem', textDecoration: 'none' }}>
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div ref={contactRef}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '40px' }}>
          <Box
            sx={{ textAlign: 'center', width: '25%', marginTop: '5%', backgroundColor: "#845DB3", borderRadius: '20px' }}
          >
            <Typography variant='h5' color="white" style={{ margin: '10px' }}>
              Contact
            </Typography>
          </Box>
        </div>
        <Container sx={{ padding: 1 }} maxWidth="xl">
          <Grid container spacing={5} style={{ width: '100%' }}>
            {contactCards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={2} style={{ height: "auto", display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <Card style={{ height: '225px', width: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '13px', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'column', backgroundColor: "#845DB3", marginBottom: '10px' }}>
                  <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardContent >
                      <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', fontSize: '1.01rem' }} color="white">
                        {card.name}
                      </Typography>

                    </CardContent>
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100px",
                        marginBottom: '10px'
                      }}
                      image={card.photo}
                      alt="random"
                      style={{width: 100, height: 100, borderRadius: '50%', overflow: 'hidden'}}
                    />
                    <CardContent >
                      <Typography variant="h5" component="h5" style={{ fontWeight: 'bold', fontSize: '1.01rem' }} color="white">
                        {card.email}
                      </Typography>

                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>

  );
}

export default App;
