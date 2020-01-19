import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layout/Layout";
import Masonry from "react-masonry-component";
import galleryPics from "../components/Gallery/Gallery";

export default class gallery extends Component {
  constructor(props) {
    super(props);
    this.handleLayoutReady = this.handleLayoutReady.bind(this);
  }
  state = {
    pics: galleryPics,
    filteredPics: galleryPics,
    layoutReady: false
  };
  componentDidMount() {
    this.setState({
      filteredPics: this.state.pics
    });
  }
  componentDidUpdate() {
    console.log("updated");
  }
  componentWillReceiveProps() {
    this.masonry.performLayout();
  }
  handleLoadImages = () => {
    this.setState({
      layoutReady: true
    });
  };
  handleClickedAll = () => {
    this.setState({
      filteredPics: this.state.pics,
      layoutReady: false
    });
  };
  handleClickedJazz = () => {
    this.setState({
      filteredPics: this.state.pics.filter(e => e.category === "Jazz"),
      layoutReady: false
    });
  };
  handleClickedPortrait = () => {
    this.setState({
      filteredPics: this.state.pics.filter(e => e.category === "Portrait"),
      layoutReady: false
    });
  };
  handleClickedAbstract = () => {
    this.setState({
      filteredPics: this.state.pics.filter(e => e.category === "Abstract"),
      layoutReady: false
    });
  };
  handleClickedBeach = () => {
    this.setState({
      filteredPics: this.state.pics.filter(e => e.category === "Beach"),
      layoutReady: false
    });
  };
  handleClickedCity = () => {
    this.setState({
      filteredPics: this.state.pics.filter(e => e.category === "City"),
      layoutReady: false
    });
  };
  handleClickedNudes = () => {
    this.setState({
      filteredPics: this.state.pics.filter(e => e.category === "Nude"),
      layoutReady: false
    });
  };
  handleLayoutReady() {
    if (!this.state.layoutReady) {
      this.setState({ layoutReady: true });
      console.log("asdf");
    }
  }
  handleReady() {
    return console.log("ready");
  }
  render() {
    const masonryOptions = {
      transitionDuration: 750,
      stagger: 0,
      initLayout: false
    };
    const picsList = this.state.filteredPics.map((pic, i) => {
      return (
        <ImageContainer>
          <Image rel="preload" key={i} src={pic.image} style={{ zIndex: -i }} />
        </ImageContainer>
      );
    });
    return (
      <Layout>
        <Container>
          <Flex justifyContent="center">
            <Box>
              <Button onClick={this.handleClickedAll}>All</Button>

              <Button onClick={this.handleClickedJazz}>Jazz</Button>

              <Button onClick={this.handleClickedPortrait}>Portrait</Button>

              <Button onClick={this.handleClickedAbstract}>Abstract</Button>

              <Button onClick={this.handleClickedBeach}>Beach Scenes</Button>

              <Button onClick={this.handleClickedCity}>City Scenes</Button>

              <Button onClick={this.handleClickedNudes}>Nudes</Button>
            </Box>
          </Flex>
          <Gallery
            options={masonryOptions}
            updateOnEachImageLoad={false}
            onImagesLoaded={this.handleLayoutReady.bind(this)}
            onLayoutComplete={this.handleReady}
            ref={c => (this.masonry = c)}
          >
            {this.state.layoutReady && picsList}
          </Gallery>
        </Container>
      </Layout>
    );
  }
}

const Button = styled.button`
  color: white;
  border: 1px solid white;
  background: transparent;
  height: 50px;
  width: 100px;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
`;

const Container = styled.div`
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Gallery = styled(Masonry)`
  padding-top: 100px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: table;
  transition: opacity 0.5s;
  visibility: visible;
  opacity: 1;
  ${props =>
    props.loaded &&
    css`
      visibility: visible;
      opacity: 1;
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
  max-height: 100%;
  height: auto;
`;
