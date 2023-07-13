# 🌦️ Weather Forecast Application

This is a simple React Native application built with Typescript that allows users to retrieve and display weather forecasts.

## 📝 Description

This application uses an open-source weather API to retrieve weather forecasts for any given location. The users can search for a valid location using a city name or country. It shows the current weather and a 5-day forecast, which can be sorted by date in descending or ascending order.

## 🧰 Tech Stack

The stack used in this project includes:

- 🧩 React Native
- 🚀 Expo
- 🎨 NativeWind (Styling)
- 🗄️ Redux Toolkit (State Management)
- 📡 Tanstack Query (API State Management)
- 🧪 Jest and React Native Testing Library (Testing)
- 🎭 Mock Service Worker (MSW) (Mocking server)

## 📌 To Do

- Add Storybook: Due to the lack of support for Redux Toolkit, this is yet to be done.
- Extend a Tailwind base theme and configure as preferred, such as by creating a new palette of colors.
- Finalize adding all tests.

## 💻 Installation & Usage

### 📋 Prerequisites

- Node.js
- NPM or Yarn
- 🔀 direnv
- 🗝️ An API key from MetaWeather or OpenWeatherMap

### 📥 Installation

1. Clone the repository to your local machine.
2. Navigate into the directory: `cd weather-app`.
3. Install the project dependencies: `npm install` or `yarn install`.
4. Create a .env file in the root directory and add your API key: `WEATHER_API_KEY=your_api_key`. Ensure you replace `your_api_key` with the actual API key. The .env file is loaded into your shell automatically by direnv. Execute `direnv allow` in the same folder where .env file is to ensure proper loading of the environment variables.

### 🎮 Usage

1. Start the development server: `npm start`. This will start the development server. You can then open the app on simulators or on your own device through the Expo Go app.
2. For development build, install the Expo development APK for Android from [this link](https://expo.dev/accounts/alessandrocapra/projects/weather/builds/1e23e6c7-7d96-459b-9254-46e83778d6ed), then run the following command in the project folder: `npx expo start --dev-client`.
3. Run the tests: `npm run test`.

## 🛠️ CI/CD

In the `.github` folder, there is an example of creating a build once there are new pushes on main. It can also be extended to send updates when it gets merged on main.
