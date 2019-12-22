const images = [
	{
		id: 1,
		name: "Bird in Flight",
		image: require("../../public/static/images/cities/birdFlight.jpg"),
		category: "City"
	},
	{
		id: 2,
		name: "Bridge at Night",
		image: require("../../public/static/images/cities/bridge.jpg"),
		category: "City"
	},
	{
		id: 3,
		name: "Guitar Portrait",
		image: require("../../public/static/images/guitarPortrait.jpg"),
		category: "Portrait"
	},
	{
		id: 4,
		name: "Old Town Road",
		image: require("../../public/static/images/cities/horseRoad.jpg"),
		category: "City"
	},
	{
		id: 5,
		name: "2 Women",
		image: require("../../public/static/images/womenPortrait.jpg"),
		category: "Portrait"
	},
	{
		id: 6,
		name: "4 Jazz",
		image: require("../../public/static/images/jazzPortrait1.jpg"),
		category: "Jazz"
	},
	{
		id: 7,
		name: "2 Men and Their Instrument",
		image: require("../../public/static/images/2menInstrument.jpg"),
		category: "Jazz"
	},
	{
		id: 8,
		name: "2 Jazz Men",
		image: require("../../public/static/images/2menPortraitBass.jpg"),
		category: "Jazz"
	},
	{
		id: 9,
		name: "Painted Doll House",
		image: require("../../public/static/images/cities/3Dhouse.jpg"),
		category: "City"
	},
	{
		id: 10,
		name: "The Abstract",
		image: require("../../public/static/images/abstract.jpg"),
		category: "Abstract"
	},
	{
		id: 11,
		name: "Mini House",
		image: require("../../public/static/images/cities/3DmodelHouse.jpg"),
		category: "City"
	},
	{
		id: 12,
		name: "Nude Abstract",
		image: require("../../public/static/images/abstractNude.jpg"),
		category: "Abstract"
	},
	{
		id: 13,
		name: "Abstract Water",
		image: require("../../public/static/images/abstractWater.jpg"),
		category: "Abstract"
	},
	{
		id: 14,
		name: "Beach Jetti",
		image: require("../../public/static/images/beachJetti.jpg"),
		category: "Beach"
	},
	{
		id: 15,
		name: "Abstract Water II",
		image: require("../../public/static/images/abstractWater2.jpg"),
		category: "Abstract"
	},
	{
		id: 16,
		name: "The Beach",
		image: require("../../public/static/images/beachPortrait.jpg"),
		category: "Beach"
	},
	{
		id: 17,
		name: "Waterfront Cabinet",
		image: require("../../public/static/images/cabinetWaterfront.jpg"),
		category: "Beach"
	},
	{
		id: 18,
		name: "Cafe",
		image: require("../../public/static/images/cities/cafe.jpg"),
		category: "City"
	},
	{
		id: 19,
		name: "Waterfront Cabinet II",
		image: require("../../public/static/images/cabinetWaterfront5.jpg"),
		category: "Beach"
	},
	{
		id: 20,
		name: "City Life",
		image: require("../../public/static/images/cities/cityLife.jpg"),
		category: "City"
	},
	{
		id: 21,
		name: "Cloud Portrait",
		image: require("../../public/static/images/cloudPortrait.jpg"),
		category: "Portrait"
	},
	{
		id: 22,
		name: "Verdant Boat",
		image: require("../../public/static/images/greenBoat.jpg"),
		category: "Beach"
	},
	{
		id: 23,
		name: "Highway",
		image: require("../../public/static/images/cities/highway.jpg"),
		category: "City"
	},
	{
		id: 24,
		name: "Waves of Horses",
		image: require("../../public/static/images/horseWaves.jpg"),
		category: "Beach"
	},
	{
		id: 25,
		name: "Guitarist Hands",
		image: require("../../public/static/images/jazzCloseUp.jpg"),
		category: "Jazz"
	},
	{
		id: 26,
		name: "Lifeguard Tower",
		image: require("../../public/static/images/lifeguardTower.jpg"),
		category: "Beach"
	},
	{
		id: 27,
		name: "Men and a Horse",
		image: require("../../public/static/images/malePortraits.jpg"),
		category: "Portrait"
	},
	{
		id: 28,
		name: "Minimalist Portrait",
		image: require("../../public/static/images/minimalistPortrait.jpg"),
		category: "Portrait"
	},
	{
		id: 29,
		name: "Mount Rushmore",
		image: require("../../public/static/images/mtRushmore.jpg"),
		category: "City"
	},
	{
		id: 30,
		name: "In Bed",
		image: require("../../public/static/images/nude1.jpg"),
		category: "Portrait"
	},
	{
		id: 31,
		name: "Nude Woman",
		image: require("../../public/static/images/nudePortrait.jpg"),
		category: "Portrait"
	},
	{
		id: 32,
		name: "2 Nude Women",
		image: require("../../public/static/images/nudeWomen.jpg"),
		category: "Portrait"
	},
	{
		id: 33,
		name: "Palm Tree",
		image: require("../../public/static/images/palmTree.jpg"),
		category: "Beach"
	},
	{
		id: 34,
		name: "Life in Paris",
		image: require("../../public/static/images/parisStatue.jpg"),
		category: "City"
	},
	{
		id: 35,
		name: "Plant Life",
		image: require("../../public/static/images/plant.jpg"),
		category: "Portrait"
	},
	{
		id: 36,
		name: "Ancient Life",
		image: require("../../public/static/images/portraitBird.jpg"),
		category: "Portrait"
	},
	{
		id: 37,
		name: "Architecture",
		image: require("../../public/static/images/sideBuilding2.jpg"),
		category: "City"
	},
	{
		id: 38,
		name: "Sunset Waterfront",
		image: require("../../public/static/images/sunsetBoat.jpg"),
		category: "Beach"
	},
	{
		id: 39,
		name: "Sunset in Venice",
		image: require("../../public/static/images/sunsetBoat2.jpg"),
		category: "Beach"
	},
	{
		id: 40,
		name: "A Couple in Sunset",
		image: require("../../public/static/images/sunsetCouple.jpg"),
		category: "Beach"
	},
	{
		id: 41,
		name: "Sailboat Sunset",
		image: require("../../public/static/images/sunsetWaterfront.jpg"),
		category: "Beach"
	},
	{
		id: 42,
		name: "Abstract Waterfront",
		image: require("../../public/static/images/triangleWaterfront.jpg"),
		category: "Beach"
	},
	{
		id: 43,
		name: "Umbrellas",
		image: require("../../public/static/images/umbrella.jpg"),
		category: "City"
	},
	{
		id: 44,
		name: "Jazz in Creation",
		image: require("../../public/static/images/unfinishedJazz.jpeg"),
		category: "Jazz"
	},
	{
		id: 45,
		name: "Waves",
		image: require("../../public/static/images/water2.jpg"),
		category: "Beach"
	},
	{
		id: 46,
		name: "The Waterfront",
		image: require("../../public/static/images/waterfront.jpg"),
		category: "Beach"
	},
	{
		id: 47,
		name: "Water rising",
		image: require("../../public/static/images/waterPainting.jpg"),
		category: "Beach"
	},
	{
		id: 48,
		name: "The Dock",
		image: require("../../public/static/images/waterfrontDock.jpg"),
		category: "Beach"
	},
	{
		id: 49,
		name: "Waves Crashing",
		image: require("../../public/static/images/wavesCrashing.jpg"),
		category: "Beach"
	},
	{
		id: 50,
		name: "A Look and a Sip",
		image: require("../../public/static/images/whitePortrait.jpg"),
		category: "Portrait"
	},
	{
		id: 51,
		name: "White Yacht",
		image: require("../../public/static/images/whiteYacht.jpg"),
		category: "Beach"
	},
	{
		id: 52,
		name: "A Look Back",
		image: require("../../public/static/images/womanPortrait.jpg"),
		category: "Portrait"
	},
	{
		id: 53,
		name: "The Woman",
		image: require("../../public/static/images/womanPortrait2.jpg"),
		category: "Portrait"
	},
	{
		id: 54,
		name: "Woman in the Shadows",
		image: require("../../public/static/images/womanPortrait3.jpg"),
		category: "Portrait"
	},
	{
		id: 55,
		name: "Ancient Art",
		image: require("../../public/static/images/womanPortrait4.jpg"),
		category: "Portrait"
	},
	{
		id: 56,
		name: "Zebras",
		image: require("../../public/static/images/zebraPortrait.jpg"),
		category: "Portrait"
	}
];

export default images