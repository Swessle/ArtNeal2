import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layout/Layout";
import Masonry from "react-masonry-component";
import galleryPics from "../components/Gallery/gallery.json";

export default class gallery extends Component {
	state = {
		pics: galleryPics,
		filteredPics: galleryPics
	};
	componentDidMount() {
		console.log(galleryPics);
		this.setState({
			filteredPics: this.state.pics
		});
	}
	handleClickedAll = () => {
		this.setState({
			filteredPics: this.state.pics
		});
	};
	handleClickedJazz = () => {
		this.setState({
			filteredPics: this.state.pics.filter(e => e.category === "Jazz")
		});
	};
	handleClickedPortrait = () => {
		this.setState({
			filteredPics: this.state.pics.filter(e => e.category === "Portrait")
		});
	};
	handleClickedAbstract = () => {
		this.setState({
			filteredPics: this.state.pics.filter(e => e.category === "Abstract")
		});
	};
	handleClickedBeach = () => {
		this.setState({
			filteredPics: this.state.pics.filter(e => e.category === "Beach")
		});
	};
	handleClickedCity = () => {
		this.setState({
			filteredPics: this.state.pics.filter(e => e.category === "City")
		});
	};
	handleClickedNudes = () => {
		this.setState({
			filteredPics: this.state.pics.filter(e => e.category === "Nude")
		});
	};
	render() {
		const masonryOptions = {
			transitionDuration: 200
		};
		const picsList = this.state.filteredPics.map((pic, i) => {
			return (
				<ImageContainer key={i}>
					<Image src={pic.image} />
				</ImageContainer>
			);
		});
		return (
			<Layout>
				<Container>
					<Flex justifyContent="center">
						<Box>
							<button onClick={this.handleClickedAll}>All</button>
							<button onClick={this.handleClickedJazz}>
								Jazz
							</button>
							<button onClick={this.handleClickedPortrait}>
								Portrait
							</button>
							<button onClick={this.handleClickedAbstract}>
								Abstract
							</button>
							<button onClick={this.handleClickedBeach}>
								Beach Scenes
							</button>
							<button onClick={this.handleClickedCity}>
								City Scenes
							</button>
							<button onClick={this.handleClickedNudes}>
								Nudes
							</button>
						</Box>
					</Flex>
					<Gallery options={masonryOptions}>{picsList}</Gallery>
				</Container>
			</Layout>
		);
	}
}

const Container = styled.div`
	padding-top: 100px;
`;

const Gallery = styled(Masonry)`
	padding-top: 100px;
	width: 90%;
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px;
	
	display: table;
`;
const ImageContainer = styled.div`
	padding: 10px;
	float: left;
	@media (min-width: 1200px) {
		width: 31%;
	}
`;
const Image = styled.img`
	padding: 20px;
	&:after {
		padding-top: 100%;
		display: block;
		content: "";
	}
	max-width: 100%;
	height: auto;
`;
