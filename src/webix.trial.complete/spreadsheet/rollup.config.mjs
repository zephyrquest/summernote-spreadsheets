import { createRequire } from "node:module";

import less from "rollup-plugin-less";
import babel from "@rollup/plugin-babel";
import eslint from "@rollup/plugin-eslint";
import common from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default function (cli) {
	const require = createRequire(import.meta.url);
	const pkg = require("./package.json");

	const name = pkg.productTag;
	const mode = cli["config-mode"] || "fast";
	const outname = cli["config-name"] || (mode === "min" ? `${name}.min` : name);
	const skin = cli["config-skin"] || "material";

	const out = {
		treeshake: false,
		input: `sources/${name}.js`,
		output: {
			file: `codebase/${outname}.js`,
			format: "umd",
			name,
			sourcemap: false,
			banner: `/*\n@license\r\nWebix ${pkg.productName} v.${pkg.version}\r\nThis software is covered by Webix Commercial License.\r\nUsage without proper license is prohibited.\r\n(c) XB Software Ltd.\n*/`
		},
		watch: {
			chokidar: false,
			include: "sources/**/*.js",
		},
	};

	out.plugins = [
		less({
			output: `codebase/${name}.css`,
			option: {
				paths: [`./sources/css/skins/${skin}`],
			},
		}),
		resolve({ mainFields: ["module", "main"] }),
		common({}),
	];

	if (mode !== "fastest") {
		out.plugins.push(eslint({}));
		out.plugins.push(
			babel({
				exclude: "node_modules/**",
				presets: [
					[
						"@babel/preset-env",
						{
							targets: { ie: "8" },
							exclude: ["transform-function-name"],
						},
					],
				],
				babelHelpers: "bundled",
			})
		);

		if (mode !== "fast") {
			out.output.sourcemap = mode === "normal" || mode === "min";
			out.treeshake = true;
		}
	}

	if (mode === "min") {
		out.output.plugins = [terser()];
	}

	return out;
}
