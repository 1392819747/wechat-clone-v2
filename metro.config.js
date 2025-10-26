const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

const baseConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });
const config = withNativewind(baseConfig);

const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: Array.from(new Set([...resolver.sourceExts, "svg", "mjs"])),
};

module.exports = config;
