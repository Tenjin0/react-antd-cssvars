const postcss = require("rollup-plugin-postcss")

const packageJson = require("./package.json");

module.exports = {
  input: "lib/style.less",
	output: [
    {
      file:packageJson.dir + "/style.css",
      format: "es",
    }
  ],
  plugins: [
		postcss({
			minimize: true,
			modules: true,
			use: {
					sass: null,
					stylus: null,
					less: { javascriptEnabled: true }
			},
			config: {
				sourceMap: {
					sourcesContent: true
				}
			},
			extract: true

		})
  ]
};
