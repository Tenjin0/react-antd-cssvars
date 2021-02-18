const peerDepsExternal = require("rollup-plugin-peer-deps-external")
const {nodeResolve} = require("@rollup/plugin-node-resolve")
const commonjs = require("@rollup/plugin-commonjs")
const typescript = require("rollup-plugin-typescript2")
const postcss = require("rollup-plugin-postcss")
const del = require('rollup-plugin-delete');

const packageJson = require("./package.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
		postcss({
			minimize: true,
			modules: true,
			use: {
					sass: null,
					stylus: null,
					less: { javascriptEnabled: true }
			},
			extract: true
		})
  ]
};
