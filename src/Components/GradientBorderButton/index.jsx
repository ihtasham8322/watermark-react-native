import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

import Gradient from "../Gradient";

const GradientBorderButton = ({ onPress, text, style, style2 }) => {
  return (
    <TouchableHighlight
      style={{ ...style, ...tw`rounded-4` }}
      onPress={onPress}
    >
      <View>
        <Gradient style={tw`py-4`} />
        <View
          style={tw`flex text-center bg-white m-[1px] w-[99.4%] rounded-4 items-center justify-center py-5`}
        >
          <Text
            style={[
              { ...style2, ...tw`text-black font-semibold text-[16px]` },
              { fontFamily: "Outfit_500Medium" },
            ]}
          >
            {text}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default GradientBorderButton;
