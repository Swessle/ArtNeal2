import React, { Component } from "react";
import Link from "next/link";
import { Flex, Box } from "reflexbox";
import styled, { css, keyframes } from "styled-components";

export default class Navbar extends Component {
	render() {
		return (
			<Nav>
				<Flex justifyContent="center">
					<Box>
						<NavList>
							<NavItem>
								<Link href="/gallery">
									<NavLink>Gallery</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/about">
									<NavLink>About</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/contact">
									<NavLink>Contact</NavLink>
								</Link>
							</NavItem>
						</NavList>
					</Box>
				</Flex>
			</Nav>
		);
	}
}

const Nav = styled.nav`
	width: 100%;
	height: 64px;
	z-index: 9;
	position: absolute;
`;

const NavList = styled.ul`
	margin-top: 23px;
	list-style-type: none;
	padding: 0px !important;
`;

const NavItem = styled.li`
	display: inline-block;
	&:hover:after {
		width: 100%;
		right: 0;
	}
	&:after {
		bottom: 5px;
		content: "";
		display: block;
		height: 2px;
		right: 0;
		background: white;
		transition: width 0.5s ease 0s, right 0.25s ease 0s;
		width: 0;
	}
`;

const NavLink = styled.a`
	margin: 0px 20px;
	color: white;
	cursor: pointer;
	font-weight: 700;
	font-size: 18px;
	letter-spacing: 4px;
`;

const NavUnderline = styled.div`
	&:hover:after {
		width: 100%;
		right: 0;
	}
	&:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 5px;
		content: "";
		display: block;
		height: 2px;
		right: 0;
		position: absolute;
		background: white;
		transition: width 1s ease 0s, right 0.5s ease 0s;
		width: 0;
	}
`;
