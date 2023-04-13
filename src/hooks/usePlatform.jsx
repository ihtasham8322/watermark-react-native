import { Platform } from "react-native";

export default function usePlatform() {
  const isIos = Platform.OS === "ios";
  const isAndroid = Platform.OS === "android";
  const isWeb = Platform.OS === "web";

  return { isIos, isAndroid, isWeb };
}
