import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import tw from "../../../../lib/tailwind";
import Gradient from "../Gradient";

const GradientButton = ({ text, style, onPress, style2 }) => {
  return (
    <TouchableHighlight
      style={{ ...style, ...tw`rounded-8 w-[131px] h-[56px]` }}
      onPress={onPress}
    >
      <View>
        <Gradient style={tw`py-4`} />
        <View style={tw`flex text-center items-center justify-center py-4`}>
          <Text
            style={{ ...style2, ...tw`text-white font-semibold text-[16px]` }}
          >
            {text}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default GradientButton;
