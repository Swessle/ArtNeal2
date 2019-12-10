import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layout/Layout";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default class index extends Component {
	state = { width: 0, loaded: false };
	updateDimensions = () => {
		this.setState({
			width: window.innerWidth
		});
	};
	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
		this.setState({
			width: window.innerWidth,
			loaded: true
		});
	}
	render() {
		const { width, loaded } = this.state;
		return (
			<Layout>
				<TextContainer>
					<Flex justifyContent="start">
						<Box>
							<SubText>Welcome to</SubText>
						</Box>
					</Flex>
					<Flex justifyContent="center">
						<Box>
							<Text>ArtNeal</Text>
						</Box>
					</Flex>
					<Flex justifyContent="center" alignContent="center" mt={10}>
						<Box height={0} display="flex">
							<Link href="/gallery">
								<Button>View Gallery</Button>
							</Link>
						</Box>
					</Flex>
				</TextContainer>
				<BackgroundContainer mounted={loaded}>
					{width >= 500 && (
						<Background
							accessibility={false}
							arrows={false}
							fade={true}
							autoplay={true}
							draggable={false}
							pauseOnHover={false}
							swipe={false}
							autoplaySpeed={4000}
						>
							<div>
								<Image
									src={require("../public/static/images/cities/birdFlight.jpg")}
								/>
							</div>
							<div>
								<Image
									src={require("../public/static/images/portrait/2menInstrument.jpg")}
								/>
							</div>
							<div>
								<Image
									src={require("../public/static/images/cities/horseRoad.jpg")}
								/>
							</div>
						</Background>
					)}
					{width < 500 && (
						<Background
							accessibility={false}
							arrows={false}
							fade={true}
							autoplay={true}
							draggable={false}
							pauseOnHover={false}
							swipe={false}
							autoplaySpeed={4000}
						>
							<div>
								<Image
									src={require("../public/static/images/jazz/jazzPortrait1.jpg")}
								/>
							</div>
							<div>
								<Image
									src={require("../public/static/images/portrait/womenPortrait.jpg")}
								/>
							</div>
							<div>
								<Image
									src={require("../public/static/images/beach/beachPortrait.jpg")}
								/>
							</div>
						</Background>
					)}
				</BackgroundContainer>
			</Layout>
		);
	}
}

const BackgroundContainer = styled.div`
	opacity: 0;
	transition: opacity 1.5s ease;
	${props =>
		props.mounted &&
		css`
			opacity: 1;
		`}
`;

const Background = styled(Slider)`
	z-index: -1;
	background: black;
	height: 100vh;
	.slick-slide {
		height: 100vh;
	}
	.slick-active img {
		transform: scale(1, 1);
	}
`;

const Image = styled.img`
	transition: 3s;
	transform: scale(3, 3);
	width: 100%;
	height: 100vh;
	object-fit: cover;
	filter: brightness(40%);
	pointer-events: none;
`;

const TextContainer = styled.div`
	z-index: 100;
	position: absolute;
	font-size: 90px;
	font-weight: 700;
	margin-left: auto;
	margin-right: auto;
	left: 50%;
	transform: translateX(-50%);
	bottom: 50%;
	width: 300px;
`;

const Text = styled.h1`
	font-size: 90px;
	font-weight: 700;
	margin: 0;
	width: 100%;
	text-align: center;
	color: white;
`;

const SubText = styled.h2`
	font-size: 20px;
	font-weight: 700;
	margin: 0;
	width: 100%;
	text-align: center;
	color: white;
	opacity: 0.8;
`;

const Button = styled.button`
	font-size: 20px;
	font-weight: 700;
	margin: 0;
	height: 45px;
	width: 220px;
	color: black;
	transition: background 0.2s;
	letter-spacing: 4px;
	&:hover {
		color: white;
		background: transparent;
		border: 3px solid white;
	}
`;
