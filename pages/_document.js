import React, { Fragment } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () => {
				return originalRenderPage({
					enhanceApp: App => props =>
						sheet.collectStyles(<App {...props} />)
				});
			};
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<Fragment>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</Fragment>
				)
			};
		} finally {
			sheet.seal();
		}
	}
}
