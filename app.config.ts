import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: config.name ?? "wechat-clone",
  slug: config.slug ?? "wechat-clone",
  web: {
    ...(config.web ?? {}),
    bundler: "metro",
  },
});
