module.exports = {
	presets: [
		[
			"@babel/preset-env",
			// for using corejs for polyfilling
			{
				debug: true, // for debugging
				useBuiltIns: "usage", // only imports methods we used
				corejs: 3.8, // use whatever version we have installed. look at core-js website for info. babel will use by default 2.x
			},
		],
	], // gives us some standards to transpile our js files.
};
