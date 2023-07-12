import { Text, View } from "react-native";

function WelcomeMessage() {
  return (
    <View className="flex-col flex-1 justify-center items-center gap-4">
      <Text className="text-7xl p-4">👋</Text>
      <Text className="text-3xl">Welcome</Text>
      <Text className="text-xl text-center">
        Search for a location to see the current weather and the next 5 days
        forecast
      </Text>
    </View>
  );
}

export default WelcomeMessage;
