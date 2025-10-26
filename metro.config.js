const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

const baseConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });
const config = withNativewind(baseConfig);

const { transformer, resolver } = config;
const defaultResolveRequest = resolver.resolveRequest;
const webMapsStub = path.resolve(__dirname, "shims/react-native-maps-web.tsx");

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: Array.from(new Set([...resolver.sourceExts, "svg", "mjs"])),
  resolveRequest(context, moduleName, platform) {
    if (platform === "web" && moduleName === "react-native-maps") {
      return {
        type: "sourceFile",
        filePath: webMapsStub,
      };
    }

    if (typeof defaultResolveRequest === "function") {
      return defaultResolveRequest(context, moduleName, platform);
    }

    return context.resolveRequest(moduleName, platform);
  },
};

module.exports = config;
