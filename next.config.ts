import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["react-hook-form"],
  webpack(config) {
    // Find the rule that handles scss files
    const scssRule = config.module.rules.find(
      (rule: any) => rule.test && rule.test.toString().includes("scss"),
    );

    if (scssRule) {
      // Find sass-loader in the use array
      const sassLoader = scssRule.use.find(
        (loader: any) =>
          typeof loader === "object" &&
          loader.loader &&
          loader.loader.includes("sass-loader"),
      );

      if (sassLoader) {
        if (!sassLoader.options) {
          sassLoader.options = {};
        }
        if (!sassLoader.options.sassOptions) {
          sassLoader.options.sassOptions = {};
        }
        if (!sassLoader.options.sassOptions.includePaths) {
          sassLoader.options.sassOptions.includePaths = [];
        }
        sassLoader.options.sassOptions.includePaths.push(
          path.resolve(__dirname, "src/asset"),
        );
      }
    }

    // Add postcss-loader to process Tailwind CSS in SCSS files
    config.module.rules.forEach((rule: any) => {
      if (rule.test && rule.test.toString().includes("scss")) {
        if (rule.use && Array.isArray(rule.use)) {
          // Insert postcss-loader after sass-loader
          const sassLoaderIndex = rule.use.findIndex(
            (loader: any) =>
              typeof loader === "object" &&
              loader.loader &&
              loader.loader.includes("sass-loader"),
          );
          if (sassLoaderIndex !== -1) {
            rule.use.splice(sassLoaderIndex + 1, 0, {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  config: path.resolve(__dirname, "postcss.config.mjs"),
                },
              },
            });
          }
        }
      }
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(ts|tsx|js|jsx|md|mdx)$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
