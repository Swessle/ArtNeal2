import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layout/Layout";
import Masonry from "react-masonry-component";
import LazyLoad from "react-lazyload";

import galleryPics from "../components/Gallery/gallery.json";

export default class gallery extends Component {
	state = {
		pics: galleryPics,
		filteredPics: galleryPics,
		imagesLoaded: false
	};
	componentDidMount() {
		this.setState({
			filteredPics: this.state.pics
		});
	}
	handleLoadImages = () => {
		this.setState({
			imagesLoaded: true
		});
	};
	handleClickedAll = () => {
		this.setState({
			filteredPics: this.state.pics,
			imagesLoaded: false
		});
	};
	handleClickedJazz = () => {
		this.setState({
			filteredPics: this.state.pics.filter(e => e.category === "Jazz"),
			imagesLoaded: false
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
			filteredPics: this.state.pics.filter(e => e.category === "Nudes")
		});
	};
	render() {
		const masonryOptions = {
			transitionDuration: 200
		};
		const picsList = this.state.filteredPics.map((pic, i) => {
			return (
				<LazyLoad throttle={300} height="100%">
					<ImageContainer key={i}>
						<Image rel="preload" src={pic.image} />
					</ImageContainer>
				</LazyLoad>
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
					<Gallery
						options={masonryOptions}
						updateOnEachImageLoad={true}
						onImagesLoaded={this.handleLoadImages}
						loaded={this.state.imagesLoaded}
					>
						{picsList}
					</Gallery>
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
	visibility: none;
	${props =>
		props.loaded &&
		css`
			visibility: visible;
		`}
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
