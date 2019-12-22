const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

module.exports = withPlugins([
	[
		optimizedImages,
		{
			handleImages: ["jpeg"],
			optimizeImages: true,
			optimizeImagesInDev: true,
			mozjpeg: {
				quality: 5
			}
		}
	],
	[withCSS]
]);
