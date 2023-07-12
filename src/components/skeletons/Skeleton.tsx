import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  AnimatedStyleProp,
} from "react-native-reanimated";

interface SkeletonLoaderProps {
  height: number;
  width: number;
  rounded?: boolean;
  fullWidth?: boolean;
  style?: AnimatedStyleProp<ViewStyle>;
}

const Skeleton: React.FC<SkeletonLoaderProps> = ({
  height,
  width,
  rounded = false,
  fullWidth = false,
  style = { marginVertical: 5 },
}) => {
  const progress = useSharedValue(0);

  React.useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 600 }), -1, true);
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  });

  const boxStyles = StyleSheet.create({
    box: {
      height: height,
      width: fullWidth ? "100%" : width, // If fullWidth is true, set width to "100%"
      alignSelf: fullWidth ? "stretch" : "auto", // If fullWidth is true, set alignSelf to 'stretch'
      backgroundColor: "#e2e8f0",
      borderRadius: rounded ? height / 2 : 8,
    },
  });

  return <Animated.View style={[boxStyles.box, animatedStyles, style]} />;
};

export default Skeleton;
