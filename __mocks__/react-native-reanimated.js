"use strict";

const Reanimated = require("react-native-reanimated/mock");

// The mock for `react-native-reanimated` uses the `js-reanimated` package,
// which requires this node module to run. If you don't include this line,
// you'll get an error: `TypeError: _path(...).includes is not a function or its return value is not iterable`
const _path = require("path");

// `react-native-reanimated/plugin` is not mocked in the `react-native-reanimated/mock`,
// so we have to mock it manually
Reanimated.default.call = () => { };

module.exports = Reanimated;
