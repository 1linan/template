const CracoLessPlugin = require("craco-less");
const { loaderByName } = require("@craco/craco");
const path = require("path");

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
    },
    configure: {
      ignoreWarnings: [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes("node_modules") &&
            warning.details &&
            warning.details.includes("source-map-loader")
          );
        },
      ],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessModuleRule(lessModuleRule) {
          // Configure the file suffix
          lessModuleRule.test = /.module.less$/;

          // Configure the generated local ident name.
          console.log(lessModuleRule);
          const cssLoader = lessModuleRule.use.find(loaderByName("css-loader"));
          cssLoader.options.modules = {
            localIdentName: "[local]_[hash:base64:5]",
          };

          return lessModuleRule;
        },
      },
    },
  ],
};
