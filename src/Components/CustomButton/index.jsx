import { View, Text, TouchableOpacity } from "react-native";
import tw from "../../lib/tailwind";

const CustomButton = ({ onPress, text, style }) => (
  <TouchableOpacity
    style={{
      ...style,
      ...tw`bg-white rounded-4  h-[56px] border border-gray-300 items-center justify-center`,
    }}
    onPress={onPress}
  >
    <Text
      style={[
        tw`text-black text-center py-4 text-center `,
        { fontFamily: "Outfit_500Medium" },
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

export default CustomButton;
