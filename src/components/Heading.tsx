import { ReactNode } from "react";
import { Text } from "react-native";

type HeadingProps = {
  children: ReactNode;
};

function Heading({ children }: HeadingProps) {
  return <Text className="py-4 text-3xl font-semibold">{children}</Text>;
}

export default Heading;
