import { Text, TouchableOpacity } from "react-native";
import tw from "../../../../lib/tailwind";

const Button = ({ onPress, text, style }) => (
  <TouchableOpacity
    style={{
      ...style,
      ...tw`bg-white rounded-[30px]  h-[56px] border border-gray-300`,
    }}
    onPress={onPress}
  >
    <Text
      style={tw`font-bold text-black items-center justify-center py-4 text-center `}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

export default Button;
