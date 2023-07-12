import { Text, View } from "react-native";

type ErrorProps = {
  message: string;
};

function Error({ message = "We are investigating the issue" }: ErrorProps) {
  return (
    <View className="flex-col justify-center items-center p-12 gap-2">
      <Text className="text-4xl">❌</Text>
      <Text className="text-2xl font-bold">Error</Text>
      <Text className="text-lg text-center">{message}</Text>
    </View>
  );
}

export default Error;
