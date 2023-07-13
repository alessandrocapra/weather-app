import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|node-fetch)",
  ],
  setupFiles: ["./jest.setup.ts"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./src/setupTests.ts",
  ],
};

export default config;
