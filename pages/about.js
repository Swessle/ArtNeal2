import React, { Component } from "react"
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layout/Layout";
import nealImage from "../public/static/images/about/nealProfile.jpg"
import Particles from 'react-particles-js'
import backImage from "../public/static/images/about/hardWoodback.jpg"

const particleOptions = {
    "particles": {
      "color": {
        "value": ["#778899","#FF4500","#4169E1","#FFD700"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 11,
          "color": "#FFFFFF"
        }
      },
      "opacity": {
        "value": 0.5211089197812949,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 8,
          "sync": false
        }
      },
      "size": {
        "value": 8.017060304327615,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 12.181158184520175,
          "size_min": 6,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FFFFFF",
        "opacity": 9,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 8
          }
        },
        "bubble": {
          "distance": 600,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 600,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  
    }
export default class about extends Component {
    render() {
        return (
            <Layout>
                
                <Container>
                
                    <Flex justifyContent="center">
                        <Box>
                            <TextContainer>
                                <AboutHeader>About Neal</AboutHeader>
                            </TextContainer>
                        </Box>
                    </Flex>
                    <Flex justifyContent="center" display="flex">
                    <Particles params={particleOptions}/>
                        <Box width={"75%"}>
                            <ImgContainer>
                            
                                <Image src={nealImage}></Image>
                            </ImgContainer>
                        </Box>
                        
                        <Box width={"100%"}>
                        <Particles params={particleOptions}/>
                            <p style={{ color:'white', fontSize: '25px',marginBottom:'10px'}}>
                                All my life I have been blessed with a beautiful and
                            interesting life. I’ve traveled extensively and lived in
                            scenic and wonderful places. I’ve been surrounded by a
                            loving family, lifelong friends and amazing
                            opportunities. My art is a reflection of the wondrous
                            life I have lived and I’m grateful every day for all the
                            people and circumstances that have shaped my life.
                            Welcome to my website and I hope you enjoy seeing my
                            paintings as much as I have enjoyed creating them.
                            </p>
                        </Box>
                        <Particles params={particleOptions}/>
                    </Flex>
                    
                </Container>
                
            </Layout>
            
        )
    }
}


const Container = styled.div`
    background-image: url(${backImage});
    padding-top: auto;
    width:auto;
    height:auto;
    background-repeat: no-repeat;
    background-size: cover;
`;
const ImgContainer = styled.div`
    
    padding-top: 350px;
    margin-left:120px;
`;
const TextContainer = styled.div`
  
`;
const AboutHeader = styled.h1`
    
    padding: 50px;
    color: white;
    font-size 50px;
`;
const Image = styled.img`
    
    height: auto;
    width: 20vw;
`;