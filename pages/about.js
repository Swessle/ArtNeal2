import React, { Component } from "react"
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layout/Layout";
import nealImage from "../public/static/images/about/nealProfile.jpg"



export default class about extends Component {
  render() {
    return (
      <Layout>

        <Container>

          <Flex justifyContent="center">
            <Box>
              <div>
                <AboutHeader>About <NealText>Neal</NealText></AboutHeader>
              </div>
            </Box>
          </Flex>
          <AboutFlex justifyContent="center">
            <AboutBox px={2} py={2} width={1 / 4}>
              <div>
                <Image src={nealImage}></Image>
              </div>
            </AboutBox>
            <AboutBox px={2} py={2} width={1 / 2}>
              <AboutText>
                All my life I have been blessed with a beautiful and
                interesting life. I’ve traveled extensively and lived in
                scenic and wonderful places. I’ve been surrounded by a
                loving family, lifelong friends and amazing opportunities.
                My art is a reflection of the wondrous
                life I have lived and I’m grateful every day for all the
                people and circumstances that have shaped my life.
                Welcome to my website and I hope you enjoy seeing my
                paintings as much as I have enjoyed creating them.
              </AboutText>
              <p style={{ color: 'white', fontSize: '20px', letterSpacing: '2px' }}>Contact - <a style={{ color: '#0fbcf9' }} href="#">neabo59@gmail.com</a></p>
            </AboutBox>
          </AboutFlex>

        </Container>

      </Layout>

    )
  }
}


const Container = styled.div`
    
    padding-top: auto;
    width:auto;
    height:auto;
   
`

const AboutFlex = styled(Flex)`
  @media (max-width: 1830px) {
    display: inline;
    text-align: center;
    
  }
`

const AboutBox = styled(Box)`
  @media (max-width: 1830px) {
      margin: auto;
      width: auto;
  }
`

const NealText = styled.span`
  color: #0fbcf9;
`

const AboutHeader = styled.h1`
    padding-top: 120px;
    color: white;
    font-size 100px;
    @media (max-width: 530px) {
      font-size: 80px;
    }
    @media (max-width: 400px) {
      font-size: 65px;
    }
    @media (max-width: 340px) {
      font-size: 45px;
    }
`;
const Image = styled.img`
    border-radius: 25px;
    height: 35vh;
    width: auto;
    @media (max-width: 2080px) {
      width: auto;
      height: 30vh;
      margin-top: 50px;
    }
`;

const AboutText = styled.p`
    color: white;
    font-size: 29px;
    letter-spacing: 2px;
    padding-top: 45px;
    @media (max-width: 844px) {
      font-size: 25px;
    }
`