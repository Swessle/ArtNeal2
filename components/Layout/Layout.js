import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import styled, { css, keyframes } from "styled-components";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>ArtNeal</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
				<meta name="description" content="ArtNeal" />
				<link
					href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Navbar />
			{children}
		</>
	);
}
