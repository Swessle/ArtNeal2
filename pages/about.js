import React, { Component } from "react"
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layout/Layout";
import nealImage from "../public/static/images/about/Neal.jpg"


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
                        <Box width={"75%"}>
                            <ImgContainer>
                                <Image src={nealImage}></Image>
                            </ImgContainer>
                        </Box>
                        <Box width={"100%"}>
                            <p>
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
                    </Flex>
                </Container>
            </Layout>
        )
    }
}


const Container = styled.div`
	padding-top: 200px;
`;

const ImgContainer = styled.div`
    
`;

const TextContainer = styled.div`
    
`;

const AboutHeader = styled.h1`
    color: white;
    font-size 75px;
`;







const Image = styled.img`
    border: 1px solid white;
    height: auto;
    width: 20vw;
`;